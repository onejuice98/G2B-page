import { useState } from "react";
import Charts from "../Charts";
import Dashboard from "../Dashboard";
import Example from "../Example/Example";
import List from "../List/List";
import Header from "./Header";
import Side from "./Side";

const Layout = () => {
  const [content, setContent] = useState<string>("대시보드");
  const menuClicked = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setContent(event.currentTarget.name);
  };
  return (
    <>
      <Header current={content} />
      <Side clickFn={menuClicked} selected={content} />

      <div className="flex md:w-[calc(100%-224px)] p-8 md:ml-[224px] pt-[96px] rounded-md">
        {content === "목록" && <List />}
        {content === "모의" && <Example />}
        {content === "대시보드" && <Dashboard />}
        {content === "차트" && <Charts />}
      </div>
    </>
  );
};
export default Layout;
