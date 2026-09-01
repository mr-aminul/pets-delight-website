"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/cart";
import { useOrders } from "@/context/orders";
import { useLocale } from "@/context/locale";
import { useT } from "@/lib/i18n";
import { localizeProduct } from "@/lib/localize";
import { DELIVERY_FEE, FREE_DELIVERY_MIN, formatPrice } from "@/lib/format";
import { useHydrated } from "@/lib/use-hydrated";
import { SALE_COUPON, SALE_PERCENT } from "@/lib/products";

export default function CheckoutPage() {
  const router = useRouter();
  const hydrated = useHydrated();
  const { locale } = useLocale();
  const tr = useT();
  const { items, subtotal, clearCart } = useCart();
  const { saveOrder } = useOrders();
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState("");
  const [error, setError] = useState("");
  const [payment, setPayment] = useState<"delivery" | "card">("delivery");

  const discount = applied === SALE_COUPON ? (subtotal * SALE_PERCENT) / 100 : 0;
  const delivery = subtotal - discount >= FREE_DELIVERY_MIN || subtotal === 0 ? 0 : DELIVERY_FEE;
  const total = Math.max(0, subtotal - discount + delivery);

  if (!hydrated) {
    return (
      <section className="shell stack">
        <h1>{tr("checkout")}</h1>
        <p className="hint">{tr("loadingCart")}</p>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="shell stack">
        <h1>{tr("checkout")}</h1>
        <p className="empty">{tr("addBeforeCheckout")}</p>
      </section>
    );
  }

  return (
    <section className="shell stack">
      <h1>{tr("checkout")}</h1>
      <p className="banner-note">{tr("demoCheckoutNote")}</p>
      <div className="two-col">
        <form
          className="checkout-form"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const name = String(data.get("name") ?? "").trim();
            const email = String(data.get("email") ?? "").trim();
            const phone = String(data.get("phone") ?? "").trim();
            const address = String(data.get("address") ?? "").trim();
            const city = String(data.get("city") ?? "").trim();
            const zip = String(data.get("zip") ?? "").trim();
            if (!name || !email || !phone || !address || !city || !zip) {
              setError(tr("fillDeliveryFields"));
              return;
            }
            if (payment === "card") {
              const card = String(data.get("card") ?? "").replace(/\s/g, "");
              const expiry = String(data.get("expiry") ?? "");
              const cvc = String(data.get("cvc") ?? "");
              if (card.length < 12 || !expiry || cvc.length < 3) {
                setError(tr("enterDemoCard"));
                return;
              }
            }
            const order = saveOrder({
              email,
              name,
              phone,
              address,
              city,
              zip,
              payment,
              coupon: applied || undefined,
              discount,
              subtotal,
              total,
              items: items.map((item) => ({
                slug: item.slug,
                name: localizeProduct(item.product, locale).name,
                quantity: item.quantity,
                price: item.product.price,
              })),
            });
            clearCart();
            router.push(`/order/${order.id}`);
          }}
        >
          <div className="field">
            <label htmlFor="name">{tr("fullName")}</label>
            <input id="name" name="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">{tr("email")}</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="field">
            <label htmlFor="phone">{tr("phone")}</label>
            <input id="phone" name="phone" type="tel" required placeholder="01793099912" />
          </div>
          <div className="field">
            <label htmlFor="address">{tr("streetAddress")}</label>
            <input id="address" name="address" required placeholder="House, road, sector" />
          </div>
          <div className="field">
            <label htmlFor="city">{tr("city")}</label>
            <input id="city" name="city" required defaultValue="Dhaka" />
          </div>
          <div className="field">
            <label htmlFor="zip">{tr("postcode")}</label>
            <input id="zip" name="zip" required defaultValue="1230" />
          </div>

          <fieldset className="panel">
            <legend>{tr("payment")}</legend>
            <label>
              <input
                type="radio"
                name="payment"
                value="delivery"
                checked={payment === "delivery"}
                onChange={() => setPayment("delivery")}
              />{" "}
              {tr("cashOnDelivery")}
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={payment === "card"}
                onChange={() => setPayment("card")}
              />{" "}
              {tr("demoCard")}
            </label>
            {payment === "card" ? (
              <>
                <div className="field">
                  <label htmlFor="card">{tr("cardNumber")}</label>
                  <input id="card" name="card" inputMode="numeric" placeholder="4242 4242 4242 4242" />
                </div>
                <div className="field">
                  <label htmlFor="expiry">{tr("expiry")}</label>
                  <input id="expiry" name="expiry" placeholder="12/28" />
                </div>
                <div className="field">
                  <label htmlFor="cvc">{tr("cvc")}</label>
                  <input id="cvc" name="cvc" inputMode="numeric" placeholder="123" />
                </div>
              </>
            ) : null}
          </fieldset>

          {error ? <p className="error">{error}</p> : null}
          <button type="submit" className="btn btn-primary">
            {tr("placeOrder", { total: formatPrice(total) })}
          </button>
        </form>

        <aside className="summary">
          <h2>{tr("yourBags")}</h2>
          {items.map((item) => (
            <p className="kv" key={item.slug}>
              <span>
                {localizeProduct(item.product, locale).name} × {item.quantity}
              </span>
              <strong>{formatPrice(item.product.price * item.quantity)}</strong>
            </p>
          ))}
          <form
            className="inline-form"
            onSubmit={(event) => {
              event.preventDefault();
              const next = coupon.trim().toUpperCase();
              setApplied(next === SALE_COUPON ? SALE_COUPON : "");
            }}
          >
            <label htmlFor="coupon">{tr("coupon")}</label>
            <input
              id="coupon"
              value={coupon}
              onChange={(event) => setCoupon(event.target.value)}
              placeholder="DELIGHT30"
            />
            <button type="submit" className="chip">
              {tr("apply")}
            </button>
            {applied ? <p className="hint">{tr("couponApplied")}</p> : null}
            {coupon && !applied && coupon.toUpperCase() !== SALE_COUPON ? (
              <p className="error">{tr("couponInvalid")}</p>
            ) : null}
          </form>
          <p className="kv">
            <span>{tr("subtotal")}</span>
            <strong>{formatPrice(subtotal)}</strong>
          </p>
          <p className="kv">
            <span>{tr("discount")}</span>
            <strong>-{formatPrice(discount)}</strong>
          </p>
          <p className="kv">
            <span>{tr("delivery")}</span>
            <strong>{delivery === 0 ? tr("free") : formatPrice(delivery)}</strong>
          </p>
          <p className="kv">
            <span>{tr("total")}</span>
            <strong>{formatPrice(total)}</strong>
          </p>
        </aside>
      </div>
    </section>
  );
}
