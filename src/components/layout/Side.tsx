import React from "react";
import Menu from "./Menu";

interface SideProps {
  clickFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Side = ({ clickFn }: SideProps) => {
  return (
    <nav className="w-40 top-0 left-0 px-4 flex flex-col justify-around bg-white">
      <Menu clickFn={clickFn} name="Dashboard" />
      <Menu clickFn={clickFn} name="List" />
      <Menu clickFn={clickFn} name="Charts" />
      <Menu clickFn={clickFn} name="Example" />
      <Menu clickFn={clickFn} name="Settings" />
    </nav>
  );
};
export default Side;
