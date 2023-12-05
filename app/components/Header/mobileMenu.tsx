import React, { useContext } from "react";
import { ContentA, MContent } from "./content";
import { MenuContext } from "../Context/menuContext";

const MobileMenu = () => {
  const { currentMode, changeCurrentMode } = useContext(MenuContext);
  return (
    <div
      id="drawer-navigation"
      className="md:hidden fixed rounded-md top-0 left-[98%] w-[98%] p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-zinc-950"
      aria-labelledby="drawer-navigation-label"
    >
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-gray-500 uppercase dark:text-gray-50"
      >
        Menu
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        className="text-gray-50 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-zinc-800 dark:hover:text-white"
        onClick={() => changeCurrentMode(!currentMode)}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {ContentA.map(({ href, index, menu, icon }) => {
            return (
              <MContent index={index} href={href} key={index} menu={menu}>
                {icon}
              </MContent>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
