export function formatPrice(value: number) {
  return `${new Intl.NumberFormat("en-BD").format(value)}৳`;
}

export function createOrderId() {
  const stamp = Date.now().toString(36).toUpperCase();
  const noise = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `PD-${stamp}-${noise}`;
}

export const FREE_DELIVERY_MIN = 2000;
export const DELIVERY_FEE = 80;
