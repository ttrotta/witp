"use client";

import {
  Component,
  Suspense,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { Canvas } from "@react-three/fiber";
import { CameraControls, Html, useGLTF } from "@react-three/drei";
import { useTranslation } from "@/infrastructure/i18n";
import { useAnatomyStore } from "@/shared/store/useAnatomyStore";
import { HumanModel } from "./HumanModel";
import { ViewportControls } from "./ViewportControls";

class ModelBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function smooth() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function CameraRig({
  controls,
  view,
}: {
  controls: RefObject<CameraControls | null>;
  view: "front" | "back";
}) {
  const target = useAnatomyStore((state) => state.cameraTarget);
  const selected = useAnatomyStore((state) => state.selectedMeshId);
  useEffect(() => {
    const camera = controls.current;
    if (!camera) return;
    const side =
      target && (selected === "thoracic_spine" || selected === "lumbar_spine")
        ? -1
        : view === "front"
          ? 1
          : -1;
    const [x, y, z] = target ?? [0, 0.94, 0];
    void camera.setLookAt(
      x + (target ? 0.12 : 0),
      y + 0.06,
      z + side * (target ? 1.65 : 3.5),
      x,
      y,
      z,
      smooth(),
    );
  }, [target, selected, view, controls]);
  return (
    <CameraControls
      ref={controls}
      makeDefault
      minDistance={0.7}
      maxDistance={4.8}
      minPolarAngle={Math.PI / 4}
      maxPolarAngle={Math.PI * 0.75}
      smoothTime={0.65}
      draggingSmoothTime={0.15}
      onStart={() => useAnatomyStore.getState().setHoveredMesh(null)}
    />
  );
}

export default function AnatomyScene() {
  const { t } = useTranslation("anatomy");
  const controls = useRef<CameraControls>(null);
  const [view, setView] = useState<"front" | "back">("front");
  const [attempt, setAttempt] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const target = useAnatomyStore((state) => state.cameraTarget);
  const selected = useAnatomyStore((state) => state.selectedMeshId);
  const reset = useAnatomyStore((state) => state.resetSelection);
  const error = (
    <div className="scene-message glass">
      <p>{t.loadError}</p>
      <button
        className="primary-button mt-4"
        onClick={() => {
          useGLTF.clear("/models/anatomy.glb");
          setLoaded(false);
          setAttempt(attempt + 1);
        }}
      >
        {t.retry}
      </button>
    </div>
  );
  return (
    <>
      <ModelBoundary key={attempt} fallback={error}>
        <div className="model-canvas" data-model-ready={loaded}>
          <Canvas
            camera={{ position: [0.3, 1, 3.5], fov: 36 }}
            dpr={[1, 1.5]}
            frameloop="demand"
            gl={{ antialias: true, powerPreference: "low-power" }}
            fallback={error}
            aria-label={t.modelLabel}
          >
            <ambientLight intensity={0.8} />
            <hemisphereLight args={["#dffdf3", "#1b353e", 1.6]} />
            <directionalLight
              position={[2, 4, 4]}
              intensity={3}
              color="#edfefc"
            />
            <directionalLight
              position={[-3, 1, -2]}
              intensity={3}
              color="#78bfbc"
            />
            <Suspense
              fallback={
                <Html center>
                  <div
                    role="status"
                    className="glass rounded-xl px-5 py-3 text-sm whitespace-nowrap"
                  >
                    {t.loading}
                  </div>
                </Html>
              }
            >
              <HumanModel onReady={() => setLoaded(true)} />
            </Suspense>
            <CameraRig controls={controls} view={view} />
          </Canvas>
        </div>
      </ModelBoundary>
      <div className="viewport-hud">
        <ViewportControls
          view={
            target &&
            (selected === "thoracic_spine" || selected === "lumbar_spine")
              ? "back"
              : view
          }
          onView={(next) => {
            setView(next);
            if (target) useAnatomyStore.getState().setCameraTarget(null);
          }}
          onReset={() => {
            reset();
            setView("front");
            void controls.current?.setLookAt(0, 1, 3.5, 0, 0.94, 0, smooth());
          }}
          onZoom={(distance) => {
            void controls.current?.dolly(distance, smooth());
          }}
        />
        <p className="text-muted mt-3 hidden text-center text-xs sm:block">
          {t.interaction}
        </p>
        <p className="text-muted mt-3 text-center text-xs sm:hidden">
          {t.touchInteraction}
        </p>
      </div>
    </>
  );
}
