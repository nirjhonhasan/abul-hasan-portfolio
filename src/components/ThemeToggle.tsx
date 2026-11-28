"use client";

import { Moon, Sun } from "lucide-react";

// Toggles the "dark" class on <html> and remembers the choice in localStorage.
// The icons are styled with CSS only (dark: variants), so there is no state to sync.
export default function ThemeToggle() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className="glass flex items-center gap-1 rounded-full p-1 focus-visible:outline-2 focus-visible:outline-brand-blue"
    >
      <span className="flex size-7 items-center justify-center rounded-full min-[360px]:size-8 bg-brand-blue text-white shadow-md transition-colors dark:bg-transparent dark:text-text-muted">
        <Sun className="size-4" />
      </span>
      <span className="flex size-7 items-center justify-center rounded-full min-[360px]:size-8 text-text-muted transition-colors dark:bg-brand-blue dark:text-white dark:shadow-md">
        <Moon className="size-4" />
      </span>
    </button>
  );
}
