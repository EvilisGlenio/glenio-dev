import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

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
  return <RxHamburgerMenu />;
};
