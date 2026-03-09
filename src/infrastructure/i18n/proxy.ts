import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { locales, defaultLocale } from "./dictionaries";

function getLocale(request: Request) {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get("accept-language");

  if (!acceptLanguage) return defaultLocale;

  const negotiatorHeaders: Record<string, string> = {};
  headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  try {
    const languages = new Negotiator({
      headers: negotiatorHeaders,
    }).languages();

    return match(languages, locales, defaultLocale);
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[getLocale] Error parsing accept-language:", e);
    }
    return defaultLocale;
  }
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasExtension = /\.[^/.]+$/.test(pathname);
  if (pathnameHasExtension) return;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
