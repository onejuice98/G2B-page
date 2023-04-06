import { ResponsiveLine } from "@nivo/line";
import { TotalType } from "../../lib/apis";
import { chartsData } from "../../lib/chartsData";

interface LineChartsProps {
  total?: TotalType[];
}
const LineCharts = ({ total }: LineChartsProps) => {
  const data = chartsData(total);

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: 28,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "%",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={{ scheme: "category10" }}
      enableGridX={false}
      lineWidth={4}
      enablePoints={true}
      pointSize={8}
      pointColor="green"
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[]}
    ></ResponsiveLine>
  );
};

export default LineCharts;
