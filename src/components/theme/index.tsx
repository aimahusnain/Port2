"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();

  return (
    <button className="px-3" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {
        theme === 'dark' ? <MoonIcon className="text-white" size={30} /> : <SunIcon className="text-white" size={30} />
      }
    </button>
  );
}
