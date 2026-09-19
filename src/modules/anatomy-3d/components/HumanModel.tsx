"use client";

import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Mesh } from "three";
import { bodyParts } from "@/shared/anatomy";
import { useAnatomyStore } from "@/shared/store/useAnatomyStore";

export function HumanModel({ onReady }: { onReady: () => void }) {
  const { nodes } = useGLTF("/models/anatomy.glb", "/draco/");
  const invalidate = useThree((state) => state.invalidate);
  useEffect(() => {
    invalidate();
    onReady();
  }, [invalidate, nodes, onReady]);
  const selected = useAnatomyStore((state) => state.selectedMeshId);
  const hovered = useAnatomyStore((state) => state.hoveredMeshId);
  const select = useAnatomyStore((state) => state.setSelectedMesh);
  const hover = useAnatomyStore((state) => state.setHoveredMesh);
  return (
    <group>
      {bodyParts.map(({ meshId, center }) => {
        const node = nodes[meshId];
        if (!(node instanceof Mesh)) return null;
        const active = selected === meshId;
        const over = hovered === meshId;
        return (
          <mesh
            key={meshId}
            name={meshId}
            geometry={node.geometry}
            position={[...center]}
            onPointerOver={(event) => {
              event.stopPropagation();
              hover(meshId);
            }}
            onPointerOut={() => {
              if (useAnatomyStore.getState().hoveredMeshId === meshId)
                hover(null);
            }}
            onClick={(event) => {
              event.stopPropagation();
              if (event.delta <= 4) select(meshId);
            }}
          >
            <meshStandardMaterial
              color={active ? "#7ce9cc" : over ? "#b6eadf" : "#b4c9c7"}
              emissive={active || over ? "#40bc9a" : "#000000"}
              emissiveIntensity={active ? 0.55 : over ? 0.22 : 0}
              metalness={0.18}
              roughness={0.43}
            />
          </mesh>
        );
      })}
    </group>
  );
}
