"use client";

import { useState, useEffect, ReactNode } from "react";
import ThemeContext from "./themeContext";

interface ThemeContextProps {
  children: ReactNode;
}

const ThemeContextWrapper: React.FC<ThemeContextProps> = ({ children }) => {
  const isLocalStorageAvaliable = typeof localStorage !== `undefined`;

  const [theme, setTheme] = useState(
    isLocalStorageAvaliable ? localStorage.getItem("theme") || "dark" : "dark"
  );

  const changeCurrentTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);

    if (isLocalStorageAvaliable) {
      localStorage.setItem("theme", newTheme);
    }
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
