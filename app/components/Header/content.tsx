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
    href: "https://www.overleaf.com/download/project/65c2446f3dab587dac2052c3/build/18d88e008c4-f75bea8690fcedd8/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-n2d-c-f-369c&enable_pdf_caching=true&popupDownload=true",
    menu: "Resumo",
    icon: <IoDocument />,
  },
];

export const Content = ({ href, index, menu }: contentProps) => {
  return (
    <li className=" group relative rounded-m hover:animate-pulse " key={index}>
      <Link
        target={index === 3 ? "_blank" : ""}
        className="text-sm dark:text-gray-300 dark:hover:text-gray-50 uppercase"
        href={href}
      >
        {menu}
      </Link>
      <div className="absolute left-0 w-0 ease-in-out duration-700 h-[2px] bg-gray-700 dark:bg-gray-50 group-hover:w-full group-hover:ease-in-out  group-hover:duration-500" />
    </li>
  );
};
