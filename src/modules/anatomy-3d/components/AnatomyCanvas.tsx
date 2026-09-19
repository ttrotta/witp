"use client";

import dynamic from "next/dynamic";
import { Crosshair } from "lucide-react";
import { useTranslation } from "@/infrastructure/i18n";
import { bodyParts, isMeshId } from "@/shared/anatomy";
import { useAnatomyStore } from "@/shared/store/useAnatomyStore";

const Scene = dynamic(() => import("./AnatomyScene"), {
  ssr: false,
  loading: () => <SceneLoading />,
});
function SceneLoading() {
  const { t } = useTranslation("anatomy");
  return (
    <div role="status" className="scene-message glass">
      {t.loading}
    </div>
  );
}

export function AnatomyCanvas() {
  const { t } = useTranslation("anatomy");
  const selected = useAnatomyStore((state) => state.selectedMeshId);
  const hovered = useAnatomyStore((state) => state.hoveredMeshId);
  const select = useAnatomyStore((state) => state.setSelectedMesh);
  const region = hovered ?? selected;
  return (
    <>
      <div className="anatomy-intro">
        <h1 className="text-[clamp(2.3rem,3.7vw,3.7rem)] leading-[1.08] font-medium tracking-[-0.035em] text-balance whitespace-pre-line">
          {t.title}
        </h1>
        <p className="text-muted mt-6 max-w-72 text-sm leading-relaxed">
          {t.intro}
        </p>
        <label htmlFor="body-region" className="field-label mt-9">
          {t.select}
        </label>
        <select
          id="body-region"
          className="field max-w-80"
          value={selected ?? ""}
          onChange={(event) => select(event.target.value || null)}
        >
          <option value="">{t.selectPlaceholder}</option>
          {bodyParts.map(({ meshId }) => (
            <option key={meshId} value={meshId}>
              {t.parts[meshId]}
            </option>
          ))}
        </select>
        <p className="text-muted mt-4 flex items-center gap-2 text-xs">
          <Crosshair className="text-accent size-3.5" aria-hidden="true" />
          {t.regionCount}
        </p>
      </div>
      <div
        className="anatomy-stage"
        style={{ cursor: hovered ? "pointer" : "grab" }}
      >
        <div className="model-floor" aria-hidden="true" />
        <Scene />
        <div className="region-label" aria-live="polite">
          {region && isMeshId(region) ? (
            <>
              <span className="bg-accent mr-2 inline-block size-1.5 rounded-full" />
              {t.parts[region]}
            </>
          ) : (
            t.hoverHint
          )}
        </div>
      </div>
    </>
  );
}
