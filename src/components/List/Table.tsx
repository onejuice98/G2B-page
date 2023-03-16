import { useEffect, useState } from "react";
import { IPostList } from "./List";

interface TableProps {
  data: IPostList[] | undefined;
}

const TABLE_HEADER = [
  "공고번호",
  "분류",
  "공고명",
  "수요기관",
  "입력일시(마감일)",
  "마감여부",
];

const PAGINATION_SHOW_DATAS = 8;

const Table = ({ data }: TableProps) => {
  const [page, setPage] = useState<number>(1);

  /* 재검색 후 Pagination 1 페이지로 가게 하기 위한 Data dependency 연결 */
  useEffect(() => {
    setPage(1);
  }, [data]);

  return (
    <div className="flex flex-col justify-between w-full text-gray-500 text-base gap-2 p-2 bg-white rounded-md shadow-md">
      {data === undefined ? (
        "is Loading..."
      ) : (
        <>
          <table className="table-auto">
            <thead className="border-b-2">
              <tr>
                {TABLE_HEADER.map((value, index) => (
                  <th key={index} className="whitespace-nowrap pb-2">
                    {value}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center">
              {data
                .slice(
                  (page - 1) * PAGINATION_SHOW_DATAS,
                  page * PAGINATION_SHOW_DATAS
                )
                .map((value, index) => (
                  <tr key={index} className="border-b">
                    <td className="whitespace-nowrap py-6">{value.공고번호}</td>
                    <td className="whitespace-nowrap ">{value.분류}</td>
                    <td className="">{value.공고명}</td>
                    <td className="">{value.수요기관}</td>
                    <td className="flex flex-col">
                      {value.입력일시.slice(0, 16)}
                      <span className="whitespace-nowrap text-blue-300">
                        {value.입찰마감일시}
                      </span>
                    </td>
                    <td className="whitespace-nowrap ">{value.마감여부}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex gap-4 font-medium text-lg">
            {Array(Math.ceil(data.length / PAGINATION_SHOW_DATAS))
              .fill("")
              .map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={`${index + 1 === page && "text-green-600"}`}
                >
                  {index + 1}
                </button>
              ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Table;
