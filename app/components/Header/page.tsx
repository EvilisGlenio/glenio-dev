"use client";

import Link from "next/link";
import { Content, ContentA, MenuHamburguer } from "./content";
import ThemeSwitch from "../ThemeSwitch/themeSwitch";
import { MenuContext } from "../Context/menuContext";
import { useContext } from "react";
import MobileMenu from "./mobileMenu";
import { useScreenDetector } from "./context/widthContext";

const Header = () => {
  const { currentMode } = useContext(MenuContext);
  const { width } = useScreenDetector();
  const isMobile = width <= 720;

  return (
    <section className="fixed top-0 flex w-full items-center justify-between p-6 dark:bg-zinc-950 ">
      <h1 className="px-2 py-1 rounded-md dark:hover:bg-zinc-900 text-lg font-extrabold dark:text-white">
        <Link href={"/"}>EG</Link>
      </h1>

      <ul className="flex w-2/3 max-w-7xl items-center justify-start gap-6 max-md:hidden dark:text-white ">
        {ContentA.map(({ href, index, menu }) => {
          return <Content index={index} href={href} key={index} menu={menu} />;
        })}
      </ul>

      {isMobile ? <MenuHamburguer /> : <ThemeSwitch />}
      {currentMode && <MobileMenu />}
    </section>
  );
};

export default Header;
