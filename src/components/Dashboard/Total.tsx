import { TotalType } from "../../lib/apis";

interface TotalProps {
  mode: "EARN" | "WIN";
  total?: TotalType[];
}
const Total = ({ mode, total }: TotalProps) => {
  const bidParticipationCount = total?.length;
  const won = total?.filter((value) => value.rank === 1);
  const wonCount = won?.length;
  const earn = won
    ?.map((first) => parseInt(first["입찰금액(원)"].replace(/,/g, "")))
    .reduce((a, b) => a + b, 0);
  const formattedEarn = earn?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const bgColor = mode === "EARN" ? "bg-blue-500" : "bg-green-500";
  const circleColor1 = mode === "EARN" ? "bg-blue-900" : "bg-green-900";
  const circleColor2 = mode === "EARN" ? "bg-blue-700" : "bg-green-700";

  return (
    <div
      className={`flex flex-col justify-end relative h-56 p-6 rounded-lg shadow-md ${bgColor} overflow-hidden`}
    >
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
        <div className={`h-64 w-64 ${circleColor1} rounded-full`} />
        <div
          className={`h-52 w-52 ${circleColor2} rounded-full -mt-64 -ml-16`}
        />
      </div>
      <div className="flex flex-col justify-end gap-4 z-10">
        {mode === "EARN" ? (
          <>
            <span className="text-2xl font-bold text-white">
              ₩ {formattedEarn ? formattedEarn : "Loading..."}
            </span>
            <span className="text-xl font-bold text-gray-200">
              💲 Total Earn
            </span>
          </>
        ) : (
          <>
            <span className="text-4xl font-bold text-white">
              {wonCount ? wonCount : "Loading..."}
              <span className="text-xl text-gray-200 opacity-50 ml-4">
                / {bidParticipationCount ? bidParticipationCount : "Loading..."}
              </span>
            </span>
            <span className="text-xl font-bold text-gray-200">🏆 Win Rate</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Total;
