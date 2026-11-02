import type { NextRequest } from "next/server";
import { proxy as i18nProxy } from "@/infrastructure/i18n/proxy";

export function proxy(request: NextRequest) {
  return i18nProxy(request);
}

// Next.js only honours a literal export named `config` in this file. Without it
// every path, including /api/*, is redirected to a locale prefix.
export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
