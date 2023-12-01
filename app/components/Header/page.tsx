"use client";

import { useState } from "react";
import Link from "next/link";
import { Content } from "./content";
import ThemeSwitch from "../ThemeSwitch/themeSwitch";

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const ContentA = [
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
  return (
    <section className="flex w-screen items-center justify-between p-6 dark:bg-zinc-950">
      <h1 className="text-lg font-extrabold dark:text-white">
        <Link href={"/"}>EG</Link>
      </h1>
      <ul className="flex w-1/3 items-center justify-start gap-8 dark:text-white ">
        {ContentA.map(({ href, index, menu }) => {
          return <Content index={index} href={href} key={index} menu={menu} />;
        })}
      </ul>

      <ThemeSwitch />
    </section>
  );
};
