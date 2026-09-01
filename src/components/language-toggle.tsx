"use client";

import { useLocale } from "@/context/locale";
import { t } from "@/lib/i18n";
import { useHydrated } from "@/lib/use-hydrated";

export function LanguageToggle() {
  const hydrated = useHydrated();
  const { locale, setLocale } = useLocale();
  const active = hydrated ? locale : "en";
  const next = active === "en" ? "bn" : "en";
  const label = active === "en" ? "EN" : "বাং";

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => setLocale(next)}
      aria-label={`${t(active, "language")}: ${t(active, active === "en" ? "english" : "bangla")}. ${t(active, "switchTo")} ${t(active, next === "en" ? "english" : "bangla")}.`}
    >
      {label}
    </button>
  );
}
