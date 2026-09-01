"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import { createBrowserStore } from "@/lib/browser-store";
import { getProduct, type Product } from "@/lib/products";

export type CartLine = {
  slug: string;
  quantity: number;
};

export type CartItem = CartLine & {
  product: Product;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (slug: string, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  removeItem: (slug: string) => void;
  clearCart: () => void;
};

const cartStore = createBrowserStore<CartLine[]>("pets-delight-cart", []);
const CartContext = createContext<CartContextValue | null>(null);

function hydrate(lines: CartLine[]): CartItem[] {
  return lines
    .map((line) => {
      const product = getProduct(line.slug);
      if (!product || line.quantity < 1) return null;
      return { ...line, product };
    })
    .filter((line): line is CartItem => line !== null);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const lines = useSyncExternalStore(cartStore.subscribe, cartStore.get, cartStore.getServer);

  const value = useMemo<CartContextValue>(() => {
    const items = hydrate(lines);
    return {
      items,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
      addItem(slug, quantity = 1) {
        const current = cartStore.get();
        const existing = current.find((line) => line.slug === slug);
        cartStore.set(
          existing
            ? current.map((line) =>
                line.slug === slug ? { ...line, quantity: line.quantity + quantity } : line,
              )
            : [...current, { slug, quantity }],
        );
      },
      setQuantity(slug, quantity) {
        const current = cartStore.get();
        cartStore.set(
          quantity < 1
            ? current.filter((line) => line.slug !== slug)
            : current.map((line) => (line.slug === slug ? { ...line, quantity } : line)),
        );
      },
      removeItem(slug) {
        cartStore.set(cartStore.get().filter((line) => line.slug !== slug));
      },
      clearCart() {
        cartStore.set([]);
      },
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
