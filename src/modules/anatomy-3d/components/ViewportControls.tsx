"use client";

import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { useTranslation } from "@/infrastructure/i18n";

export function ViewportControls({
  view,
  onView,
  onReset,
  onZoom,
}: {
  view: "front" | "back";
  onView: (view: "front" | "back") => void;
  onReset: () => void;
  onZoom: (distance: number) => void;
}) {
  const { t } = useTranslation("anatomy");
  return (
    <div
      className="glass flex items-center gap-1 rounded-full p-1.5"
      role="group"
      aria-label={t.controls}
    >
      <button
        className="icon-button"
        type="button"
        title={t.reset}
        aria-label={t.reset}
        onClick={onReset}
      >
        <RotateCcw />
      </button>
      <span className="mx-1 h-5 w-px bg-white/15" aria-hidden="true" />
      {(["front", "back"] as const).map((side) => (
        <button
          key={side}
          type="button"
          aria-pressed={view === side}
          onClick={() => onView(side)}
          className={`min-h-10 rounded-full px-3 text-xs font-medium transition-colors ${view === side ? "bg-white/15 text-white" : "text-muted hover:text-white"}`}
        >
          {t[side]}
        </button>
      ))}
      <span className="mx-1 h-5 w-px bg-white/15" aria-hidden="true" />
      <button
        type="button"
        className="icon-button"
        title={t.zoomOut}
        aria-label={t.zoomOut}
        onClick={() => onZoom(-0.3)}
      >
        <ZoomOut />
      </button>
      <button
        type="button"
        className="icon-button"
        title={t.zoomIn}
        aria-label={t.zoomIn}
        onClick={() => onZoom(0.3)}
      >
        <ZoomIn />
      </button>
    </div>
  );
}
