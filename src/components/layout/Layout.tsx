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
      <Side clickFn={menuClicked} />

      <div className="flex w-[calc(100%-160px)] p-4 ml-[160px] pt-[80px]">
        {content === "목록" && <List />}
        {content === "모의" && <Example />}
      </div>
    </>
  );
};
export default Layout;
