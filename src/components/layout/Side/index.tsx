import React from "react";
import Menu, { MENUS } from "./Menu";

interface SideProps {
  clickFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  selected: string;
}
const Side = ({ clickFn, selected }: SideProps) => {
  return (
    <aside className="fixed w-[224px] h-full pt-[80px] bg-white z-10 sm:hidden md:block">
      <nav className="flex flex-col justify-around px-2 gap-2">
        {MENUS.map((menu, index) => (
          <Menu
            key={index}
            clickFn={clickFn}
            name={menu}
            selected={selected == menu}
          />
        ))}
      </nav>
    </aside>
  );
};
export default Side;
