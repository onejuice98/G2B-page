import React, { useState } from "react";
import { offsetRand, randCardValue, randSelect } from "../../lib/card";
import GrayText from "../common/GrayText";
import { CheckSVG } from "../common/svgs";

let cardValues = randCardValue();

type modeType = "self" | "auto";

const Example = () => {
  const [mode, setMode] = useState<modeType>("self");
  const [userPer, setUserPer] = useState<number>(0);
  const [clickCnt, setClickCnt] = useState<number>(0);
  const [selectedCard, setSelectedCard] = useState<number[]>([]);
  const [autoResultList, setAutoResultList] = useState<number[]>([]);
  const [emphasisCard, setEmphasisCard] = useState<number>(0);

  const cardClicked = (value: number, index: number) => {
    setClickCnt((prev) => prev + 1);
    setUserPer((prev) => prev + value);
    setSelectedCard([...selectedCard, index]);
  };

  const initialBtn = () => {
    setClickCnt(0);
    setUserPer(0);
    setSelectedCard([]);
    cardValues = randCardValue();
    setAutoResultList([]);
  };

  const deleteSelectedCard = (index: number) => {
    let copyed = selectedCard;
    setSelectedCard(copyed.filter((_, idx) => idx !== index));
    setClickCnt((prev) => prev - 1);
  };

  const autoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { cnt } = event.currentTarget;
    let results = [];
    for (let i = 0; i < cnt.value; i++) {
      let cardValues = randCardValue();
      let select = randSelect(4);
      let tempResult = 0;
      select.map((value) => (tempResult += cardValues[value]));
      results.push(tempResult / 4);
    }
    setEmphasisCard(Math.floor(offsetRand(0, cnt.value)));
    setAutoResultList(results);
    cnt.value = 0;
  };
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col w-full p-4 bg-white rounded-md shadow-md gap-2">
          <span className="w-full py-2 text-2xl border-b">모의기 설정</span>
          <div className="flex gap-2">
            <GrayText> 모드 : </GrayText>
            <label className="flex justify-center items-center gap-2">
              <input
                type="radio"
                name="mode"
                value={"self"}
                onChange={() => setMode("self")}
                checked={mode === "self"}
                className="h-5 w-5 border-2 cursor-pointer appearance-none border-gray-500 text-green-500 duration-500 checked:border-green-500 focus:ring-green-500"
              />
              <GrayText>직접하기</GrayText>
            </label>
            <label className="flex justify-center items-center gap-2">
              <input
                type="radio"
                name="mode"
                value={"auto"}
                onChange={() => setMode("auto")}
                checked={mode === "auto"}
                className="h-5 w-5 border-2 cursor-pointer appearance-none border-gray-500 text-green-500 duration-500 checked:border-green-500 focus:ring-green-500"
              />
              <GrayText>자동</GrayText>
            </label>
          </div>
          {mode === "auto" && (
            <form className="flex gap-2" onSubmit={autoSubmit}>
              <div className="flex items-center gap-2">
                <label className="text-gray-500 font-medium text-lg">
                  몇번 돌릴건가요?
                </label>
                <input
                  type="number"
                  name="cnt"
                  className="rounded-md border-green-600 focus:ring-0 w-24"
                />
              </div>

              <button
                type="submit"
                className="bg-green-400 rounded-md p-2 font-medium text-white text-xl"
              >
                실행
              </button>
            </form>
          )}
        </div>
      </div>

      {mode === "self" && (
        <>
          {" "}
          <div className="flex flex-wrap gap-4">
            {cardValues.map((value, index) => (
              <button
                key={index}
                onClick={() => cardClicked(value, index)}
                value={value}
                disabled={selectedCard.includes(index) || clickCnt > 3}
                className="flex items-center justify-center w-32 h-32 bg-white rounded-md shadow-md font-medium text-2xl hover:bg-emerald-100 hover:scale-110 duration-500"
              >
                {selectedCard.includes(index) && (
                  <div className="absolute w-32 h-32 rounded-md">
                    <CheckSVG w={32} h={32} />
                  </div>
                )}
                {index + 1}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 whitespace-nowrap">
            <div className="flex flex-col justify-between bg-white rounded-md shadow-md p-2 gap-2">
              <div className="flex gap-2">
                <GrayText>선택된 카드 :</GrayText>

                {selectedCard.map((num, idx) => (
                  <span
                    key={idx}
                    onClick={() => deleteSelectedCard(idx)}
                    className="flex justify-center items-center font-medium w-8 bg-green-300 rounded-md hover:bg-green-700"
                  >
                    {num + 1}
                  </span>
                ))}
              </div>
              <span className="text-gray-400 text-sm">
                * 초록 숫자를 눌러 선택한 카드를 제거할 수 있습니다.
              </span>
            </div>
            <div className="flex items-center bg-white rounded-md shadow-md p-4 gap-2">
              <GrayText>결과 :</GrayText>
              <span className="font-medium text-lg">
                {clickCnt === 4 && userPer / 4}
              </span>
            </div>
          </div>
        </>
      )}
      {mode === "auto" && (
        <div className="flex flex-wrap bg-white rounded-md shadow-md p-4 gap-2">
          {autoResultList.sort().map((value, index) => (
            <span
              key={index}
              className={`text-gray-400 border rounded-md p-2 ${
                emphasisCard === index && "animate-pulse border-green-500"
              }`}
            >
              {value.toFixed(3)}
            </span>
          ))}
        </div>
      )}
      <button
        className="whitespace-nowrap text-lg font-medium text-white p-4 bg-red-500 rounded-md hover:bg-red-700"
        onClick={initialBtn}
      >
        초기화
      </button>
    </div>
  );
};
export default Example;
