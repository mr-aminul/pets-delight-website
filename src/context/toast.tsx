"use client";

import { createContext, useContext, useMemo, useState } from "react";

type ToastContextValue = {
  message: string | null;
  notify: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  const value = useMemo<ToastContextValue>(
    () => ({
      message,
      notify(next) {
        setMessage(next);
        window.setTimeout(() => setMessage(null), 2400);
      },
    }),
    [message],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      {message ? (
        <p className="toast" role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside ToastProvider");
  return context;
}
