"use client";

import { PageHero } from "@/components/page-hero";
import { useT } from "@/lib/i18n";

export default function TermsPage() {
  const tr = useT();

  return (
    <>
      <PageHero eyebrow={tr("termsEyebrow")} title={tr("termsTitle")}>
        {tr("termsLede")}
      </PageHero>
      <section className="shell stack article legal">
        <p>{tr("termsP1")}</p>
        <p>{tr("termsP2")}</p>
      </section>
    </>
  );
}
