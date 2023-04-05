import { BellSVG, SettingSVG } from "../../common/svgs";
import Avatar from "./Avatar";
import Logo from "./Logo";

interface HeaderProps {
  current: string;
}
const Header = ({ current }: HeaderProps) => {
  return (
    <header className="fixed w-full max-h-[80px] z-20 bg-white">
      <nav className="flex h-16 py-4">
        <Logo />
        <div className="flex w-[calc(100%-224px)] justify-between px-6">
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
