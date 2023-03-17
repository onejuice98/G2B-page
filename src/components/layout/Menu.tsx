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
  name: "Dashboard" | "List" | "Charts" | "Example" | "Settings";
}
const Menu = ({ clickFn, name }: MenuProps) => {
  let nameSvg;
  switch (name) {
    case "Dashboard":
      nameSvg = <DashboardSVG w={20} h={20} />;
      break;
    case "List":
      nameSvg = <ListSVG w={20} h={20} />;
      break;
    case "Charts":
      nameSvg = <ChartSVG w={20} h={20} />;
      break;
    case "Example":
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
