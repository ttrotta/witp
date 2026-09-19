"use client";

import { create } from "zustand";
import { bodyParts, isMeshId } from "@/shared/anatomy";

type AnatomyState = {
  selectedMeshId: string | null;
  hoveredMeshId: string | null;
  cameraTarget: [number, number, number] | null;
  setSelectedMesh: (id: string | null) => void;
  setHoveredMesh: (id: string | null) => void;
  setCameraTarget: (target: [number, number, number] | null) => void;
  resetSelection: () => void;
};

export const useAnatomyStore = create<AnatomyState>((set) => ({
  selectedMeshId: null,
  hoveredMeshId: null,
  cameraTarget: null,
  setSelectedMesh: (id) => {
    const part = bodyParts.find((part) => part.meshId === id);
    set({
      selectedMeshId: part?.meshId ?? null,
      cameraTarget: part ? [...part.center] : null,
    });
  },
  setHoveredMesh: (id) =>
    set({ hoveredMeshId: id && isMeshId(id) ? id : null }),
  setCameraTarget: (target) => set({ cameraTarget: target }),
  resetSelection: () =>
    set({ selectedMeshId: null, hoveredMeshId: null, cameraTarget: null }),
}));
