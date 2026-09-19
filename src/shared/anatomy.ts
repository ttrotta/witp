// Shared mesh identifiers are the contract between the asset, seed and UI.
export const bodyParts = [
  { meshId: "head", center: [0, 1.72, 0] },
  { meshId: "cervical_spine", center: [0, 1.51, 0] },
  { meshId: "chest_l", center: [0.14, 1.35, 0.055] },
  { meshId: "chest_r", center: [-0.14, 1.35, 0.055] },
  { meshId: "abdomen", center: [0, 1.12, 0.05] },
  { meshId: "thoracic_spine", center: [0, 1.33, -0.115] },
  { meshId: "lumbar_spine", center: [0, 1.11, -0.1] },
  { meshId: "pelvis", center: [0, 0.95, 0] },
  { meshId: "shoulder_l", center: [0.29, 1.42, 0] },
  { meshId: "shoulder_r", center: [-0.29, 1.42, 0] },
  { meshId: "upper_arm_l", center: [0.355, 1.26, 0] },
  { meshId: "upper_arm_r", center: [-0.355, 1.26, 0] },
  { meshId: "elbow_l", center: [0.41, 1.1, 0] },
  { meshId: "elbow_r", center: [-0.41, 1.1, 0] },
  { meshId: "forearm_l", center: [0.45, 0.965, 0.01] },
  { meshId: "forearm_r", center: [-0.45, 0.965, 0.01] },
  { meshId: "wrist_l", center: [0.48, 0.83, 0.015] },
  { meshId: "wrist_r", center: [-0.48, 0.83, 0.015] },
  { meshId: "hand_l", center: [0.5, 0.745, 0.025] },
  { meshId: "hand_r", center: [-0.5, 0.745, 0.025] },
  { meshId: "hip_l", center: [0.145, 0.88, 0] },
  { meshId: "hip_r", center: [-0.145, 0.88, 0] },
  { meshId: "thigh_l", center: [0.15, 0.695, 0] },
  { meshId: "thigh_r", center: [-0.15, 0.695, 0] },
  { meshId: "knee_l", center: [0.145, 0.485, 0.015] },
  { meshId: "knee_r", center: [-0.145, 0.485, 0.015] },
  { meshId: "lower_leg_l", center: [0.14, 0.295, -0.015] },
  { meshId: "lower_leg_r", center: [-0.14, 0.295, -0.015] },
  { meshId: "ankle_l", center: [0.135, 0.12, 0] },
  { meshId: "ankle_r", center: [-0.135, 0.12, 0] },
  { meshId: "foot_l", center: [0.135, 0.065, 0.065] },
  { meshId: "foot_r", center: [-0.135, 0.065, 0.065] },
] as const;

export type MeshId = (typeof bodyParts)[number]["meshId"];

export function isMeshId(value: string): value is MeshId {
  return bodyParts.some((part) => part.meshId === value);
}
