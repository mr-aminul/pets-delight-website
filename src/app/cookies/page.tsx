"use client";

import { PageHero } from "@/components/page-hero";
import { useT } from "@/lib/i18n";

export default function CookiesPage() {
  const tr = useT();

  return (
    <>
      <PageHero eyebrow={tr("cookiesEyebrow")} title={tr("cookiesTitle")}>
        {tr("cookiesLede")}
      </PageHero>
      <section className="shell stack article legal">
        <p>{tr("cookiesP1")}</p>
      </section>
    </>
  );
}
