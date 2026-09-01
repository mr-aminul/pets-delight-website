import type { Metadata } from "next";
import { SearchContent } from "@/components/search-content";

export const metadata: Metadata = {
  title: "Search",
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  return <SearchContent query={q} />;
}
