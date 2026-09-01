"use client";

import Image from "next/image";
import Link from "next/link";
import { CartIcon } from "@/components/icons";
import { useCart } from "@/context/cart";
import { useToast } from "@/context/toast";
import { useT } from "@/lib/i18n";
import { formatPrice } from "@/lib/format";
import { localizeProduct } from "@/lib/localize";
import type { Product } from "@/lib/products";
import { useLocale } from "@/context/locale";

export function ProductCard({
  product,
  tone = "featured",
}: {
  product: Product;
  tone?: "featured" | "simple";
}) {
  const { locale } = useLocale();
  const tr = useT();
  const { addItem } = useCart();
  const { notify } = useToast();
  const localized = localizeProduct(product, locale);

  return (
    <article className={`product-card ${tone}`}>
      {product.onSale ? <span className="sale-badge">{tr("sale")}</span> : null}
      <Link href={`/product/${product.slug}`} className="product-media">
        <Image src={product.image} alt={localized.name} width={480} height={640} />
      </Link>
      <div className="product-copy">
        <Link href={`/product/${product.slug}`}>
          <h3>{localized.name}</h3>
        </Link>
        <div className="product-meta">
          <p className="price">
            {formatPrice(product.price)}
            {product.compareAtPrice ? <s>{formatPrice(product.compareAtPrice)}</s> : null}
          </p>
          <button
            type="button"
            className="cart-add"
            aria-label={tr("addToCartAria", { name: localized.name })}
            onClick={() => {
              addItem(product.slug);
              notify(tr("addedToCart", { name: localized.name }));
            }}
          >
            <CartIcon />
          </button>
        </div>
      </div>
    </article>
  );
}
