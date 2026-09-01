"use client";

import { PageHero } from "@/components/page-hero";
import { useT } from "@/lib/i18n";

export default function DeliveryPage() {
  const tr = useT();

  return (
    <>
      <PageHero eyebrow={tr("deliveryEyebrow")} title={tr("deliveryTitle")}>
        {tr("deliveryLede")}
      </PageHero>
      <section className="shell stack article">
        <p>{tr("deliveryP1")}</p>
        <p>{tr("deliveryP2")}</p>
      </section>
    </>
  );
}
