"use client";

import { PageHero } from "@/components/page-hero";
import { useT } from "@/lib/i18n";

export default function PrivacyPage() {
  const tr = useT();

  return (
    <>
      <PageHero eyebrow={tr("privacyEyebrow")} title={tr("privacyTitle")}>
        {tr("privacyLede")}
      </PageHero>
      <section className="shell stack article legal">
        <p>{tr("privacyP1")}</p>
        <p>{tr("privacyP2")}</p>
      </section>
    </>
  );
}
