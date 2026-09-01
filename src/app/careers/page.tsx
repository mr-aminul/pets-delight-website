"use client";

import { useState } from "react";
import { useLocale } from "@/context/locale";
import { useT } from "@/lib/i18n";
import { getLocalizedJobs } from "@/lib/localize";

export default function CareersPage() {
  const [sent, setSent] = useState("");
  const { locale } = useLocale();
  const tr = useT();
  const jobs = getLocalizedJobs(locale);

  return (
    <section className="shell stack">
      <h1>{tr("careersTitle")}</h1>
      <p className="lede">{tr("careersLede")}</p>
      {jobs.map((job) => (
        <article className="job-card" key={job.slug}>
          <h2>{job.title}</h2>
          <p className="hint">{job.type}</p>
          <p>{job.summary}</p>
          {sent === job.slug ? (
            <p className="banner-note">{tr("careersApplied", { title: job.title })}</p>
          ) : (
            <form
              className="contact-form"
              style={{ marginTop: "1rem" }}
              onSubmit={(event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                const payload = {
                  job: job.slug,
                  name: String(data.get("name")),
                  email: String(data.get("email")),
                  note: String(data.get("note")),
                };
                const existing = JSON.parse(window.localStorage.getItem("pets-delight-jobs") ?? "[]");
                window.localStorage.setItem("pets-delight-jobs", JSON.stringify([payload, ...existing]));
                setSent(job.slug);
              }}
            >
              <div className="field">
                <label htmlFor={`${job.slug}-name`}>{tr("name")}</label>
                <input id={`${job.slug}-name`} name="name" required />
              </div>
              <div className="field">
                <label htmlFor={`${job.slug}-email`}>{tr("email")}</label>
                <input id={`${job.slug}-email`} name="email" type="email" required />
              </div>
              <div className="field">
                <label htmlFor={`${job.slug}-note`}>{tr("careersWhy")}</label>
                <textarea id={`${job.slug}-note`} name="note" rows={3} required />
              </div>
              <button type="submit" className="btn btn-primary">
                {tr("applyJob")}
              </button>
            </form>
          )}
        </article>
      ))}
    </section>
  );
}
