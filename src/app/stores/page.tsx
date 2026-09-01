"use client";

import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { useLocale } from "@/context/locale";
import { useT } from "@/lib/i18n";
import { getLocalizedStores } from "@/lib/localize";

export default function StoresPage() {
  const { locale } = useLocale();
  const tr = useT();
  const stores = getLocalizedStores(locale);

  return (
    <>
      <PageHero eyebrow={tr("storesEyebrow")} title={tr("storesTitle")}>
        {tr("storesLede")}
      </PageHero>
      <section className="shell stack">
        {stores.map((place) => (
          <article className="store-card" key={place.name}>
            <h2>{place.name}</h2>
            <p>{place.address}</p>
            <p className="hint">{place.hours}</p>
            <p>{place.note}</p>
          </article>
        ))}
        <Link href="/contact" className="btn btn-primary">
          {tr("storesCta")}
        </Link>
      </section>
    </>
  );
}
