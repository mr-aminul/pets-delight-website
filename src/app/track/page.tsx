"use client";

import Link from "next/link";
import { useState } from "react";
import { useOrders } from "@/context/orders";
import { useT } from "@/lib/i18n";
import { formatPrice } from "@/lib/format";

export default function TrackPage() {
  const { orders } = useOrders();
  const tr = useT();
  const [query, setQuery] = useState("");
  const [looked, setLooked] = useState("");

  const match = orders.find(
    (order) =>
      order.id.toLowerCase() === looked.toLowerCase() ||
      order.phone.replace(/\s/g, "") === looked.replace(/\s/g, ""),
  );

  return (
    <section className="shell stack" style={{ maxWidth: 640 }}>
      <h1>{tr("trackTitle")}</h1>
      <p className="lede">{tr("trackLede")}</p>
      <form
        className="auth-form"
        onSubmit={(event) => {
          event.preventDefault();
          setLooked(query.trim());
        }}
      >
        <div className="field">
          <label htmlFor="track">{tr("trackLabel")}</label>
          <input
            id="track"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={tr("trackPlaceholder")}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {tr("trackBtn")}
        </button>
      </form>
      {looked && !match ? <p className="empty">{tr("trackNotFound")}</p> : null}
      {match ? (
        <article className="summary">
          <p className="eyebrow">{match.id}</p>
          <h2>{tr("trackPackedFor", { name: match.name })}</h2>
          <p>
            {match.address}, {match.city} {match.zip}
          </p>
          <p className="hint">
            {tr("trackPayment", {
              method:
                match.payment === "delivery" ? tr("trackPaymentCod") : tr("trackPaymentCard"),
              total: formatPrice(match.total),
            })}
          </p>
          <Link href={`/order/${match.id}`} className="btn btn-primary" style={{ marginTop: "1rem" }}>
            {tr("openReceipt")}
          </Link>
        </article>
      ) : null}
    </section>
  );
}
