"use client";

import { PageHero } from "@/components/page-hero";
import { useT } from "@/lib/i18n";

export default function FaqPage() {
  const tr = useT();

  const faqs = [
    { q: tr("faq1Q"), a: tr("faq1A") },
    { q: tr("faq2Q"), a: tr("faq2A") },
    { q: tr("faq3Q"), a: tr("faq3A") },
    { q: tr("faq4Q"), a: tr("faq4A") },
    { q: tr("faq5Q"), a: tr("faq5A") },
  ];

  return (
    <>
      <PageHero eyebrow={tr("faqEyebrow")} title={tr("faqTitle")}>
        {tr("faqLede")}
      </PageHero>
      <section className="shell stack faq">
        {faqs.map((item) => (
          <details key={item.q} open>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>
    </>
  );
}
