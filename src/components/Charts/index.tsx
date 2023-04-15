import { useEffect, useState } from "react";
import { getTotal, IBidDetails } from "../../lib/apis";
import LineCharts from "./LineCharts";

const Charts = () => {
  const [total, setTotal] = useState<IBidDetails[]>();

  useEffect(() => {
    const fetchTotal = async () => {
      const data = await getTotal("이복균");
      setTotal(data[0]);
    };
    fetchTotal();
  }, []);

  console.log(total);
  return (
    <div className="w-full grid grid-cols-2 gap-6">
      <div className="rounded-lg bg-gray-200 shadow-md min-h-[620px]">
        <LineCharts total={total} />
      </div>
      <div className="grid grid-rows-2 gap-10">
        <div className="flex p-4 gap-2 flex-col rounded-lg shadow-md bg-white">
          <span className="font-medium text-lg border-b">안내사항</span>
          <span className="text-sm bg-green-200 w-fit rounded-sm">
            차트를 고도화 하고 더 잘 만들기 위해서 노력하고 있습니다..
          </span>
          <span className="text-sm bg-green-200 w-fit rounded-sm">
            기업별 차트, 날짜 설정, 금액추이 등등 여러 기능이 추가될겁니다!
          </span>
          <span className="ml-2 text-xs">👾 계속 업데이트 중! 👾</span>
          <span className="text-sm bg-green-200 w-fit rounded-sm">
            핸드폰보다 컴퓨터가 보기 좋아요!
          </span>
          <span className="ml-2 text-xs">
            👾 핸드폰화면도 업데이트 예정! 👾
          </span>
          <span className="text-sm bg-green-200 w-fit rounded-sm">
            되도록 크롬브라우저를 활용 필요!
          </span>
          <span className="ml-2 text-xs">
            👾 안되는 기능이 생길 수 도 있어요 👾
          </span>
          <span className="text-sm bg-green-200 w-fit rounded-sm">
            Contact / 연락처
          </span>
          <span className="ml-2 text-xs">gmail : ojuice9890@gmail.com</span>
        </div>
      </div>
    </div>
  );
};
export default Charts;
