"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowIcon,
  ChevronIcon,
  DeliveryIcon,
  LockIcon,
  ReturnIcon,
  ShieldIcon,
  SupportIcon,
  TruckIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { ProductCard } from "@/components/product-card";
import { useLocale } from "@/context/locale";
import { getCategoryLabel, useT } from "@/lib/i18n";
import { getLocalizedStore } from "@/lib/localize";
import { getBestSellers, getByCategory, products } from "@/lib/products";

const aisleSlugs = ["dry", "pouch", "canned", "litter", "accessories"] as const;
const aisleImages: Record<(typeof aisleSlugs)[number], string> = {
  dry: "/images/category-dry-food.png",
  pouch: "/images/category-pouch.png",
  canned: "/images/category-canned-food.png",
  litter: "/images/category-cat-litter.png",
  accessories: "/images/category-accessories.png",
};
const aisleBgs: Record<(typeof aisleSlugs)[number], string> = {
  dry: "#faf7f2",
  pouch: "#f8f5f1",
  canned: "#fbf9f5",
  litter: "#fbf9f5",
  accessories: "#faf8f5",
};

export function HomeContent() {
  const { locale } = useLocale();
  const tr = useT();
  const store = getLocalizedStore(locale);
  const bestSellers = getBestSellers();
  const dry = getByCategory("dry", 4);
  const aisles = aisleSlugs.map((slug) => ({
    slug,
    label: getCategoryLabel(locale, slug),
    image: aisleImages[slug],
    bg: aisleBgs[slug],
    count: products.filter((product) => product.category === slug).length,
  }));

  const usps = [
    { icon: TruckIcon, label: tr("uspOneHour") },
    { icon: ReturnIcon, label: tr("uspReturns") },
    { icon: LockIcon, label: tr("uspCod") },
  ];

  const trust = [
    { icon: ShieldIcon, label: tr("trustQuality") },
    { icon: DeliveryIcon, label: tr("trustDelivery") },
    { icon: LockIcon, label: tr("trustCheckout") },
    { icon: SupportIcon, label: tr("trustSupport") },
  ];

  return (
    <>
      <section className="hero">
        <Image
          className="hero-bg"
          src="/images/pets-delight-hero-responsive.png"
          alt=""
          fill
          sizes="100vw"
          priority
          aria-hidden
        />
        <div className="shell hero-content">
          <div className="hero-intro">
            <h1>
              {locale === "bn" ? (
                <>
                  {tr("heroTitle")} <em>{tr("heroTitleEm")}</em>
                </>
              ) : (
                <>
                  Everything <em>your pet</em> deserves
                </>
              )}
            </h1>
          </div>
          <div className="hero-bottom">
            <p className="hero-copy">{tr("heroCopy")}</p>
            <div className="btn-row hero-actions">
              <Link href="/shop" className="btn btn-accent">
                {tr("shopNow")} <ArrowIcon style={{ width: 18, height: 18 }} />
              </Link>
              <Link href="/shop?category=dry" className="btn btn-outline-light hide-mobile">
                {tr("exploreDryFood")}
              </Link>
            </div>
            <ul className="hero-usps">
              {usps.map((item) => (
                <li key={item.label}>
                  <span className="usp-icon">
                    <item.icon />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="shell category-section">
        <div className="section-head">
          <h2 className="section-title">{tr("shopByCategory")}</h2>
          <Link href="/shop" className="view-all">
            {tr("viewAllCategories")} <ChevronIcon />
          </Link>
        </div>
        <div className="category-grid">
          {aisles.map((aisle) => (
            <Link
              key={aisle.slug}
              href={`/shop?category=${aisle.slug}`}
              className="category-card"
              style={{ backgroundColor: aisle.bg }}
            >
              <span className="category-blob">
                <Image src={aisle.image} alt="" width={176} height={176} sizes="88px" />
              </span>
              <h3>{aisle.label}</h3>
              <p className="category-count">{tr("itemsPlus", { count: aisle.count })}</p>
              <span className="category-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell promo-grid">
        <article className="promo-card green promo-card-pop">
          <div>
            <p>{tr("promoNewArrivals")}</p>
            <h2>{tr("promoNewTitle")}</h2>
            <Link href="/shop" className="btn btn-cream btn-compact">
              {tr("shopNow")}
            </Link>
          </div>
          <Image
            src="/images/promo-new-arrivals-puppy.png"
            alt="Puppy wearing sunglasses"
            width={480}
            height={720}
            className="promo-pop-image"
            priority
          />
        </article>
        <article className="promo-card coral promo-card-pop">
          <div>
            <p>{tr("promoToys")}</p>
            <h2>{tr("promoToysTitle")}</h2>
            <Link href="/shop?category=accessories" className="btn btn-cream btn-compact">
              {tr("shopAccessories")}
            </Link>
          </div>
          <Image
            src="/images/promo-toys-accessories-cutout.png"
            alt="Clay-style pet toys and accessories"
            width={869}
            height={854}
            className="promo-pop-image"
          />
        </article>
      </section>

      <section className="shell product-section">
        <div className="section-head">
          <h2 className="section-title">{tr("topPicks")}</h2>
          <Link href="/shop" className="view-all">
            {tr("viewAll")} <ChevronIcon />
          </Link>
        </div>
        <div className="rail">
          {bestSellers.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="shell product-section">
        <div className="section-head">
          <div className="section-head-copy">
            <h2 className="section-title">{tr("dryFoodSection")}</h2>
            <p className="section-sub">{tr("dryFoodSub")}</p>
          </div>
          <Link href="/shop?category=dry" className="view-all">
            {tr("seeAll")} <ChevronIcon />
          </Link>
        </div>
        <div className="rail">
          {dry.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="shell">
        <article className="order-cta">
          <Image
            src="/images/whatsapp-cat-headphones.png"
            alt="Cat wearing headphones"
            width={720}
            height={480}
            className="order-cta-image"
          />
          <div className="order-cta-copy">
            <WhatsAppIcon className="order-cta-watermark" />
            <h2>{tr("whatsappTitle")}</h2>
            <p>{tr("whatsappCopy")}</p>
            <div className="btn-row">
              <a
                href={store.whatsappHref}
                className="btn btn-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon style={{ width: 18, height: 18 }} />
                {tr("whatsappOrder")}
              </a>
              <Link href="/shop" className="btn btn-outline-light">
                {tr("browseShop")}
              </Link>
            </div>
          </div>
        </article>
      </section>

      <ul className="shell trust">
        {trust.map((item) => (
          <li key={item.label}>
            <item.icon />
            {item.label}
          </li>
        ))}
      </ul>
    </>
  );
}
