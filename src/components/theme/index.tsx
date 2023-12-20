"use client";

import { MoonIcon, SunIcon } from "../(blog)/Icons";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <button aria-label="ThemeToggler" className="px-3" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {
        theme === 'dark' ? <MoonIcon className="text-white"/> : <SunIcon className="text-white"/>
      }
    </button>
  );
}
