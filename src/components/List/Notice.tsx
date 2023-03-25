const Notice = () => {
  return (
    <div className="flex flex-col w-full bg-white rounded-md shadow-md p-4 gap-2">
      <span className="font-medium text-lg border-b">안내사항</span>
      <span className="text-sm bg-green-200 w-fit rounded-sm">
        날짜 입력은 형식을 지켜주세요!
      </span>
      <span className="ml-2 text-xs">(2023년 03월 01일 👉 20230301)</span>
      <span className="text-sm bg-green-200 w-fit rounded-sm">
        현재는 "목록", "모의"만 작동합니다.
      </span>
      <span className="ml-2 text-xs">👾 계속 업데이트 중! 👾</span>
      <span className="text-sm bg-green-200 w-fit rounded-sm">
        핸드폰보다 컴퓨터가 보기 좋아요!
      </span>
      <span className="ml-2 text-xs">👾 핸드폰화면도 업데이트 예정! 👾</span>
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
  );
};
export default Notice;
