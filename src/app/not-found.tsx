"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";

export default function NotFound() {
  const tr = useT();

  return (
    <section className="shell stack">
      <h1>{tr("notFoundTitle")}</h1>
      <p className="lede">{tr("notFoundLede")}</p>
      <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap" }}>
        <Link href="/" className="btn btn-primary">
          {tr("home")}
        </Link>
        <Link href="/shop" className="btn btn-cream">
          {tr("notFoundShop")}
        </Link>
      </div>
    </section>
  );
}
