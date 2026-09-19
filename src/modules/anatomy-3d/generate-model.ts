import { mkdir, copyFile, stat } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { Document, NodeIO } from "@gltf-transform/core";
import { KHRDracoMeshCompression } from "@gltf-transform/extensions";
import { draco } from "@gltf-transform/functions";
import {
  BufferGeometry,
  CatmullRomCurve3,
  Float32BufferAttribute,
  SphereGeometry,
  Vector3,
} from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
import { bodyParts } from "../../shared/anatomy";

const require = createRequire(import.meta.url);
const draco3d = require("draco3dgltf");
const document = new Document();
const buffer = document.createBuffer();
const scene = document.createScene("WITP body regions");
const material = document
  .createMaterial("Porcelain")
  .setBaseColorFactor([0.72, 0.84, 0.83, 1])
  .setMetallicFactor(0.12)
  .setRoughnessFactor(0.48);

// Original, stylized surface anatomy: a locator, not a clinical anatomical atlas.
// ponytail: procedural contours locate surface regions; use an artist-reviewed asset for clinical detail.
const dimensions: Record<string, [number, number, number]> = {
  head: [0.112, 0.157, 0.108],
  cervical_spine: [0.07, 0.077, 0.072],
  chest: [0.137, 0.164, 0.105],
  abdomen: [0.19, 0.16, 0.095],
  thoracic_spine: [0.23, 0.19, 0.057],
  lumbar_spine: [0.175, 0.115, 0.049],
  pelvis: [0.202, 0.13, 0.116],
  shoulder: [0.102, 0.105, 0.098],
  upper_arm: [0.073, 0.146, 0.075],
  elbow: [0.061, 0.064, 0.062],
  forearm: [0.058, 0.134, 0.057],
  wrist: [0.038, 0.045, 0.038],
  hand: [0.05, 0.072, 0.026],
  hip: [0.107, 0.125, 0.112],
  thigh: [0.096, 0.21, 0.103],
  knee: [0.066, 0.075, 0.07],
  lower_leg: [0.068, 0.177, 0.072],
  ankle: [0.043, 0.055, 0.043],
  foot: [0.059, 0.055, 0.123],
};

// Adjacent regions share their boundary rings, so joints keep a continuous silhouette.
const chest = [
  [0.079, 1.5, 0.067],
  [0.2, 1.45, 0.085],
  [0.24, 1.37, 0.12],
  [0.222, 1.29, 0.115],
  [0.185, 1.22, 0.098],
];
const abdomen = [
  [0.185, 1.22, 0.098],
  [0.17, 1.13, 0.099],
  [0.175, 1.05, 0.1],
  [0.195, 0.99, 0.107],
];
const profiles: Record<string, number[][]> = {
  cervical_spine: [
    [0.075, 1.59, 0.07],
    [0.062, 1.55, 0.063],
    [0.079, 1.5, 0.067],
  ],
  chest,
  thoracic_spine: chest,
  abdomen,
  lumbar_spine: abdomen,
  pelvis: [
    [0.195, 0.99, 0.107],
    [0.217, 0.93, 0.12],
    [0.19, 0.86, 0.09],
    [0.06, 0.835, 0.06],
  ],
  shoulder: [
    [0.025, 1.485, 0.028],
    [0.076, 1.455, 0.08],
    [0.082, 1.415, 0.085],
    [0.072, 1.37, 0.077],
  ],
  upper_arm: [
    [0.072, 1.37, 0.077],
    [0.069, 1.29, 0.072],
    [0.057, 1.21, 0.06],
    [0.052, 1.16, 0.054],
  ],
  elbow: [
    [0.052, 1.16, 0.054],
    [0.051, 1.105, 0.052],
    [0.047, 1.065, 0.05],
  ],
  forearm: [
    [0.047, 1.065, 0.05],
    [0.054, 1.015, 0.055],
    [0.045, 0.95, 0.045],
    [0.031, 0.855, 0.032],
  ],
  wrist: [
    [0.031, 0.855, 0.032],
    [0.031, 0.825, 0.029],
    [0.032, 0.806, 0.026],
  ],
  hip: [
    [0.075, 0.957, 0.085],
    [0.107, 0.9, 0.114],
    [0.102, 0.81, 0.11],
  ],
  thigh: [
    [0.102, 0.81, 0.11],
    [0.096, 0.74, 0.103],
    [0.084, 0.65, 0.087],
    [0.063, 0.54, 0.064],
  ],
  knee: [
    [0.063, 0.54, 0.064],
    [0.062, 0.485, 0.068],
    [0.057, 0.43, 0.063],
  ],
  lower_leg: [
    [0.057, 0.43, 0.063],
    [0.071, 0.35, 0.075],
    [0.059, 0.26, 0.064],
    [0.039, 0.165, 0.041],
  ],
  ankle: [
    [0.039, 0.165, 0.041],
    [0.039, 0.12, 0.039],
    [0.04, 0.085, 0.04],
  ],
};

function surface(region: string, center: readonly number[], side: number) {
  const rings = new CatmullRomCurve3(
    profiles[region].map(([radius, y, depth]) => new Vector3(radius, y, depth)),
  ).getPoints(profiles[region].length * 6);
  const start =
    region === "chest"
      ? side === 1
        ? 0
        : -Math.PI / 2
      : region === "abdomen"
        ? -Math.PI / 2
        : region === "thoracic_spine" || region === "lumbar_spine"
          ? Math.PI / 2
          : 0;
  const arc =
    region === "chest"
      ? Math.PI / 2
      : ["abdomen", "thoracic_spine", "lumbar_spine"].includes(region)
        ? Math.PI
        : Math.PI * 2;
  const segments = 32;
  const vertices: number[] = [];
  const indices: number[] = [];
  for (const [row, ring] of rings.entries()) {
    const arm = ["shoulder", "upper_arm", "elbow", "forearm", "wrist"].includes(
      region,
    );
    const leg = ["hip", "thigh", "knee", "lower_leg", "ankle"].includes(region);
    const offsetX = arm
      ? side * (0.285 + (1.42 - ring.y) * 0.34)
      : leg
        ? side * 0.14
        : 0;
    for (let column = 0; column <= segments; column++) {
      const theta = start + (arc * column) / segments;
      vertices.push(
        offsetX + Math.sin(theta) * ring.x - center[0],
        ring.y - center[1],
        Math.cos(theta) * ring.z - center[2],
      );
      if (row < rings.length - 1 && column < segments) {
        const a = row * (segments + 1) + column;
        const c = a + segments + 1;
        indices.push(a, c, a + 1, c, c + 1, a + 1);
      }
    }
  }
  const geometry = new BufferGeometry().setAttribute(
    "position",
    new Float32BufferAttribute(vertices, 3),
  );
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

for (const part of bodyParts) {
  const region = part.meshId.replace(/_[lr]$/, "");
  const [x, y, z] = dimensions[region];
  const side = part.meshId.endsWith("_l") ? 1 : -1;
  const geometry = profiles[region]
    ? surface(region, part.center, side)
    : new SphereGeometry(1, 24, 18).scale(x, y, z);
  if (region === "hand") geometry.rotateZ(side * 0.24);
  const pieces = [geometry];
  if (region === "head") {
    const nose = new SphereGeometry(1, 12, 10);
    nose.scale(0.023, 0.035, 0.035).translate(0, -0.02, 0.101);
    pieces.push(nose);
    for (const direction of [-1, 1]) {
      const ear = new SphereGeometry(1, 12, 10);
      ear.scale(0.019, 0.037, 0.022).translate(direction * 0.11, -0.012, 0);
      pieces.push(ear);
    }
  }
  if (region === "hand") {
    for (let finger = 0; finger < 4; finger++) {
      const shape = new SphereGeometry(1, 10, 8);
      shape
        .scale(0.01, 0.041 - Math.abs(finger - 1) * 0.004, 0.012)
        .translate((finger - 1.5) * 0.023, -0.073, 0);
      pieces.push(shape);
    }
    const thumb = new SphereGeometry(1, 10, 8);
    thumb
      .scale(0.016, 0.04, 0.016)
      .rotateZ(-side * 0.55)
      .translate(-side * 0.052, -0.005, 0.015);
    pieces.push(thumb);
  }
  pieces.forEach((piece) => piece.deleteAttribute("uv"));
  const merged = mergeGeometries(pieces);
  const position = document
    .createAccessor()
    .setType("VEC3")
    .setArray(new Float32Array(merged.getAttribute("position").array))
    .setBuffer(buffer);
  const normal = document
    .createAccessor()
    .setType("VEC3")
    .setArray(new Float32Array(merged.getAttribute("normal").array))
    .setBuffer(buffer);
  const indices = document
    .createAccessor()
    .setType("SCALAR")
    .setArray(new Uint16Array(merged.index!.array))
    .setBuffer(buffer);
  const primitive = document
    .createPrimitive()
    .setAttribute("POSITION", position)
    .setAttribute("NORMAL", normal)
    .setIndices(indices)
    .setMaterial(material);
  const mesh = document.createMesh(part.meshId).addPrimitive(primitive);
  scene.addChild(
    document
      .createNode(part.meshId)
      .setMesh(mesh)
      .setTranslation([...part.center])
      .setExtras({ meshId: part.meshId }),
  );
  pieces.forEach((piece) => piece.dispose());
  merged.dispose();
}

const io = new NodeIO()
  .registerExtensions([KHRDracoMeshCompression])
  .registerDependencies({
    "draco3d.encoder": await draco3d.createEncoderModule(),
  });
await document.transform(
  draco({ method: "edgebreaker", quantizePosition: 14, quantizeNormal: 10 }),
);
await mkdir("public/models", { recursive: true });
await mkdir("public/draco", { recursive: true });
await io.write("public/models/anatomy.glb", document);
const decoder = join(
  dirname(require.resolve("three")),
  "../examples/jsm/libs/draco/gltf",
);
for (const file of [
  "draco_wasm_wrapper.js",
  "draco_decoder.wasm",
  "draco_decoder.js",
]) {
  await copyFile(join(decoder, file), join("public/draco", file));
}
console.log(
  `${bodyParts.length} regions, ${((await stat("public/models/anatomy.glb")).size / 1024).toFixed(1)} KiB, Draco compressed.`,
);
