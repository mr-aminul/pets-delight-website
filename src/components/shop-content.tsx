"use client";

import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { useT, getCategoryLabel } from "@/lib/i18n";
import { categories, filterProducts } from "@/lib/products";
import { useLocale } from "@/context/locale";

type ShopContentProps = {
  category?: string;
  sale?: boolean;
  sort?: string;
};

export function ShopContent({ category, sale = false, sort }: ShopContentProps) {
  const { locale } = useLocale();
  const tr = useT();
  const list = filterProducts({ category, sale, sort });

  return (
    <>
      <PageHero
        eyebrow={tr("shopEyebrow")}
        title={sale ? tr("shopTitleSale") : tr("shopTitle")}
      >
        {sale ? tr("shopLedeSale") : tr("shopLede")}
      </PageHero>
      <section className="shell stack">
        <div className="filters">
          {categories.map((cat) => {
            const href = cat.slug === "all" ? "/shop" : `/shop?category=${cat.slug}`;
            const active =
              (cat.slug === "all" && !category && !sale) || category === cat.slug;
            return (
              <Link key={cat.slug} href={href} className={`chip ${active ? "is-active" : ""}`}>
                {getCategoryLabel(locale, cat.slug)}
              </Link>
            );
          })}
          <Link href="/shop?sale=1" className={`chip ${sale ? "is-active" : ""}`}>
            {tr("onSale")}
          </Link>
        </div>
        <form action="/shop" method="GET" className="filters filters-sort">
          {category ? <input type="hidden" name="category" value={category} /> : null}
          {sale ? <input type="hidden" name="sale" value="1" /> : null}
          <label className="sr-only" htmlFor="sort">
            {tr("sortProducts")}
          </label>
          <select className="select" id="sort" name="sort" defaultValue={sort ?? "featured"}>
            <option value="featured">{tr("featured")}</option>
            <option value="price-asc">{tr("sortPriceAsc")}</option>
            <option value="price-desc">{tr("sortPriceDesc")}</option>
          </select>
          <button type="submit" className="chip">
            {tr("applySort")}
          </button>
        </form>
        {list.length === 0 ? (
          <p className="empty">{tr("shopEmpty")}</p>
        ) : (
          <div className="product-grid">
            {list.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
