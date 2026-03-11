"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // UseEffect ensures the component only renders on the client 
  // to prevent hydration mismatch errors.
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 h-9 w-9" />; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-background hover:bg-muted transition-colors focus-visible:ring-2 focus-visible:ring-primary outline-none"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="size-[1.2rem] text-yellow-500 transition-all" />
      ) : (
        <Moon className="size-[1.2rem] text-slate-700 transition-all" />
      )}
    </button>
  );
}