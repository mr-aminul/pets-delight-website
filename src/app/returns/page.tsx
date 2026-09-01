"use client";

import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { useT } from "@/lib/i18n";

export default function ReturnsPage() {
  const tr = useT();

  return (
    <>
      <PageHero eyebrow={tr("returnsEyebrow")} title={tr("returnsTitle")}>
        {tr("returnsLede")}
      </PageHero>
      <section className="shell stack article">
        <p>{tr("returnsP1")}</p>
        <Link href="/contact" className="btn btn-primary">
          {tr("returnsCta")}
        </Link>
      </section>
    </>
  );
}
