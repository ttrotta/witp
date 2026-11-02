"use client";

import { useId, useState, useTransition } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/infrastructure/i18n";
import { subscribeToWaitlist } from "../actions";

export function NotifySection() {
  const { t } = useTranslation("common");
  const id = useId();
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<keyof typeof t.notifyMe.errors | null>(
    null,
  );
  const [pending, startTransition] = useTransition();

  if (saved) {
    return (
      <p role="status" className="text-accent text-sm">
        {t.notifyMe.success}
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-medium tracking-tight">
          {t.notifyMe.title}
        </h2>
        <p className="text-muted mt-2 text-sm leading-relaxed">
          {t.notifyMe.description}
        </p>
      </div>
      <form
        className="space-y-3"
        onSubmit={(event) => {
          event.preventDefault();
          setError(null);
          startTransition(async () => {
            try {
              const result = await subscribeToWaitlist({ email });
              if (result.success) {
                setSaved(true);
                setEmail("");
              } else setError(result.error);
            } catch {
              setError("connection");
            }
          });
        }}
      >
        <fieldset disabled={pending} className="space-y-3">
          <div>
            <label htmlFor={`${id}-email`} className="field-label">
              {t.notifyMe.label}
            </label>
            <input
              id={`${id}-email`}
              type="email"
              autoComplete="email"
              maxLength={254}
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t.notifyMe.placeholder}
              className="field"
            />
          </div>
          <button type="submit" className="primary-button w-full">
            {pending ? t.loading : t.notifyMe.button}
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </fieldset>
        {error && (
          <p role="alert" className="text-error text-sm">
            {t.notifyMe.errors[error]}
          </p>
        )}
      </form>
    </div>
  );
}
