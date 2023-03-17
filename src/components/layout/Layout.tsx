import { useState } from "react";
import Example from "../Example/Example";
import List from "../List/List";
import Header from "./Header";
import Side from "./Side";

const Layout = () => {
  const [content, setContent] = useState<string>("List");
  const menuClicked = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setContent(event.currentTarget.name);
  };
  return (
    <>
      <Header />
      <div className="flex h-[calc(100vh-64px)] bg-gray-100">
        <Side clickFn={menuClicked} />
        <div className="flex w-full gap-4 p-4">
          {content === "List" && <List />}
          {content === "Example" && <Example />}
        </div>
      </div>
    </>
  );
};
export default Layout;
