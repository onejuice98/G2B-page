import React from "react";
import Menu from "../Menu";

interface SideProps {
  clickFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Side = ({ clickFn }: SideProps) => {
  return (
    <aside className="fixed w-[224px] h-full pt-[80px] bg-white z-10 shadow-md">
      <nav className="flex flex-col justify-around px-8 gap-4">
        <Menu clickFn={clickFn} name="Dashboard" />
        <Menu clickFn={clickFn} name="목록" />
        <Menu clickFn={clickFn} name="모의" />
        <Menu clickFn={clickFn} name="Charts" />
        <Menu clickFn={clickFn} name="Settings" />
      </nav>
    </aside>
  );
};
export default Side;
