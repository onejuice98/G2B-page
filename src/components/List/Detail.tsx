import { DetailType } from "./Table";

interface DetailProps {
  data: DetailType[];
  loading: boolean;
}
const Detail = ({ data, loading }: DetailProps) => {
  return (
    <>
      {!loading && (
        <div className="w-full p-4 bg-white rounded-md shadow-md">
          <table>
            <thead>
              <tr>
                <th>업체명</th>
                <th>대표자명</th>
                <th>입찰금액(원)</th>
                <th>투찰률(%)</th>
                <th>기초금액</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, index) => (
                <tr key={index}>
                  <td> {value.업체명}</td>
                  <td> {value.대표자명}</td>
                  <td> {value["입찰금액(원)"]}</td>
                  <td> {value["투찰률(%)"]}</td>
                  <td> {value.기초금액}</td>
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
