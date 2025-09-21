import { useEffect, useState } from "react";

export function useCurrentTheme() {
  const getTheme = () => {
    const root = document.documentElement;

    if (root.classList.contains("theme-dark")) return "dark";
    if (root.classList.contains("theme-light")) return "light";

    // If no explicit class, fall back to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Listen to OS theme changes (system mode)
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setTheme(getTheme());
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return theme;
}
