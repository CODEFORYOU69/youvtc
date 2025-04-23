"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// Importons le type de `next-themes` directement
import type { ThemeProviderProps as NextThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: NextThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
