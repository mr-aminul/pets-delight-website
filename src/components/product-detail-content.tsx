"use client";

import Image from "next/image";
import { AddToCart } from "@/components/add-to-cart";
import { ProductCard } from "@/components/product-card";
import { useLocale } from "@/context/locale";
import { useT } from "@/lib/i18n";
import { formatPrice } from "@/lib/format";
import { localizeProduct } from "@/lib/localize";
import type { Product } from "@/lib/products";

export function ProductDetailContent({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { locale } = useLocale();
  const tr = useT();
  const localized = localizeProduct(product, locale);

  return (
    <section className="shell">
      <article className="product-detail">
        <div className="detail-media">
          <Image src={product.image} alt={localized.name} width={640} height={860} priority />
        </div>
        <div>
          <p className="eyebrow">{product.brand}</p>
          <h1>{localized.name}</h1>
          <p className="price" style={{ fontSize: "1.6rem", margin: "1rem 0" }}>
            {formatPrice(product.price)}
            {product.compareAtPrice ? <s>{formatPrice(product.compareAtPrice)}</s> : null}
          </p>
          <p className="lede">{localized.description}</p>
          <p style={{ fontWeight: 700, marginTop: "1rem" }}>{product.weight}</p>
          <AddToCart slug={product.slug} name={localized.name} />
          <div className="panel" style={{ marginTop: "1.4rem" }}>
            <h2>{tr("ingredients")}</h2>
            <p>{localized.ingredients.join(", ")}.</p>
          </div>
        </div>
      </article>

      <section className="product-section">
        <h2 className="section-title">
          <strong>{tr("youMayAlsoLike")}</strong>
        </h2>
        <div className="rail">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </section>
  );
}
