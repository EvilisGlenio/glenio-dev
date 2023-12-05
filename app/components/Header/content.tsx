"use client";

import { useContext } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MenuContext } from "../Context/menuContext";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoMdContact, IoMdMail } from "react-icons/io";
import { IoDocument } from "react-icons/io5";

export const ContentA = [
  {
    index: 1,
    href: "/",
    menu: "Sobre",
    icon: <IoMdContact />,
  },
  {
    index: 2,
    href: "/",
    menu: "Projetos",
    icon: <HiMiniSquares2X2 />,
  },
  {
    index: 3,
    href: "/",
    menu: "Contato",
    icon: <IoMdMail />,
  },
  {
    index: 4,
    href: "/",
    menu: "Resumo",
    icon: <IoDocument />,
  },
];

interface contentProps {
  index: number;
  href: string;
  menu: string;
  children?: React.ReactNode;
}

export const Content = ({ href, index, menu }: contentProps) => {
  return (
    <li className=" group relative rounded-m hover:animate-pulse " key={index}>
      <Link
        className="text-sm dark:text-gray-300 dark:hover:text-gray-50 uppercase"
        href={href}
      >
        {menu}
      </Link>
      <div className="absolute left-0 w-0 ease-in-out duration-700 h-[2px] bg-gray-50 group-hover:w-full group-hover:ease-in-out  group-hover:duration-500" />
    </li>
  );
};

export const MContent = ({ href, index, menu, children }: contentProps) => {
  return (
    <li key={index}>
      <a
        href={href}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        {children}
        <p className="ms-3 uppercase">{menu}</p>
      </a>
    </li>
  );
};

export const MenuHamburguer = () => {
  const { currentMode, changeCurrentMode } = useContext(MenuContext);

  return (
    <div
      className=" dark:hover:bg-zinc-800 md:hidden text-xl dark:text-gray-50 cursor-pointer p-2 rounded-md"
      onClick={() => changeCurrentMode(!currentMode)}
    >
      <RxHamburgerMenu />
    </div>
  );
};
