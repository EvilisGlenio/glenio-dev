"use client";

import { ReactNode, createContext, useState } from "react";

const defaultMode = {
  currentMode: false,
  changeCurrentMode: (newMode: true | false) => {},
};

export const MenuContext = createContext(defaultMode);

interface MenuContextProps {
  children: ReactNode;
}

export const MenuContextWrapper: React.FC<MenuContextProps> = ({
  children,
}) => {
  const [mode, setMode] = useState(defaultMode.currentMode);

  const changeCurrentMode = (newMode: true | false) => {
    setMode(newMode);
  };
  return (
    <MenuContext.Provider value={{ currentMode: mode, changeCurrentMode }}>
      {children}
    </MenuContext.Provider>
  );
};
