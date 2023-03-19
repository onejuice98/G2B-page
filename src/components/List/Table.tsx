import { useEffect, useState } from "react";
import { LoadingSVG } from "../common/svgs";
import { IPostList } from "./List";

interface TableProps {
  data: IPostList[];
  loading: boolean;
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

const Table = ({ data, loading }: TableProps) => {
  const [page, setPage] = useState<number>(1);

  /* 재검색 후 Pagination 1 페이지로 가게 하기 위한 Data dependency 연결 */
  useEffect(() => {
    setPage(1);
  }, [data]);

  return (
    <>
      {loading && (
        <div className="flex flex-col justify-center items-center bg-gray-500/30 absolute top-0 left-0 w-screen h-screen gap-4">
          <LoadingSVG w={48} h={48} />
          <span className="font-bold text-lg text-gray-500 animate-bounce">
            잠시만 기달려주세요! 기간을 길게하면 오래걸려요
          </span>
        </div>
      )}
      <div className="flex flex-col justify-between w-full text-gray-500 text-base gap-2 p-2 bg-white rounded-md shadow-md">
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
            {data !== undefined &&
              data
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
          {data !== undefined &&
            Array(Math.ceil(data.length / PAGINATION_SHOW_DATAS))
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
      </div>
    </>
  );
};
export default Table;
