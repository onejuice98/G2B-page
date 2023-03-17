import { useState } from "react";
import { useMutation } from "react-query";
import { postList } from "../../lib/apis";
import Form from "./Form";
import Table from "./Table";

export interface IPostList {
  공고번호: string;
  분류: string;
  공고명: string;
  공고기관: string;
  수요기관: string;
  계약방법: string;
  입력일시: string;
  입찰마감일시: string;
  마감여부: string;
}

const List = () => {
  const [list, setList] = useState<IPostList[]>();
  const { mutate, isLoading } = useMutation(postList, {
    onSuccess: (data) => {
      setList(data);
    },
  });
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { from, to, bidNo, areaCode } = event.currentTarget;
    const dataForm = {
      from: from.value,
      to: to.value,
      bidCode: bidNo.value,
      areaCode: areaCode.value,
    };
    mutate(dataForm);
  };
  return (
    <>
      <Form submitFn={handleSubmit} />
      <Table data={list} loading={isLoading} />
    </>
  );
};
export default List;
