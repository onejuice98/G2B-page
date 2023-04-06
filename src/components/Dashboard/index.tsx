import Chat from "./Chat";
import Recent from "./Recent";
import Total from "./Total";

const Dashboard = () => {
  return (
    <div className="w-full grid grid-cols-[2fr_1fr] gap-6">
      <div className="grid grid-cols-2 gap-6">
        <Total mode="EARN" />
        <Total mode="WIN" />
      </div>
      <div className="grid grid-rows-2 gap-6">
        <Recent />
        <div className="rounded-md bg-gray-300 shadow-md">승률</div>
      </div>
      <div className="rounded-md bg-gray-300 shadow-md min-h-[620px]">
        당신의 차트
      </div>
      <Chat />
    </div>
  );
};
export default Dashboard;
