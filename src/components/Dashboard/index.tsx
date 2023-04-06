import { useEffect, useState } from "react";
import { getTotal, TotalType } from "../../lib/apis";
import Chat from "./Chat";
import Recent from "./Recent";
import RecentDetail from "./RecentDetail";
import Total from "./Total";

const Dashboard = () => {
  const [total, setTotal] = useState<TotalType[]>();

  useEffect(() => {
    const fetchTotal = async () => {
      const data = await getTotal("이복균");
      setTotal(data[0]);
    };
    fetchTotal();
  }, []);
  return (
    <div className="w-full grid grid-cols-[2fr_1fr] gap-6">
      <div className="grid grid-cols-2 gap-6">
        <Total mode="EARN" total={total} />
        <Total mode="WIN" total={total} />
      </div>
      <div className="grid grid-rows-2 gap-6">
        <Recent />
        <RecentDetail detail={total ? total[0] : undefined} />
      </div>
      <div className="rounded-md bg-gray-300 shadow-md min-h-[620px]">
        당신의 차트
      </div>
      <Chat />
    </div>
  );
};
export default Dashboard;
