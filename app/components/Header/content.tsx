"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MenuContext } from "../Context/menuContext";

export const ContentA = [
  {
    index: 1,
    href: "/",
    menu: "ABOUT",
  },
  {
    index: 2,
    href: "/",
    menu: "PROJECTS",
  },
  {
    index: 3,
    href: "/",
    menu: "CONTACT",
  },
  {
    index: 4,
    href: "/",
    menu: "RESUME",
  },
];

interface contentProps {
  index: number;
  href: string;
  menu: string;
}

export const Content = ({ href, index, menu }: contentProps) => {
  return (
    <li key={index}>
      <Link className="opacity-50 hover:opacity-100 " href={href}>
        {menu}
      </Link>
    </li>
  );
};

export const MenuHamburguer = () => {
  const { currentMode, changeCurrentMode } = useContext(MenuContext);

  return (
    <div
      className="md:hidden text-xl dark:text-gray-50 cursor-pointer"
      onClick={() => changeCurrentMode(!currentMode)}
    >
      <RxHamburgerMenu />
    </div>
  );
};
