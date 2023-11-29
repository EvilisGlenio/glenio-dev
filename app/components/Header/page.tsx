"use client";

import { useState } from "react";
import Link from "next/link";
import { Content } from "./content";

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
    <section className="flex w-screen max-w-7xl items-center justify-between p-6">
      <h1 className="text-lg font-extrabold">
        <Link href={"/"}>EG</Link>
      </h1>
      <ul className="flex w-1/3 items-center justify-start gap-8 ">
        {ContentA.map(({ href, index, menu }) => {
          return <Content index={index} href={href} key={index} menu={menu} />;
        })}
      </ul>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          onClick={() => setToggle(!toggle)}
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {toggle ? "Dark Theme" : "Light Theme"}
        </span>
      </label>
    </section>
  );
};
