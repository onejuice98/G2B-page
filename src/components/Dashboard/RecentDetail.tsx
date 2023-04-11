import { RecentDetailProps } from "../../types/dashboard";

const RecentDetail = ({ detail }: RecentDetailProps) => {
  const rank = detail ? detail.rank : "Loading...";
  const rankFormat =
    rank === 1 ? "st" : rank === 2 ? "nd" : rank === 3 ? "rd" : "th";
  return (
    <div className="flex flex-col justify-between bg-fuchsia-600 rounded-lg shadow-md text-white p-4">
      <div className="text-lg font-bold">
        <span>
          {rank}
          {rankFormat}
        </span>
        <span className="ml-2">{detail ? detail.업체명 : "Loading..."}</span>
      </div>

      <div className="flex justify-between text-gray-200">
        <span>₩ {detail ? detail["입찰금액(원)"] : "Loading..."}</span>

        <span className="ml-4">
          투찰률 : {detail ? detail["투찰률(%)"] : "Loading"}%
        </span>
      </div>
    </div>
  );
};
export default RecentDetail;
