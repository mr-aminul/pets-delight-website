import type { Metadata } from "next";
import { ShopContent } from "@/components/shop-content";

export const metadata: Metadata = {
  title: "Shop",
};

type ShopPageProps = {
  searchParams: Promise<{ category?: string; sale?: string; sort?: string }>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  return (
    <ShopContent
      category={params.category}
      sale={params.sale === "1"}
      sort={params.sort}
    />
  );
}
