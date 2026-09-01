import type { Locale } from "@/context/locale";
import { blogPosts, jobs, store, stores } from "@/lib/content";
import type { Product } from "@/lib/products";
import { contentBn } from "./i18n/content-bn";
import { productBn } from "./i18n/products-bn";

export function localizeProduct(product: Product, locale: Locale): Product {
  if (locale === "en") return product;
  const bn = productBn[product.slug];
  if (!bn) return product;
  return { ...product, ...bn };
}

export function localizeProducts(products: Product[], locale: Locale): Product[] {
  return products.map((p) => localizeProduct(p, locale));
}

export function getLocalizedStore(locale: Locale) {
  return locale === "en" ? store : contentBn.store;
}

export function getLocalizedBlogPosts(locale: Locale) {
  return locale === "en" ? blogPosts : contentBn.blogPosts;
}

export function getLocalizedBlogPost(slug: string, locale: Locale) {
  return getLocalizedBlogPosts(locale).find((p) => p.slug === slug);
}

export function getLocalizedJobs(locale: Locale) {
  return locale === "en" ? jobs : contentBn.jobs;
}

export function getLocalizedStores(locale: Locale) {
  return locale === "en" ? stores : contentBn.stores;
}
