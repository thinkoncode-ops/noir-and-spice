"use client";

import { CartProvider } from "./CartContext";
import { FavoritesProvider } from "./FavoritesContext";
import { ThemeProvider } from "./ThemeContext";
import { ToastProvider } from "./ToastContext";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ToastProvider>
        <FavoritesProvider>
          <CartProvider>{children}</CartProvider>
        </FavoritesProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
