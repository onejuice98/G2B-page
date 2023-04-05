import { BellSVG, SettingSVG } from "../../common/svgs";
import Avatar from "./Avatar";
import Logo from "./Logo";

interface HeaderProps {
  current: string;
}
const Header = ({ current }: HeaderProps) => {
  return (
    <header className="fixed w-full max-h-[80px] z-20 bg-white">
      <nav className="flex items-center w-full h-16 gap-2 py-4">
        <Logo />
        <div className="flex justify-between w-full px-6">
          <span className="font-semibold text-2xl text-gray-700">
            {current}
          </span>
          <div className="flex items-center gap-4">
            <BellSVG w={20} h={20} />
            <SettingSVG w={20} h={20} />
            <Avatar alt="Juice Won" />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
