"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/icons";
import { useT } from "@/lib/i18n";
import { getLocalizedStore } from "@/lib/localize";
import { useLocale } from "@/context/locale";

export function Footer() {
  const { locale } = useLocale();
  const tr = useT();
  const store = getLocalizedStore(locale);

  const columns = [
    {
      title: tr("footerShop"),
      links: [
        { href: "/about", label: tr("footerAbout") },
        { href: "/privacy", label: tr("footerPrivacy") },
        { href: "/contact", label: tr("footerContactUs") },
        { href: "/returns", label: tr("footerReturns") },
      ],
    },
    {
      title: tr("footerOrders"),
      links: [
        { href: "/track", label: tr("trackOrder") },
        { href: "/cart", label: tr("cart") },
        { href: "/checkout", label: tr("footerCheckout") },
        { href: "/faq", label: tr("footerFaqs") },
      ],
    },
    {
      title: tr("footerHelp"),
      links: [
        { href: "/how-it-works", label: tr("footerHowItWorks") },
        { href: "/delivery", label: tr("footerDelivery") },
        { href: "/stores", label: tr("footerStore") },
        { href: "/blog", label: tr("footerJournal") },
      ],
    },
  ];

  /** Lean link set for small screens — skips cart/checkout (in header) and niche pages. */
  const mobileLinks = [
    { href: "/track", label: tr("trackOrder") },
    { href: "/delivery", label: tr("footerDelivery") },
    { href: "/returns", label: tr("footerReturns") },
    { href: "/faq", label: tr("footerFaqs") },
    { href: "/about", label: tr("footerAbout") },
    { href: "/contact", label: tr("footerContactUs") },
  ];

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p className="footer-tagline">{tr("footerTagline")}</p>
          <div className="socials">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href={store.whatsappHref} aria-label="WhatsApp" target="_blank" rel="noreferrer">
              <PhoneIcon />
            </a>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="footer-col">
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <nav className="footer-mobile-links" aria-label="Footer">
          {mobileLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer-contact-block">
          <h2 className="footer-contact-heading">{tr("footerContact")}</h2>
          <ul className="footer-contact">
            <li>
              <PhoneIcon />
              <a href={`tel:${store.phoneHref}`}>{store.phone}</a>
            </li>
            <li className="footer-contact-email">
              <MailIcon />
              <a href={`mailto:${store.email}`}>{store.email}</a>
            </li>
            <li className="footer-contact-address">
              <PinIcon />
              <span>{store.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-base">
        <p>{tr("footerCopyright")}</p>
      </div>
    </footer>
  );
}
