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
import { allowAuthAttempt } from "./src/infrastructure/auth/rate-limit";

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
