"use client";

import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { useT } from "@/lib/i18n";

export default function HowItWorksPage() {
  const tr = useT();

  const steps = [
    { title: tr("howStep1Title"), copy: tr("howStep1Copy") },
    { title: tr("howStep2Title"), copy: tr("howStep2Copy") },
    { title: tr("howStep3Title"), copy: tr("howStep3Copy") },
  ];

  return (
    <>
      <PageHero eyebrow={tr("howEyebrow")} title={tr("howTitle")}>
        {tr("howLede")}
      </PageHero>
      <section className="shell stack">
        <div className="product-grid">
          {steps.map((step) => (
            <article key={step.title} className="panel">
              <h2>{step.title}</h2>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
        <Link href="/shop" className="btn btn-primary">
          {tr("howCta")}
        </Link>
      </section>
    </>
  );
}
