"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart";
import { useToast } from "@/context/toast";
import { useT } from "@/lib/i18n";

export function AddToCart({ slug, name }: { slug: string; name: string }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { notify } = useToast();
  const router = useRouter();
  const tr = useT();

  return (
    <form
      className="qty-row"
      onSubmit={(event) => {
        event.preventDefault();
        addItem(slug, quantity);
        notify(tr("addedToCart", { name }));
      }}
    >
      <label className="sr-only" htmlFor="qty">
        {tr("quantity")}
      </label>
      <input
        id="qty"
        name="quantity"
        type="number"
        min={1}
        max={12}
        value={quantity}
        onChange={(event) => setQuantity(Number(event.target.value) || 1)}
      />
      <div className="btn-row">
        <button type="submit" className="btn btn-primary">
          {tr("addToCart")}
        </button>
        <button
          type="button"
          className="btn btn-cream"
          onClick={() => {
            addItem(slug, quantity);
            router.push("/checkout");
          }}
        >
          {tr("buyNow")}
        </button>
      </div>
    </form>
  );
}
