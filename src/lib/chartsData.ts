import { TotalType } from "./apis";

export const chartsData = (data?: TotalType[]) => {
  const result: {
    id: string | number;
    color: string;
    data: { x: number; y: number; rank: number }[];
  }[] = [];
  const name = data ? data[0].대표자명 : "unknown";
  const color = "green";
  const temp: { x: number; y: number; rank: number }[] = []; // x, y 데이터를 저장할 리스트
  data?.forEach((value, index) => {
    const basePrice = Number(value["기초금액"].replace(/,/g, "")); // 기초금액 추출
    const bidPrice = Number(value["입찰금액(원)"].replace(/,/g, "")); // 입찰금액 추출
    const percent = (bidPrice / (basePrice * (87.745 / 100)) - 1) * 100; // percent 계산

    temp.push({
      x: index,
      y: percent,
      rank: 1,
    });
  });
  result.push({
    id: name,
    color: color,
    data: temp,
  });
  return result;
};
