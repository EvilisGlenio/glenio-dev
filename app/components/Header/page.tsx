"use client";

import Link from "next/link";
import { Content, ContentA } from "./content";
import ThemeSwitch from "../ThemeSwitch/themeSwitch";
import { MenuContext } from "../Context/menuContext";
import { useContext } from "react";
import { useScreenDetector } from "./context/screenDetector";
import { MenuHamburguer } from "./mobile/MenuHamburguer";
import MobileMenu from "./mobile/MobileMenu";

const Header = () => {
  const { currentMode } = useContext(MenuContext);
  const { width } = useScreenDetector(1024);
  const isMobile = width <= 720;

  return (
    <main className="fixed z-10 top-0 flex w-full items-center justify-between px-4 dark:bg-zinc-950">
      <h1 className=" text-lg font-extrabold dark:text-gray-50">
        <Link href={"/"}>EG</Link>
      </h1>
      <section className=" flex items-center justify-between w-[64%] max-w-7xl p-6  ">
        <ul className="flex w-full items-center justify-start gap-6 max-md:hidden font-medium text-gray-700 dark:text-gray-50 ">
          {ContentA.map(({ href, index, menu }) => {
            return (
              <Content index={index} href={href} key={index} menu={menu} />
            );
          })}
        </ul>
      </section>
      {isMobile ? <MenuHamburguer /> : <ThemeSwitch />}
      {currentMode && <MobileMenu />}
    </main>
  );
};

export default Header;
