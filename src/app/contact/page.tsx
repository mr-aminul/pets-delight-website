"use client";

import { useState } from "react";
import { useLocale } from "@/context/locale";
import { useT } from "@/lib/i18n";
import { getLocalizedStore } from "@/lib/localize";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const { locale } = useLocale();
  const tr = useT();
  const store = getLocalizedStore(locale);

  return (
    <section className="shell stack">
      <h1>{tr("contactTitle")}</h1>
      <p className="lede">{tr("contactLede")}</p>
      <div className="two-col">
        {sent ? (
          <p className="banner-note">{tr("contactSent")}</p>
        ) : (
          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const payload = {
                name: String(data.get("name")),
                email: String(data.get("email")),
                phone: String(data.get("phone")),
                message: String(data.get("message")),
                at: new Date().toISOString(),
              };
              const existing = JSON.parse(window.localStorage.getItem("pets-delight-messages") ?? "[]");
              window.localStorage.setItem("pets-delight-messages", JSON.stringify([payload, ...existing]));
              setSent(true);
            }}
          >
            <div className="field">
              <label htmlFor="name">{tr("name")}</label>
              <input id="name" name="name" required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="email">{tr("email")}</label>
              <input id="email" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="phone">{tr("phone")}</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="message">{tr("contactHelp")}</label>
              <textarea id="message" name="message" rows={5} required />
            </div>
            <button type="submit" className="btn btn-primary">
              {tr("sendMessage")}
            </button>
          </form>
        )}
        <aside className="panel">
          <p>
            <strong>{tr("phone")}</strong>
            <br />
            <a href={`tel:${store.phoneHref}`}>{store.phone}</a>
          </p>
          <p>
            <strong>{tr("contactWhatsapp")}</strong>
            <br />
            <a href={store.whatsappHref} target="_blank" rel="noreferrer">
              {store.whatsapp}
            </a>
          </p>
          <p>
            <strong>{tr("email")}</strong>
            <br />
            <a href={`mailto:${store.email}`}>{store.email}</a>
          </p>
          <p>
            <strong>{tr("contactStore")}</strong>
            <br />
            {store.address}
            <br />
            {store.hours}
          </p>
        </aside>
      </div>
    </section>
  );
}
