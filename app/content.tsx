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
    href: "https://www.linkedin.com/in/evilis-glenio/",
    icon: <FaLinkedinIn />,
  },
  {
    index: 2,
    href: "https://github.com/EvilisGlenio",
    icon: <FaGithub />,
  },
  {
    index: 3,
    href: "https://twitter.com/EvilisGlenio",
    icon: <FaTwitter />,
  },
  {
    index: 4,
    href: "https://www.instagram.com/evilis.glenio/",
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
    <li
      key={index}
      className="text-lg max-md:text-sm text-gray-700 dark:text-gray-400"
    >
      <Link
        className="dark:hover:text-sky-900 hover:text-sky-700"
        href={href}
        target="_blank"
      >
        {children}
      </Link>
    </li>
  );
};

export default HomeContent;
