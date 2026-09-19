"use client";

import {
  useEffect,
  useRef,
  useState,
  useTransition,
  type ReactNode,
} from "react";
import {
  ArrowUpRight,
  Check,
  Crosshair,
  HeartPulse,
  LockKeyhole,
  NotebookPen,
  X,
} from "lucide-react";
import { useTranslation } from "@/infrastructure/i18n";
import { isMeshId } from "@/shared/anatomy";
import { useAnatomyStore } from "@/shared/store/useAnatomyStore";
import { createPainRecord } from "../actions";
import type { PainEntry } from "../schemas";

type Draft = { intensity: number; notes: string; recordedAt: string };
type Result = {
  saved?: boolean;
  error?: "invalid" | "unauthorized" | "missingRegion" | "connection";
};

function today() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

export function PainLogSidebar({
  signedIn,
  authForm,
  entries,
  historyError,
}: {
  signedIn: boolean;
  authForm: ReactNode;
  entries: PainEntry[];
  historyError?: "connection";
}) {
  const { t, locale } = useTranslation("pain");
  const { t: anatomy } = useTranslation("anatomy");
  const selected = useAnatomyStore((state) => state.selectedMeshId);
  const reset = useAnatomyStore((state) => state.resetSelection);
  const [drafts, setDrafts] = useState<Record<string, Draft>>({});
  const [results, setResults] = useState<Record<string, Result>>({});
  const [pending, startTransition] = useTransition();
  const heading = useRef<HTMLHeadingElement>(null);
  const draft = (selected && drafts[selected]) || {
    intensity: 5,
    notes: "",
    recordedAt: today(),
  };
  const result = selected ? results[selected] : undefined;
  const needsAuth = !signedIn || result?.error === "unauthorized";
  const update = (value: Partial<Draft>) => {
    if (!selected) return;
    setDrafts((current) => ({
      ...current,
      [selected]: { ...draft, ...value },
    }));
    setResults((current) => ({ ...current, [selected]: {} }));
  };
  useEffect(() => {
    if (selected) {
      heading.current?.focus({ preventScroll: true });
      if (window.matchMedia("(max-width: 1023px)").matches)
        heading.current?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
          block: "start",
        });
    }
  }, [selected]);
  return (
    <aside id="journal" className="pain-sidebar" aria-label={t.title}>
      <section
        className="glass journal-panel rounded-2xl p-6 sm:p-7"
        data-selected={Boolean(selected)}
      >
        {selected && isMeshId(selected) ? (
          <>
            <div className="mb-7 flex items-start justify-between gap-3">
              <div>
                <h2
                  ref={heading}
                  tabIndex={-1}
                  className="text-2xl font-medium tracking-tight outline-none"
                >
                  {anatomy.parts[selected]}
                </h2>
              </div>
              <button
                type="button"
                className="icon-button -mt-1 -mr-2"
                aria-label={t.close}
                onClick={() => {
                  reset();
                  document
                    .getElementById("body-region")
                    ?.focus({ preventScroll: true });
                }}
              >
                <X />
              </button>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const meshId = selected;
                setDrafts((current) => ({ ...current, [meshId]: draft }));
                startTransition(async () => {
                  try {
                    const response = await createPainRecord({
                      meshId,
                      ...draft,
                    });
                    setResults((current) => ({
                      ...current,
                      [meshId]: response.error
                        ? { error: response.error }
                        : { saved: true },
                    }));
                  } catch {
                    setResults((current) => ({
                      ...current,
                      [meshId]: { error: "connection" },
                    }));
                  }
                });
              }}
            >
              <fieldset disabled={pending} className="space-y-6">
                <div>
                  <label htmlFor="pain-intensity" className="field-label">
                    {t.intensity}
                  </label>
                  <div className="my-4 flex items-baseline gap-2">
                    <output
                      htmlFor="pain-intensity"
                      className="text-accent text-5xl leading-none font-medium tracking-tight tabular-nums"
                    >
                      {draft.intensity}
                    </output>
                    <span className="text-muted text-sm">
                      / 10 ·{" "}
                      {draft.intensity <= 3
                        ? t.mild
                        : draft.intensity <= 6
                          ? t.moderate
                          : t.severe}
                    </span>
                  </div>
                  <input
                    id="pain-intensity"
                    name="intensity"
                    type="range"
                    min={1}
                    max={10}
                    step={1}
                    value={draft.intensity}
                    onChange={(event) =>
                      update({ intensity: Number(event.target.value) })
                    }
                    className="accent-accent w-full"
                  />
                  <div className="text-muted mt-1 flex justify-between text-xs">
                    <span>1 · {t.mild}</span>
                    <span>10 · {t.severe}</span>
                  </div>
                </div>
                <div>
                  <label htmlFor="pain-date" className="field-label">
                    {t.date}
                  </label>
                  <input
                    id="pain-date"
                    name="recordedAt"
                    type="date"
                    required
                    max={today()}
                    value={draft.recordedAt}
                    onChange={(event) =>
                      update({ recordedAt: event.target.value })
                    }
                    className="field"
                  />
                </div>
                <div>
                  <label
                    htmlFor="pain-notes"
                    className="field-label flex justify-between gap-2"
                  >
                    {t.notes}
                    <span className="text-muted font-normal">{t.optional}</span>
                  </label>
                  <textarea
                    id="pain-notes"
                    name="notes"
                    rows={3}
                    maxLength={2000}
                    value={draft.notes}
                    onChange={(event) => update({ notes: event.target.value })}
                    className="field resize-y"
                    placeholder={t.notesPlaceholder}
                  />
                </div>
                {signedIn && (
                  <button
                    type="submit"
                    disabled={result?.saved}
                    className="primary-button w-full"
                  >
                    {pending ? t.saving : result?.saved ? t.saved : t.save}
                    {result?.saved ? (
                      <Check className="size-4" aria-hidden="true" />
                    ) : (
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    )}
                  </button>
                )}
              </fieldset>
              {result?.saved && (
                <p role="status" className="text-accent mt-3 text-sm">
                  {t.saved}
                </p>
              )}
              {result?.error && (
                <p role="alert" className="text-error mt-3 text-sm">
                  {t.errors[result.error]}
                </p>
              )}
            </form>
            {needsAuth && (
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-muted mb-5 text-sm leading-relaxed">
                  {t.loginPrompt}
                </p>
                {authForm}
              </div>
            )}
          </>
        ) : (
          <>
            <HeartPulse
              className="text-accent mb-6 size-8"
              strokeWidth={1.3}
              aria-hidden="true"
            />
            <h2 className="text-2xl font-medium tracking-tight">
              {t.emptyTitle}
            </h2>
            <p className="text-muted mt-3 text-sm leading-relaxed">
              {t.emptyDescription}
            </p>
            <ol className="mt-8 space-y-5 text-sm">
              {[
                [Crosshair, t.stepSelect],
                [HeartPulse, t.stepDescribe],
                [NotebookPen, t.stepSave],
              ].map(([Icon, label], index) => {
                const StepIcon = Icon as typeof Crosshair;
                return (
                  <li key={index} className="flex items-center gap-3">
                    <StepIcon
                      className={`size-4 ${index === 0 ? "text-accent" : "text-muted"}`}
                      aria-hidden="true"
                    />
                    <span
                      className={index === 0 ? "text-foreground" : "text-muted"}
                    >
                      {label as string}
                    </span>
                  </li>
                );
              })}
            </ol>
          </>
        )}
        <p className="text-muted mt-7 flex items-start gap-2 text-xs leading-relaxed">
          <LockKeyhole className="mt-0.5 size-3 shrink-0" aria-hidden="true" />
          {t.privacy}
        </p>
      </section>
      <section className="mt-7 px-2" aria-labelledby="history-title">
        <h2 id="history-title" className="text-sm font-medium">
          {t.history}
        </h2>
        {historyError ? (
          <p role="alert" className="text-error mt-3 text-sm">
            {t.errors[historyError]}
          </p>
        ) : entries.length === 0 ? (
          <p className="text-muted mt-3 text-xs leading-relaxed">
            {t.historyEmpty}
          </p>
        ) : (
          <>
            <p className="text-muted mt-1 text-xs">{t.historyLimit}</p>
            <ul className="mt-2 max-h-64 overflow-y-auto">
              {entries.map((entry) => (
                <li key={entry.id} className="border-b border-white/10 py-3">
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span>
                      {isMeshId(entry.meshId)
                        ? anatomy.parts[entry.meshId]
                        : entry.meshId}
                    </span>
                    <span className="text-accent shrink-0 tabular-nums">
                      {entry.intensity}/10
                    </span>
                  </div>
                  <time
                    dateTime={entry.recordedAt}
                    className="text-muted mt-1 block text-xs"
                  >
                    {new Intl.DateTimeFormat(locale, {
                      dateStyle: "medium",
                      timeZone: "UTC",
                    }).format(new Date(entry.recordedAt))}
                  </time>
                  {entry.notes && (
                    <p className="text-muted mt-2 text-xs leading-relaxed wrap-anywhere">
                      {entry.notes}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </aside>
  );
}
