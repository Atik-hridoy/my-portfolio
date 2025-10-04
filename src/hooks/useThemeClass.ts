"use client";

import { useEffect } from "react";

export function useThemeClass(isDark: boolean) {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);
}
