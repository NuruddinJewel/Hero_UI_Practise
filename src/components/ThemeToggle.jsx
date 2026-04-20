"use client";
import React from 'react';
import { useTheme } from "next-themes";
const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                Toggle {theme === "dark" ? "Light" : "Dark"} Mode
            </button>
        </div>
    );
};

export default ThemeToggle;

/* 
"use client";

import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}


*/