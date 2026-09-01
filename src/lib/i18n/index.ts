"use client";

import { useCallback } from "react";
import type { Locale } from "@/context/locale";
import { useLocale } from "@/context/locale";
import { messages, type MessageKey } from "./messages";

export type { MessageKey };

export function t(
  locale: Locale,
  key: MessageKey,
  vars?: Record<string, string | number>,
): string {
  let text: string = messages[locale][key];
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      text = text.replaceAll(`{${k}}`, String(v));
    }
  }
  return text;
}

export function useT() {
  const { locale } = useLocale();
  return useCallback(
    (key: MessageKey, vars?: Record<string, string | number>) => t(locale, key, vars),
    [locale],
  );
}

export function getCategoryLabel(locale: Locale, slug: string): string {
  const map: Record<string, MessageKey> = {
    all: "catAllProducts",
    dry: "catDryFood",
    pouch: "catPouch",
    canned: "catCanned",
    litter: "catLitter",
    accessories: "catAccessories",
  };
  const key = map[slug];
  return key ? t(locale, key) : slug;
}
