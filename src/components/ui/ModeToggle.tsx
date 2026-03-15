"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-12 w-12 rounded-full border bg-background/50 backdrop-blur-md" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-primary/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary outline-none"
      aria-label="Toggle theme"
    >
      <div className="relative h-6 w-6">
        <Sun className="absolute inset-0 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500 group-hover:rotate-12" />
        <Moon className="absolute inset-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400 group-hover:-rotate-12" />
      </div>
      
      {/* Subtle Glow Effect */}
      <span className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}