import Link from "next/link";
import React, { ReactNode } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

export const HContent = [
  {
    index: 1,
    href: "/",
    icon: <FaLinkedinIn />,
  },
  {
    index: 2,
    href: "/",
    icon: <FaGithub />,
  },
  {
    index: 3,
    href: "/",
    icon: <FaTwitter />,
  },
  {
    index: 4,
    href: "/",
    icon: <FaInstagram />,
  },
];

interface HomeContentProps {
  index: number;
  href: string;
  children: ReactNode;
}

const HomeContent: React.FC<HomeContentProps> = ({ index, href, children }) => {
  return (
    <li key={index} className="text-lg max-md:text-sm hover:opacity-50">
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default HomeContent;
