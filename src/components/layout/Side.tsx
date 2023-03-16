import GrayText from "../common/GrayText";
import {
  ChartSVG,
  DashboardSVG,
  EyeSVG,
  ListSVG,
  SettingSVG,
} from "../common/svgs";

const Side = () => {
  return (
    <nav className="w-40 top-0 left-0 px-4 flex flex-col justify-around bg-white">
      <GrayText>
        <DashboardSVG w={20} h={20} /> Dashboard
      </GrayText>
      <GrayText>
        <ListSVG w={20} h={20} />
        List
      </GrayText>
      <GrayText>
        <ChartSVG w={20} h={20} />
        Charts
      </GrayText>
      <GrayText>
        <EyeSVG w={20} h={20} />
        Example
      </GrayText>
      <GrayText>
        <SettingSVG w={20} h={20} />
        Settings
      </GrayText>
    </nav>
  );
};
export default Side;
