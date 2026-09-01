"use client";

import { PageHero } from "@/components/page-hero";
import { ProductCard } from "@/components/product-card";
import { useT } from "@/lib/i18n";
import { searchProducts } from "@/lib/products";

export function SearchContent({ query }: { query: string }) {
  const tr = useT();
  const results = searchProducts(query);

  return (
    <>
      <PageHero
        eyebrow={tr("searchEyebrow")}
        title={query ? tr("searchTitleQuery", { query }) : tr("searchTitle")}
      >
        {query
          ? results.length === 1
            ? tr("searchResults", { count: results.length })
            : tr("searchResultsPlural", { count: results.length })
          : tr("searchLede")}
      </PageHero>
      <section className="shell stack">
        <form className="hero-search" action="/search" method="GET">
          <label className="sr-only" htmlFor="search-page">
            {tr("searchPetFood")}
          </label>
          <input
            id="search-page"
            name="q"
            type="search"
            defaultValue={query}
            placeholder={tr("searchPagePlaceholder")}
          />
          <button type="submit" className="btn btn-primary btn-compact">
            {tr("search")}
          </button>
        </form>
        {results.length === 0 ? (
          <p className="empty">{tr("searchEmpty")}</p>
        ) : (
          <div className="product-grid">
            {results.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
