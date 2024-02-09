import Link from "next/link";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { IoMdContact, IoMdMail } from "react-icons/io";
import { IoDocument } from "react-icons/io5";

export const ContentA = [
  {
    index: 1,
    href: "/about",
    menu: "Sobre",
    icon: <IoMdContact />,
  },
  {
    index: 2,
    href: "/projects",
    menu: "Projetos",
    icon: <HiMiniSquares2X2 />,
  },
  {
    index: 3,
    href: "mailto:glenio.developer@gmail.com",
    menu: "Contato",
    icon: <IoMdMail />,
  },
  {
    index: 4,
    href: "/CV___Evilis_Glenio.pdf",
    menu: "Resumo",
    icon: <IoDocument />,
  },
];

export const Content = ({ href, index, menu }: contentProps) => {
  return (
    <li className=" group relative rounded-m hover:animate-pulse " key={index}>
      <Link
        target={index === 3 ? "_blank" : index === 4 ? "_blank" : ""}
        className="text-sm dark:text-gray-300 dark:hover:text-gray-50 uppercase"
        href={href}
        download={index === 4}
      >
        {menu}
      </Link>
      <div className="absolute left-0 w-0 ease-in-out duration-700 h-[2px] bg-gray-700 dark:bg-gray-50 group-hover:w-full group-hover:ease-in-out  group-hover:duration-500" />
    </li>
  );
};
