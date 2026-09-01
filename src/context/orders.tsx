"use client";

import { createContext, useContext, useMemo, useSyncExternalStore } from "react";
import { createBrowserStore } from "@/lib/browser-store";
import { createOrderId } from "@/lib/format";

export type PlacedOrder = {
  id: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  payment: "delivery" | "card";
  coupon?: string;
  discount: number;
  subtotal: number;
  total: number;
  items: { slug: string; name: string; quantity: number; price: number }[];
  createdAt: string;
};

type OrdersContextValue = {
  orders: PlacedOrder[];
  saveOrder: (order: Omit<PlacedOrder, "id" | "createdAt">) => PlacedOrder;
};

const orderStore = createBrowserStore<PlacedOrder[]>("pets-delight-orders", []);
const OrdersContext = createContext<OrdersContextValue | null>(null);

export function OrdersProvider({ children }: { children: React.ReactNode }) {
  const orders = useSyncExternalStore(orderStore.subscribe, orderStore.get, orderStore.getServer);

  const value = useMemo<OrdersContextValue>(
    () => ({
      orders,
      saveOrder(order) {
        const placed: PlacedOrder = {
          ...order,
          id: createOrderId(),
          createdAt: new Date().toISOString(),
        };
        orderStore.set([placed, ...orderStore.get()]);
        return placed;
      },
    }),
    [orders],
  );

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
}

export function useOrders() {
  const context = useContext(OrdersContext);
  if (!context) throw new Error("useOrders must be used inside OrdersProvider");
  return context;
}
