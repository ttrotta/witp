import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile, stat } from "node:fs/promises";
import { createRequire } from "node:module";
import { NodeIO } from "@gltf-transform/core";
import { KHRDracoMeshCompression } from "@gltf-transform/extensions";
import { bodyParts } from "./src/shared/anatomy";
import { useAnatomyStore } from "./src/shared/store/useAnatomyStore";
import { painRecordSchema } from "./src/modules/pain-tracking/schemas";
import { authSchema } from "./src/modules/auth/schemas";
import {
  hashPassword,
  verifyPassword,
} from "./src/infrastructure/auth/password";
import {
  allowAttempt,
  allowAuthAttempt,
  waitlistLimit,
} from "./src/infrastructure/auth/rate-limit";
import { config as proxyConfig } from "./src/proxy";
import {
  createBlogEntrySchema,
  createCommentSchema,
  createPostSchema,
  listPostsSchema,
  toggleLikeSchema,
} from "./src/modules/community/schemas";
import {
  followUserSchema,
  updateProfileSchema,
  updateSettingsSchema,
  usernameSchema,
} from "./src/modules/user-profile/schemas";

test("Draco asset, shared selection and translated region names agree", async () => {
  const require = createRequire(import.meta.url);
  const draco = require("draco3dgltf");
  const io = new NodeIO()
    .registerExtensions([KHRDracoMeshCompression])
    .registerDependencies({
      "draco3d.decoder": await draco.createDecoderModule(),
    });
  const bytes = await readFile("public/models/anatomy.glb");
  const json = JSON.parse(
    bytes.subarray(20, 20 + bytes.readUInt32LE(12)).toString(),
  );
  assert.ok(json.extensionsRequired.includes("KHR_draco_mesh_compression"));
  assert.ok(bytes.length < 2_000_000);
  const document = await io.read("public/models/anatomy.glb");
  const ids = bodyParts.map((part) => part.meshId).sort();
  assert.deepEqual(
    document
      .getRoot()
      .listMeshes()
      .map((mesh) => mesh.getName())
      .sort(),
    ids,
  );
  assert.equal(new Set(ids).size, ids.length);
  for (const mesh of document.getRoot().listMeshes())
    assert.ok(
      mesh.listPrimitives()[0].getAttribute("POSITION")!.getCount() > 0,
    );
  for (const lang of ["en", "es"]) {
    const dictionary = JSON.parse(
      await readFile(
        `src/infrastructure/i18n/dictionaries/${lang}/anatomy.json`,
        "utf8",
      ),
    );
    assert.deepEqual(Object.keys(dictionary.parts).sort(), ids);
  }
  assert.ok((await stat("public/draco/draco_decoder.wasm")).size > 0);
  const store = useAnatomyStore.getState();
  store.setSelectedMesh("knee_r");
  assert.equal(useAnatomyStore.getState().selectedMeshId, "knee_r");
  assert.deepEqual(
    useAnatomyStore.getState().cameraTarget,
    [-0.145, 0.485, 0.015],
  );
  store.setHoveredMesh("head");
  store.resetSelection();
  assert.equal(useAnatomyStore.getState().selectedMeshId, null);
  assert.equal(useAnatomyStore.getState().hoveredMeshId, null);
  assert.equal(useAnatomyStore.getState().cameraTarget, null);
  store.setSelectedMesh("unknown");
  assert.equal(useAnatomyStore.getState().selectedMeshId, null);
});

test("pain and account trust boundaries reject invalid input", () => {
  const entry = {
    meshId: "knee_r",
    intensity: 1,
    notes: "  test  ",
    recordedAt: "2026-01-15",
  };
  assert.equal(painRecordSchema.parse(entry).notes, "test");
  for (const invalid of [
    { intensity: 0 },
    { intensity: 11 },
    { intensity: 1.5 },
    { intensity: "5" },
    { meshId: "not_a_region" },
    { recordedAt: "2026-02-30" },
    { recordedAt: "2999-01-01" },
    { notes: "x".repeat(2001) },
  ]) {
    assert.equal(
      painRecordSchema.safeParse({ ...entry, ...invalid }).success,
      false,
    );
  }
  const valid = {
    mode: "register",
    username: "test_user",
    email: "TEST@example.com",
    password: "a secure long password",
  };
  assert.equal(authSchema.parse(valid).email, "test@example.com");
  assert.equal(
    authSchema.safeParse({ ...valid, username: undefined }).success,
    false,
  );
  assert.equal(
    authSchema.safeParse({ ...valid, password: "short" }).success,
    false,
  );
  assert.equal(
    authSchema.safeParse({ ...valid, username: "<script>" }).success,
    false,
  );
  // Caller-supplied identities never enter the parsed pain payload.
  assert.equal(
    "userId" in painRecordSchema.parse({ ...entry, userId: "someone-else" }),
    false,
  );
});

test("password hashes reject wrong credentials and attempts expire", async () => {
  const hash = await hashPassword("a secure long password");
  assert.equal(await verifyPassword("a secure long password", hash), true);
  assert.equal(await verifyPassword("a different password", hash), false);
  assert.equal(await verifyPassword("anything", "invalid"), false);
  assert.notEqual(await hashPassword("a secure long password"), hash);
  for (let index = 0; index < 8; index++)
    assert.equal(allowAuthAttempt("test-key", 1000), true);
  assert.equal(allowAuthAttempt("test-key", 1000), false);
  assert.equal(allowAuthAttempt("test-key", 1000 + 15 * 60 * 1000), true);
});

test("waitlist attempts are limited per key and independent of auth", () => {
  const { max, windowMs } = waitlistLimit;
  for (let index = 0; index < max; index++)
    assert.equal(allowAttempt("waitlist:ip-a", waitlistLimit, 1000), true);
  assert.equal(allowAttempt("waitlist:ip-a", waitlistLimit, 1000), false);
  assert.equal(allowAttempt("waitlist:ip-b", waitlistLimit, 1000), true);
  assert.equal(allowAuthAttempt("ip-a", 1000), true);
  assert.equal(
    allowAttempt("waitlist:ip-a", waitlistLimit, 1000 + windowMs),
    true,
  );
});

test("locale proxy skips API routes and static files", () => {
  const matcher = new RegExp(`^${proxyConfig.matcher[0]}$`);
  for (const path of ["/", "/forum", "/es/forum"])
    assert.equal(matcher.test(path), true, path);
  for (const path of [
    "/api/health",
    "/api/mcp",
    "/_next/static/chunk.js",
    "/models/anatomy.glb",
  ])
    assert.equal(matcher.test(path), false, path);
});

test("community payloads enforce the documented contract", () => {
  const id = "b182cf09-7756-42bb-9877-3e1cb16016da";
  const post = {
    title: "  Sharp pain after running  ",
    content: "Every run past three miles ends with lateral knee pain.",
    meshId: "knee_r",
  };
  assert.equal(createPostSchema.parse(post).title, "Sharp pain after running");
  for (const invalid of [
    { title: "abcd" },
    { content: "too short" },
    { meshId: "not_a_region" },
    { imageUrl: "javascript:alert(1)" },
    { imageUrl: "ftp://example.com/a.png" },
  ])
    assert.equal(
      createPostSchema.safeParse({ ...post, ...invalid }).success,
      false,
    );
  assert.equal(
    createPostSchema.safeParse({
      ...post,
      imageUrl: "https://example.com/a.png",
    }).success,
    true,
  );

  assert.deepEqual(listPostsSchema.parse({}), { limit: 20, sort: "recent" });
  assert.equal(listPostsSchema.parse({ limit: "50" }).limit, 50);
  for (const invalid of [
    { limit: 51 },
    { sort: "oldest" },
    { cursor: "not-a-uuid" },
  ])
    assert.equal(listPostsSchema.safeParse(invalid).success, false);

  assert.equal(
    createCommentSchema.safeParse({ postId: id, content: "   " }).success,
    false,
  );
  assert.equal(
    createCommentSchema.safeParse({ postId: id, parentId: null, content: "ok" })
      .success,
    true,
  );

  assert.equal(toggleLikeSchema.safeParse({ postId: id }).success, true);
  assert.equal(toggleLikeSchema.safeParse({ commentId: id }).success, true);
  assert.equal(toggleLikeSchema.safeParse({}).success, false);
  assert.equal(
    toggleLikeSchema.safeParse({ postId: id, commentId: id }).success,
    false,
  );

  const blog = {
    title: "Lateral knee pain explained",
    content: "x".repeat(100),
    tags: ["Knee", "knee ", "rehab"],
  };
  const parsed = createBlogEntrySchema.parse(blog);
  assert.deepEqual(parsed.tags, ["knee", "rehab"]);
  assert.equal(parsed.isPublic, true);
  assert.equal(
    createBlogEntrySchema.safeParse({ ...blog, tags: [] }).success,
    false,
  );
});

test("profile payloads enforce the documented contract", () => {
  assert.equal(usernameSchema.safeParse("dr_smith").success, true);
  assert.equal(usernameSchema.safeParse("<script>").success, false);
  assert.equal(
    updateProfileSchema.safeParse({
      description: "Marathon runner",
      website: "https://example.org",
      birthDate: "1988-04-12",
    }).success,
    true,
  );
  for (const invalid of [
    { description: "x".repeat(501) },
    { location: "x".repeat(101) },
    { website: "javascript:alert(1)" },
    { birthDate: "2999-01-01" },
    { birthDate: "1988-02-30" },
  ])
    assert.equal(updateProfileSchema.safeParse(invalid).success, false);

  assert.equal(
    updateSettingsSchema.safeParse({
      theme: "dark",
      language: "en",
      country: "US",
    }).success,
    true,
  );
  for (const invalid of [
    { theme: "sepia" },
    { language: "fr" },
    { country: "usa" },
  ])
    assert.equal(updateSettingsSchema.safeParse(invalid).success, false);
  assert.equal(followUserSchema.safeParse({ userId: "1" }).success, false);
});
