// ThemeToggle.jsx
// Simple toggle that cycles: system -> dark -> light -> system
// Persists choice to localStorage under "site-theme".
// Applies a class to document.documentElement: "theme-light" or "theme-dark".
// "system" clears explicit class so OS preference applies.

import React, { useEffect, useState } from "react";

const THEME_KEY = "site-theme";
const getInitial = () => localStorage.getItem(THEME_KEY) || "system";

const applyTheme = (theme) => {
  const root = document.documentElement;
  root.classList.remove("theme-light", "theme-dark");
  if (theme === "light") root.classList.add("theme-light");
  if (theme === "dark") root.classList.add("theme-dark");
  // if system -> no explicit class so prefers-color-scheme will apply
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitial());

  useEffect(() => applyTheme(theme), [theme]);

  const cycle = () => {
    const next = theme === "system" ? "dark" : theme === "dark" ? "light" : "system";
    setTheme(next);
    localStorage.setItem(THEME_KEY, next);
  };

  return (
    <button className="btn secondary" onClick={cycle} title="Toggle theme">
      {theme === "system" ? "System" : theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
