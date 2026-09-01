"use client";

import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { useT } from "@/lib/i18n";

export default function AboutPage() {
  const tr = useT();

  const cards = [
    { title: tr("aboutCard1Title"), copy: tr("aboutCard1Copy") },
    { title: tr("aboutCard2Title"), copy: tr("aboutCard2Copy") },
    { title: tr("aboutCard3Title"), copy: tr("aboutCard3Copy") },
    { title: tr("aboutCard4Title"), copy: tr("aboutCard4Copy") },
  ];

  return (
    <>
      <PageHero eyebrow={tr("aboutEyebrow")} title={tr("aboutTitle")}>
        {tr("aboutLede")}
      </PageHero>
      <section className="shell stack">
        <div className="two-col">
          <article>
            <h2>{tr("aboutWhyTitle")}</h2>
            <p>{tr("aboutWhyP1")}</p>
            <p>{tr("aboutWhyP2")}</p>
            <Link href="/shop" className="btn btn-primary" style={{ marginTop: "1rem" }}>
              {tr("browseShop")}
            </Link>
          </article>
          <Image
            src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=80"
            alt="Cats from a Pet Delight household"
            width={800}
            height={450}
            style={{ borderRadius: 24, objectFit: "cover", height: "100%" }}
          />
        </div>
        <div className="product-grid">
          {cards.map((item) => (
            <article key={item.title} className="panel">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
