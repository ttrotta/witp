"use client";

import { useId, useState, useTransition } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/infrastructure/i18n";
import { authenticate } from "../actions";

export function AuthForm({
  initialMode = "login",
}: {
  initialMode?: "login" | "register";
}) {
  const { t } = useTranslation("auth");
  const id = useId();
  const [mode, setMode] = useState(initialMode);
  const [error, setError] = useState<keyof typeof t.errors | null>(null);
  const [success, setSuccess] = useState(false);
  const [pending, startTransition] = useTransition();
  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setError(null);
        startTransition(async () => {
          try {
            const result = await authenticate({
              mode,
              email: data.get("email"),
              password: data.get("password"),
              ...(mode === "register"
                ? { username: data.get("username") }
                : {}),
            });
            if (result.error) setError(result.error);
            else setSuccess(true);
          } catch {
            setError("connection");
          }
        });
      }}
    >
      <h3 className="text-lg font-medium">
        {mode === "login" ? t.loginTitle : t.registerTitle}
      </h3>
      <fieldset disabled={pending} className="space-y-3">
        {mode === "register" && (
          <div>
            <label htmlFor={`${id}-username`} className="field-label">
              {t.username}
            </label>
            <input
              id={`${id}-username`}
              name="username"
              autoComplete="username"
              minLength={3}
              maxLength={30}
              required
              className="field"
              aria-describedby={`${id}-username-hint`}
            />
            <p id={`${id}-username-hint`} className="text-muted mt-1 text-xs">
              {t.usernameHint}
            </p>
          </div>
        )}
        <div>
          <label htmlFor={`${id}-email`} className="field-label">
            {t.email}
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            className="field"
          />
        </div>
        <div>
          <label htmlFor={`${id}-password`} className="field-label">
            {t.password}
          </label>
          <input
            id={`${id}-password`}
            name="password"
            type="password"
            autoComplete={
              mode === "login" ? "current-password" : "new-password"
            }
            minLength={12}
            maxLength={128}
            required
            className="field"
            aria-describedby={`${id}-password-hint`}
          />
          <p id={`${id}-password-hint`} className="text-muted mt-1 text-xs">
            {t.passwordHint}
          </p>
        </div>
        <button className="primary-button w-full" type="submit">
          {pending
            ? t.pending
            : mode === "login"
              ? t.loginButton
              : t.registerButton}
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </fieldset>
      {error && (
        <p role="alert" className="text-error text-sm">
          {t.errors[error]}
        </p>
      )}
      {success && (
        <p role="status" className="text-accent text-sm">
          {t.success}
        </p>
      )}
      <p className="text-muted text-sm">
        {mode === "login" ? t.noAccount : t.hasAccount}{" "}
        <button
          disabled={pending}
          type="button"
          className="text-accent underline underline-offset-4"
          onClick={() => {
            setMode(mode === "login" ? "register" : "login");
            setError(null);
          }}
        >
          {mode === "login" ? t.registerTitle : t.loginTitle}
        </button>
      </p>
    </form>
  );
}
