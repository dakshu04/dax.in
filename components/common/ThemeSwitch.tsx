"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import Moon from "../svg/Moon";
import Sun from "../svg/Sun";

type Variant = "circle" | "default";
type Start =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

interface ThemeToggleProps {
  variant?: Variant;
  start?: Start;
  blur?: boolean;
  className?: string;
}

export function ThemeToggle({
  variant = "default",
  start = "center",
  blur = false,
  className,
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, [])
// If not mounted, render a placeholder with the same dimensions
  // to prevent the "Hydration Mismatch" error.
  if (!mounted) {
    return <div className="h-8 w-8" />; // Empty box with same size
  }
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "relative transition-all duration-300 active:scale-95",
        variant === "circle" && "rounded-full",
        blur && "backdrop-blur-sm",
        className
      )}
      data-start={start} // semantic hook (for future animations if needed)
    >
      {isDark ? (
        <Moon className="h-4 w-4 transition-transform duration-300 rotate-0" />
      ) : (
    <Sun className="h-4 w-4 transition-transform duration-300 rotate-0" />
      )}
    </Button>
  );
}
