import type React from "react";

export interface MenuName {
  menuName: string;
}

export interface SetMenuName {
    setMenuName: React.Dispatch<React.SetStateAction<string>>;
}

export interface MenuNameProps extends MenuName, SetMenuName {}    