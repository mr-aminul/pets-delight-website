"use client";

import { CartProvider } from "@/context/cart";
import { LocaleProvider } from "@/context/locale";
import { OrdersProvider } from "@/context/orders";
import { ToastProvider } from "@/context/toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <OrdersProvider>
        <CartProvider>
          <ToastProvider>{children}</ToastProvider>
        </CartProvider>
      </OrdersProvider>
    </LocaleProvider>
  );
}
