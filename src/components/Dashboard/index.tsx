import Chat from "./Chat";

const Dashboard = () => {
  return (
    <div className="w-full grid grid-cols-[2fr_1fr] gap-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="rounded-md bg-gray-300 shadow-md h-52">총 수익</div>
        <div className="rounded-md bg-gray-300 shadow-md h-52">
          최근 참여한 입찰
        </div>
      </div>
      <div className="grid grid-rows-2 gap-6">
        <div className="rounded-md bg-gray-300 shadow-md">최근 입찰</div>
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
