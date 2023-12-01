"use client";

import { useState, useEffect, ReactNode } from "react";
import ThemeContext from "./themeContext";

interface ThemeContextProps {
  children: ReactNode;
}

const ThemeContextWrapper: React.FC<ThemeContextProps> = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "dark");

  const changeCurrentTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "light") document.body.classList.remove("dark");
    else document.body.classList.add("dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextWrapper;
