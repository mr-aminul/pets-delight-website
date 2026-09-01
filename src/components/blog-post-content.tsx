"use client";

import Link from "next/link";
import { useLocale } from "@/context/locale";
import { useT } from "@/lib/i18n";
import { getLocalizedBlogPost } from "@/lib/localize";

export function BlogPostContent({ slug }: { slug: string }) {
  const { locale } = useLocale();
  const tr = useT();
  const post = getLocalizedBlogPost(slug, locale);

  if (!post) return null;

  return (
    <article className="shell stack article">
      <p className="hint">{post.date}</p>
      <h1>{post.title}</h1>
      {post.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <Link href="/blog">{tr("blogBack")}</Link>
    </article>
  );
}
