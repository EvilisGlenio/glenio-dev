import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleRight, FaGithub } from "react-icons/fa";
import { BadgeProps } from "./interfaces";
import { Badge } from "./content";

const Projects = () => {
  const badges: Array<BadgeProps> = [
    {
      index: 1,
      bg: "bg-blue-100",
      text: "text-blue-800",
      darkBg: "dark:bg-blue-900",
      darkText: "dark:text-blue-100",
      content: "Typescript",
    },
    {
      index: 2,
      bg: "bg-gray-100",
      text: "text-gray-800",
      darkBg: "dark:bg-gray-900",
      darkText: "dark:text-gray-400",
      content: "Next.js",
    },
    {
      index: 3,
      bg: "bg-pink-100",
      text: "text-pink-800",
      darkBg: "dark:bg-pink-500",
      darkText: "dark:text-pink-200",
      content: "Styled-components",
    },
    {
      index: 4,
      bg: "bg-sky-100",
      text: "text-sky-500",
      darkBg: "dark:bg-sky-600",
      darkText: "dark:text-sky-200",
      content: "Tailwind CSS",
    },
    {
      index: 5,
      bg: "bg-blue-100",
      text: "text-blue-500",
      darkBg: "dark:bg-blue-900",
      darkText: "dark:text-blue-200",
      content: "Stripe",
    },
    {
      index: 6,
      bg: "bg-purple-100",
      text: "text-purple-800",
      darkBg: "dark:bg-purple-500",
      darkText: "dark:text-purple-100",
      content: "Storybook",
    },
    {
      index: 7,
      bg: "bg-green-100",
      text: "text-green-800",
      darkBg: "dark:bg-green-500",
      darkText: "dark:text-green-50",
      content: "jest",
    },
    {
      index: 8,
      bg: "bg-gray-100",
      text: "text-gray-800",
      darkBg: "dark:bg-gray-700",
      darkText: "dark:text-gray-300",
      content: "CleanCode",
    },
    {
      index: 9,
      bg: "bg-blue-100",
      text: "text-blue-800",
      darkBg: "dark:bg-blue-500",
      darkText: "dark:text-blue-100",
      content: "Jira",
    },
  ];
  return (
    <main className="flex w-full h-full flex-col items-center pt-32">
      <section className="h-full flex flex-col w-2/3 max-w-7xl justify-between items-start gap-16 ">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-xl dark:text-gray-50">
            Conectando sonhos por meio da tecnologia
          </h1>

          <p className="dark:text-gray-100 text-gray-900 text-lg ">
            Movido pela busca constante de aprendizado, busco destacar- me como
            profissional competitivo no desenvolvimento web, utilizando as
            melhores tecnologias do mercado.
          </p>
        </div>

        <div className="flex w-full gap-14 max-md:gap-4 max-sm:gap-3 max-md:text-xs text-gray-700 dark:text-gray-400">
          <div className="flex-1 ">
            <div className="relative h-64 rounded-lg md:h-96">
              <Image
                src="/homepage.png"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                className="rounded-lg"
                alt="..."
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div className="flex">
              <div className="flex-1 flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-gray-50">
                  Vivenda Natureza
                </h2>
                <p className="font-medium text-base">
                  Criado por{" "}
                  <a className="text-gray-50" href="#">
                    Sofmak`s
                  </a>
                </p>
              </div>
              <div className="flex-1 flex items-end justify-end">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                  Em desenvolvimento
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="font-medium text-lg">
                Vivenda Natureza é um projeto de e-commerce para uma
                floricultura com sede em Macaíba- RN. Nosso objetivo principal é
                estabelecer uma presença sólida na internet, permitindo que a
                floricultura expanda seu alcance para todo o território
                nacional.
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                {badges.map((badge) => {
                  return <Badge key={badge.index} {...badge} />;
                })}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link
                target="_blank"
                className="inline-flex items-center font-medium text-gray-50 dark:text-gray-200 underline dark:hover:text-sky-900 hover:text-sky-700"
                href="https://core-puce-one.vercel.app/"
              >
                Ver projeto
                <FaAngleRight />
              </Link>
              <Link
                target="_blank"
                href="https://github.com/AnS-Tech/CORE"
                className="text-2xl text-gray-200 hover:text-gray-50"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
