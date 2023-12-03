"use client";

import { createContext } from "react";

const defaultValue = {
  currentTheme: "dark",
  changeCurrentTheme: (newTheme: "dark" | "light") => {},
};

const ThemeContext = createContext(defaultValue);

export default ThemeContext;
