export function createBrowserStore<T>(key: string, fallback: T) {
  let cached = fallback;
  let hydrated = false;
  const listeners = new Set<() => void>();

  const hydrate = () => {
    if (hydrated || typeof window === "undefined") return cached;
    try {
      const raw = window.localStorage.getItem(key);
      cached = raw ? (JSON.parse(raw) as T) : fallback;
    } catch {
      cached = fallback;
    }
    hydrated = true;
    return cached;
  };

  return {
    get() {
      return hydrate();
    },
    getServer() {
      return fallback;
    },
    set(value: T) {
      cached = value;
      hydrated = true;
      window.localStorage.setItem(key, JSON.stringify(value));
      listeners.forEach((listener) => listener());
    },
    subscribe(listener: () => void) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}
