import { Content } from "./content";

export const Header = () => {
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
    <section className="flex w-screen items-center p-6">
      <ul className="flex w-1/3 items-center justify-between ">
        {ContentA.map(({ href, index, menu }) => {
          return <Content index={index} href={href} key={index} menu={menu} />;
        })}
      </ul>
    </section>
  );
};
