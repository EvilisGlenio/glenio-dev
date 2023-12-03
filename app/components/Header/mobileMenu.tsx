import React from "react";
import { Content, ContentA } from "./content";
import ThemeSwitch from "../ThemeSwitch/themeSwitch";

const MobileMenu = () => {
  return (
    <div className="absolute top-8 w-full flex gap-4">
      <ul className="flex flex-col items-center justify-between gap-8  dark:text-white ">
        {ContentA.map(({ href, index, menu }) => {
          return <Content index={index} href={href} key={index} menu={menu} />;
        })}
      </ul>

      <ThemeSwitch />
    </div>
  );
};

export default MobileMenu;
