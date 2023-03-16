import Header from "./Header";
import Side from "./Side";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="flex h-[calc(100vh-64px)] bg-gray-100">
        <Side />
        <div className="flex w-full gap-4 p-4">{children}</div>
      </div>
    </>
  );
};
export default Layout;
