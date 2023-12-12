import React, { useContext } from "react";
import ThemeContext from "../Context/themeContext";

const ThemeSwitch = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <label className="relative inline-flex items-center cursor-pointer ">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onClick={() =>
          changeCurrentTheme(currentTheme === "dark" ? "light" : "dark")
        }
      />
      <div className="w-11 h-6 bg-gray-600 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-900"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {currentTheme === "dark" ? "LIGHTMODE" : "DARKMODE"}
      </span>
    </label>
  );
};

export default ThemeSwitch;
