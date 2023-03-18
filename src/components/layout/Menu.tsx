import React from "react";
import GrayText from "../common/GrayText";
import {
  ChartSVG,
  DashboardSVG,
  EyeSVG,
  ListSVG,
  SettingSVG,
} from "../common/svgs";

interface MenuProps {
  clickFn: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  name: "Dashboard" | "목록" | "Charts" | "모의" | "Settings";
}
const Menu = ({ clickFn, name }: MenuProps) => {
  let nameSvg;
  switch (name) {
    case "Dashboard":
      nameSvg = <DashboardSVG w={20} h={20} />;
      break;
    case "목록":
      nameSvg = <ListSVG w={20} h={20} />;
      break;
    case "Charts":
      nameSvg = <ChartSVG w={20} h={20} />;
      break;
    case "모의":
      nameSvg = <EyeSVG w={20} h={20} />;
      break;
    case "Settings":
      nameSvg = <SettingSVG w={20} h={20} />;
      break;
  }

  return (
    <button onClick={clickFn} name={name}>
      <GrayText>
        {nameSvg}
        {name}
      </GrayText>
    </button>
  );
};
export default Menu;
