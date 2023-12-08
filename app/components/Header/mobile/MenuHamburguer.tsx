import { RxHamburgerMenu } from "react-icons/rx";
import { MenuContext } from "../../Context/menuContext";
import { useContext } from "react";

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
