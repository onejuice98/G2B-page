import Avatar from "../common/Avatar";
import { BellSVG, SettingSVG } from "../common/svgs";

interface HeaderProps {
  current: string;
}
const Header = ({ current }: HeaderProps) => {
  return (
    <header className="fixed w-full max-h-[80px] z-20 bg-white">
      <nav className="flex items-center w-full h-16 gap-2 py-4">
        <div className="w-40 flex justify-center items-center">
          <span className="font-bold text-3xl text-green-400">👾 나장봇</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-2xl text-gray-700">
            {current}
          </span>
          <BellSVG w={20} h={20} />
          <SettingSVG w={20} h={20} />
          <Avatar />
        </div>
      </nav>
    </header>
  );
};
export default Header;
