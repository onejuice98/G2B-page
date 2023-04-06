import { useMutation, useQuery, useQueryClient } from "react-query";
import { getList, postList } from "../../lib/apis";
import Form from "./Form";
import Notice from "./Notice";
import Table from "./Table";

export type IPostList = {
  공고번호: string;
  분류: string;
  공고명: string;
  공고기관: string;
  수요기관: string;
  계약방법: string;
  입력일시: string;
  입찰마감일시: string;
  마감여부: string;
};

const List = () => {
  const queryClient = useQueryClient();
  const { isLoading, data: lists } = useQuery<IPostList[]>("lists", getList);
  const { mutate, isLoading: mutateLoading } = useMutation(postList, {
    onSuccess: () => {
      queryClient.invalidateQueries("lists");
    },
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-col gap-2">
          <Form submitFn={handleSubmit} />
          {/* <Notice /> */}
        </div>

        {lists !== undefined && (
          <Table data={lists} loading={isLoading || mutateLoading} />
        )}
      </div>
    </>
  );
};
export default List;
