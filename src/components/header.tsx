"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { Logo } from "@/components/logo";
import { CartIcon, ChevronIcon, CloseIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { useCart } from "@/context/cart";
import { useLocale } from "@/context/locale";
import { getCategoryLabel, t } from "@/lib/i18n";
import { categories } from "@/lib/products";
import { useHydrated } from "@/lib/use-hydrated";

export function Header() {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const { count } = useCart();
  const { locale } = useLocale();
  const cartCount = hydrated ? count : 0;
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const searchId = useId();
  const desktopSearchId = useId();

  const nav = [
    { href: "/", label: t(locale, "home") },
    { href: "/shop", label: t(locale, "shop"), hasMenu: true },
    { href: "/about", label: t(locale, "about") },
    { href: "/contact", label: t(locale, "contact") },
    { href: "/track", label: t(locale, "track") },
  ];

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
    setSearchOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <Logo />

          <nav className="desktop-nav" aria-label="Primary">
            {nav.map((item) =>
              item.hasMenu ? (
                <div className="nav-flyout" key={item.href}>
                  <Link
                    href={item.href}
                    className={
                      pathname.startsWith("/shop") || pathname.startsWith("/product")
                        ? "is-active"
                        : ""
                    }
                  >
                    {item.label}
                    <ChevronIcon className="chevron" />
                  </Link>
                  <div className="flyout">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={category.slug === "all" ? "/shop" : `/shop?category=${category.slug}`}
                      >
                    {getCategoryLabel(locale, category.slug)}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={pathname === item.href ? "is-active" : ""}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="header-actions">
            <form className="header-search-inline" action="/search" method="GET">
              <label className="sr-only" htmlFor={desktopSearchId}>
                {t(locale, "searchProducts")}
              </label>
              <input
                id={desktopSearchId}
                name="q"
                type="search"
                placeholder={t(locale, "searchPlaceholder")}
              />
              <button type="submit" aria-label={t(locale, "search")}>
                <SearchIcon />
              </button>
            </form>
            <button
              type="button"
              className="icon-btn search-toggle"
              aria-label={t(locale, "searchShop")}
              onClick={() => setSearchOpen((value) => !value)}
            >
              <SearchIcon />
            </button>
            <Link
              href="/cart"
              className="icon-btn cart-btn"
              aria-label={`${t(locale, "cart")}, ${t(locale, "cartItems", { count: cartCount })}`}
            >
              <CartIcon />
              {cartCount > 0 ? <span className="cart-count">{cartCount}</span> : null}
            </Link>
            <LanguageToggle />
            <button
              type="button"
              className="icon-btn menu-toggle"
              aria-label={open ? t(locale, "closeMenu") : t(locale, "openMenu")}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {searchOpen ? (
          <form className="header-search shell" action="/search" method="GET">
            <label className="sr-only" htmlFor={searchId}>
              {t(locale, "searchPetFood")}
            </label>
            <input
              id={searchId}
              name="q"
              type="search"
              placeholder={t(locale, "searchMobilePlaceholder")}
              autoFocus
            />
            <button type="submit" className="btn btn-accent btn-compact">
              {t(locale, "search")}
            </button>
          </form>
        ) : null}

        {open ? (
          <nav className="mobile-nav" aria-label="Mobile">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            {categories
              .filter((category) => category.slug !== "all")
              .map((category) => (
                <Link key={category.slug} href={`/shop?category=${category.slug}`}>
                  {getCategoryLabel(locale, category.slug)}
                </Link>
              ))}
            <Link href="/cart">
              {t(locale, "cart")} ({cartCount})
            </Link>
          </nav>
        ) : null}
      </header>
    </>
  );
}
