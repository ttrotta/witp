"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Activity, Menu, X } from "lucide-react";
import { useTranslation } from "@/infrastructure/i18n";

export function Navbar({ account }: { account?: ReactNode }) {
  const { t, locale } = useTranslation("nav");
  const [open, setOpen] = useState(false);
  const links = [
    [t.home, `/${locale}`],
    [t.features, `/${locale}#features`],
    [t.pain, `/${locale}#journal`],
    [t.community, `/${locale}/forum`],
    [t.faq, `/${locale}#faq`],
  ];
  return (
    <>
      <a href="#body-map" className="skip-link">
        {t.skip}
      </a>
      <header className="fixed top-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
        <nav
          aria-label={t.navigation}
          className="flex items-center gap-4 rounded-full border border-white/20 bg-white/10 px-5 py-3 shadow-2xl backdrop-blur-xl sm:px-7"
        >
          <Link
            href={`/${locale}`}
            aria-label="witp"
            className="mr-auto flex items-center gap-2 text-2xl font-semibold tracking-tight"
          >
            <Activity className="text-accent size-5" aria-hidden="true" />
            witp<span className="text-accent">.</span>
          </Link>
          <div className="hidden items-center gap-1 lg:flex">
            {links.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-muted rounded-full px-3 py-2 text-sm transition-colors hover:bg-white/10 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            href={`/${locale === "en" ? "es" : "en"}`}
            aria-label={t.language}
            className="text-muted rounded-full px-2 py-2 text-xs font-medium hover:text-white"
          >
            {locale === "en" ? "ES" : "EN"}
          </Link>
          <div className="hidden sm:block">
            {account ?? (
              <Link href={`/${locale}/login`} className="text-accent text-sm">
                {t.login}
              </Link>
            )}
          </div>
          <button
            type="button"
            className="icon-button lg:hidden"
            aria-label={open ? t.closeMenu : t.menu}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <nav
            id="mobile-navigation"
            aria-label={t.navigation}
            className="glass mt-3 rounded-2xl p-3 lg:hidden"
            onKeyDown={(event) => {
              if (event.key === "Escape") setOpen(false);
            }}
          >
            {links.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm hover:bg-white/10"
              >
                {label}
              </Link>
            ))}
            <div className="px-4 py-3 sm:hidden">
              {account ?? <Link href={`/${locale}/login`}>{t.login}</Link>}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
