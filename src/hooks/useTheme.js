import { useLayoutEffect, useState } from "react";

const THEME_KEY = "havenly-theme";

function getTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // Storage may be unavailable in private browsing.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function useTheme() {
  const [theme, setTheme] = useState(getTheme);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // The current theme still works without storage.
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => current === "light" ? "dark" : "light");
  }

  return { theme, toggleTheme };
}
