"use client";

import { useState } from "react";
import { useTranslation } from "@/infrastructure/i18n";
import { subscribeToWaitlist } from "../actions";

export function NotifySection() {
  const { t } = useTranslation("common");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const result = await subscribeToWaitlist({ email });

    if (result.success) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
      setErrorMessage(result.error || t.notifyMe.error);
    }
  };

  if (status === "success") {
    return (
      <div className="text-center">
        <p className="text-xl text-green-500">{t.notifyMe.success}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-bold text-white">{t.notifyMe.title}</h2>
      <p className="text-gray-400">{t.notifyMe.description}</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.notifyMe.placeholder}
          required
          className="rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:border-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? "..." : t.notifyMe.button}
        </button>
      </form>
      {status === "error" && (
        <p className="text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}
