import { useEffect, useState } from "react";
import { getTotal } from "../../lib/apis";
import { IBidDetails } from "../../types/dashboard";
import LineCharts from "../Charts/LineCharts";
import Grid from "../common/Grid";
import Chat from "./Chat";
import Recent from "./Recent";
import RecentDetail from "./RecentDetail";
import Total from "./Total";

const Dashboard = () => {
  const [total, setTotal] = useState<IBidDetails[]>();

  useEffect(() => {
    const fetchTotal = async () => {
      const data = await getTotal("이복균");
      setTotal(data[0]);
    };
    fetchTotal();
  }, []);
  return (
    <Grid>
      <div className="grid grid-cols-2 gap-6">
        <Total mode="EARN" total={total} />
        <Total mode="WIN" total={total} />
      </div>
      <div className="grid grid-rows-2 gap-6">
        <Recent />
        <RecentDetail detail={total ? total[0] : undefined} />
      </div>
      <div className="rounded-lg bg-gray-200 shadow-md min-h-[620px]">
        <LineCharts total={total} />
      </div>
      <Chat />
    </Grid>
  );
};
export default Dashboard;
