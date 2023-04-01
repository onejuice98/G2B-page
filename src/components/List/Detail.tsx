import { DetailType } from "./Table";

interface DetailProps {
  data: DetailType[];
  loading: boolean;
}
const Detail = ({ data, loading }: DetailProps) => {
  return (
    <>
      {!loading && data.length > 0 && (
        <div className="w-full p-4 bg-white rounded-md shadow-md">
          <div className="text-gray-500">
            <span> 기초금액 : {data[0].기초금액} 원 </span>
          </div>
          <table className="w-full table-fixed border">
            <thead className="border-b-2 text-gray-600">
              <tr className="border">
                <th>업체명</th>
                <th>대표자명</th>
                <th>입찰금액(원)</th>
                <th>투찰률(%)</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data.map((value, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 && `bg-gray-200`
                  } text-gray-600 p-1`}
                >
                  <td className="hover:text-green-500">{value.업체명}</td>
                  <td className="hover:text-green-500">{value.대표자명}</td>
                  <td className="hover:text-green-500">
                    {value["입찰금액(원)"]}
                  </td>
                  <td className="hover:text-green-500">{value["투찰률(%)"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default Detail;
