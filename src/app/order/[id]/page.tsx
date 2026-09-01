"use client";

import Link from "next/link";
import { use } from "react";
import { useOrders } from "@/context/orders";
import { useT } from "@/lib/i18n";
import { formatPrice } from "@/lib/format";

export default function OrderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { orders } = useOrders();
  const tr = useT();
  const order = orders.find((item) => item.id === id);

  if (!order) {
    return (
      <section className="shell stack">
        <h1>{tr("orderNotFound")}</h1>
        <p className="empty">{tr("orderNotFoundLede")}</p>
        <Link href="/shop" className="btn btn-primary">
          {tr("backToShop")}
        </Link>
      </section>
    );
  }

  const paymentLabel =
    order.payment === "delivery" ? tr("trackPaymentCod") : tr("trackPaymentCard");

  return (
    <section className="shell stack">
      <p className="banner-note">{tr("orderConfirmed")}</p>
      <h1>{tr("orderThanks", { name: order.name.split(" ")[0] })}</h1>
      <p className="lede">
        {tr("orderLede", {
          id: order.id,
          address: order.address,
          city: order.city,
          zip: order.zip,
          payment: paymentLabel,
        })}
      </p>
      <article className="summary">
        {order.items.map((item) => (
          <p className="kv" key={item.slug}>
            <span>
              {item.name} × {item.quantity}
            </span>
            <strong>{formatPrice(item.price * item.quantity)}</strong>
          </p>
        ))}
        <p className="kv">
          <span>{tr("total")}</span>
          <strong>{formatPrice(order.total)}</strong>
        </p>
      </article>
      <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap" }}>
        <Link href="/track" className="btn btn-primary">
          {tr("trackOrder")}
        </Link>
        <Link href="/shop" className="btn btn-cream">
          {tr("keepShopping")}
        </Link>
      </div>
    </section>
  );
}
