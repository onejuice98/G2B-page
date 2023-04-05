import { useState } from "react";
import Example from "../Example/Example";
import List from "../List/List";
import Header from "./Header";
import Side from "./Side";

const Layout = () => {
  const [content, setContent] = useState<string>("목록");
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
      </div>
    </>
  );
};
export default Layout;
