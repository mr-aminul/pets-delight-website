"use client";

import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { useLocale } from "@/context/locale";
import { useT } from "@/lib/i18n";
import { getLocalizedBlogPosts } from "@/lib/localize";

export default function BlogPage() {
  const { locale } = useLocale();
  const tr = useT();
  const blogPosts = getLocalizedBlogPosts(locale);

  return (
    <>
      <PageHero eyebrow={tr("blogEyebrow")} title={tr("blogTitle")}>
        {tr("blogLede")}
      </PageHero>
      <section className="shell stack">
        <div className="card-list">
          {blogPosts.map((post) => (
            <article key={post.slug}>
              <p className="hint">{post.date}</p>
              <h2>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
