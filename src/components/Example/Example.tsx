import React, { useState } from "react";
import { randCardValue } from "../../lib/card";
import GrayText from "../common/GrayText";
import { CheckSVG } from "../common/svgs";

let cardValues = randCardValue();

const Example = () => {
  const [userPer, setUserPer] = useState<number>(0);
  const [clickCnt, setClickCnt] = useState<number>(0);
  const [selectedCard, setSelectedCard] = useState<number[]>([]);

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
  };

  const deleteSelectedCard = (index: number) => {
    let copyed = selectedCard;
    setSelectedCard(copyed.filter((_, idx) => idx !== index));
    setClickCnt((prev) => prev - 1);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        <div className="flex flex-col w-full p-4 bg-white rounded-md shadow-md gap-2">
          <span className="w-full py-2 text-2xl border-b">모의기 설정</span>
          <div className="flex gap-2 opacity-0">
            <GrayText> 모드 : </GrayText>
            <label className="flex justify-center items-center gap-2">
              <input
                type="radio"
                name="mode"
                value={"self"}
                className="h-5 w-5 border-2 cursor-pointer appearance-none border-gray-500 text-green-500 duration-500 checked:border-green-500 focus:ring-green-500"
              />
              <GrayText>직접하기</GrayText>
            </label>

            <label className="flex justify-center items-center gap-2">
              <input
                type="radio"
                name="mode"
                value={"auto"}
                className="h-5 w-5 border-2 cursor-pointer appearance-none border-gray-500 text-green-500 duration-500 checked:border-green-500 focus:ring-green-500"
              />
              <GrayText>자동</GrayText>
            </label>
          </div>
        </div>
      </div>

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
