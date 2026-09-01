"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cart";
import { useT } from "@/lib/i18n";
import { localizeProduct } from "@/lib/localize";
import { DELIVERY_FEE, FREE_DELIVERY_MIN, formatPrice } from "@/lib/format";
import { useHydrated } from "@/lib/use-hydrated";
import { useLocale } from "@/context/locale";

export default function CartPage() {
  const hydrated = useHydrated();
  const { locale } = useLocale();
  const tr = useT();
  const { items, subtotal, setQuantity, removeItem } = useCart();
  const delivery = subtotal >= FREE_DELIVERY_MIN ? 0 : DELIVERY_FEE;

  if (!hydrated) {
    return (
      <section className="shell stack">
        <h1>{tr("yourCart")}</h1>
        <p className="hint">{tr("loadingCart")}</p>
      </section>
    );
  }

  return (
    <section className="shell stack">
      <h1>{tr("yourCart")}</h1>
      {items.length === 0 ? (
        <div className="panel">
          <p>{tr("cartEmpty")}</p>
          <Link href="/shop" className="btn btn-primary" style={{ marginTop: "1rem" }}>
            {tr("continueShopping")}
          </Link>
        </div>
      ) : (
        <div className="two-col">
          <div>
            {items.map((item) => {
              const product = localizeProduct(item.product, locale);
              return (
                <article className="cart-line" key={item.slug}>
                  <span className="cart-thumb">
                    <Image src={item.product.image} alt="" width={92} height={92} />
                  </span>
                  <div>
                    <Link href={`/product/${item.slug}`}>
                      <strong>{product.name}</strong>
                    </Link>
                    <p className="hint">
                      {formatPrice(item.product.price)} {tr("each")}
                    </p>
                    <label className="sr-only" htmlFor={`qty-${item.slug}`}>
                      {tr("quantity")} - {product.name}
                    </label>
                    <input
                      id={`qty-${item.slug}`}
                      className="cart-qty"
                      type="number"
                      min={1}
                      max={12}
                      value={item.quantity}
                      onChange={(event) => setQuantity(item.slug, Number(event.target.value) || 1)}
                    />
                  </div>
                  <div>
                    <p className="price">{formatPrice(item.product.price * item.quantity)}</p>
                    <button type="button" className="chip" onClick={() => removeItem(item.slug)}>
                      {tr("remove")}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          <aside className="summary">
            <h2>{tr("orderSummary")}</h2>
            <p className="kv">
              <span>{tr("subtotal")}</span>
              <strong>{formatPrice(subtotal)}</strong>
            </p>
            <p className="kv">
              <span>{tr("delivery")}</span>
              <strong>{delivery === 0 ? tr("free") : formatPrice(delivery)}</strong>
            </p>
            <p className="hint">
              {tr("freeDeliveryHint", { amount: formatPrice(FREE_DELIVERY_MIN) })}
            </p>
            <Link href="/checkout" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>
              {tr("checkout")}
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}
