import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import Input from "./Input";
import Select from "./Select";
import Table from "./Table";

const BIDNO_OPTIONS = ["선택", "조경식재"];
const BIDNO_VALUES = ["0000", "4993"];
const AREA_OPTIONS = ["선택", "강원", "강원 횡성"];
const AREA_VALUES = ["000000", "42", "42730"];

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

interface PostListType {
  from: string;
  to: string;
  bidCode: string;
  areaCode: string;
}
const posts = async ({ from, to, bidCode, areaCode }: PostListType) => {
  const { data } = await axios.post("/api/posts", {
    from: from,
    to: to,
    bidCode: bidCode,
    areaCode,
  });
  return data;
};

const List = () => {
  const [list, setList] = useState<IPostList[]>();
  const { mutate, isLoading } = useMutation(posts, {
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
      <form
        className="flex flex-col h-fit text-gray-500 text-sm gap-2 p-4 bg-white rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <Input name="from" label="시작 (연도월일, 예시 : 20230301)" />
        <Input name="to" label="종료 (연도월일, 예시 : 20230301)" />
        <Select
          name="bidNo"
          label="업종"
          options={BIDNO_OPTIONS}
          values={BIDNO_VALUES}
        />
        <Select
          name="areaCode"
          label="지역"
          options={AREA_OPTIONS}
          values={AREA_VALUES}
        />

        <button
          type="submit"
          className="flex justify-center items-center bg-green-400 p-4 text-white rounded-md font-medium hover:bg-green-600"
        >
          검색
        </button>
      </form>
      <Table data={list} loading={isLoading} />
    </>
  );
};
export default List;
