import React from "react";
import GrayText from "../../common/GrayText";
import { ChartSVG, DashboardSVG, EyeSVG, ListSVG } from "../../common/svgs";

type MenuType = "대시보드" | "목록" | "차트" | "모의";
export const MENUS: MenuType[] = ["대시보드", "목록", "차트", "모의"];
interface MenuProps {
  clickFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name: MenuType;
  selected?: boolean;
}
const Menu = ({ clickFn, name, selected }: MenuProps) => {
  let nameSvg;
  switch (name) {
    case "대시보드":
      nameSvg = <DashboardSVG w={20} h={20} selected={selected} />;
      break;
    case "목록":
      nameSvg = <ListSVG w={20} h={20} selected={selected} />;
      break;
    case "차트":
      nameSvg = <ChartSVG w={20} h={20} selected={selected} />;
      break;
    case "모의":
      nameSvg = <EyeSVG w={20} h={20} selected={selected} />;
      break;
  }

  //
  return (
    <button
      onClick={clickFn}
      name={name}
      className={`hover:bg-[#B9F6CA] duration-300 rounded-2xl p-2 ${
        selected && `bg-[#B9F6CA]`
      }`}
    >
      <GrayText>
        {nameSvg}
        <span className={`${selected && `text-[#007d41]`}`}> {name}</span>
      </GrayText>
    </button>
  );
};
export default Menu;
