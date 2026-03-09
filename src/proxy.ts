import type { NextRequest } from "next/server";
import {
  proxy as i18nProxy,
  config as i18nConfig,
} from "@/infrastructure/i18n/proxy";

export function proxy(request: NextRequest) {
  return i18nProxy(request);
}

export { i18nConfig };
