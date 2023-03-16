interface GrayTextProps {
  children: React.ReactNode;
}
const GrayText = ({ children }: GrayTextProps) => {
  return (
    <span className="flex items-center text-lg font-medium text-[#737791] gap-2">
      {children}
    </span>
  );
};
export default GrayText;
