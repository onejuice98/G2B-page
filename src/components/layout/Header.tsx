interface HeaderProps {
  current: string;
}
const Header = ({ current }: HeaderProps) => {
  return (
    <header className="flex items-center w-full h-16 gap-2 py-4">
      <div className="w-40 flex justify-center items-center">
        <span className="font-bold text-3xl text-green-400">👾 나장봇</span>
      </div>
      <span className="font-semibold text-2xl text-gray-700">{current}</span>
    </header>
  );
};
export default Header;
