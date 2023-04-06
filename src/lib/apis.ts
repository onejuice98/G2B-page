import axios from "axios";

interface PostListType {
  from?: string;
  to?: string;
  bidCode?: string;
  areaCode?: string;
}

export const postList = async ({
  from,
  to,
  bidCode,
  areaCode,
}: PostListType) => {
  const { data } = await axios.post(`https://g2b-bot.herokuapp.com/api/posts`, {
    from: from,
    to: to,
    bidCode: bidCode,
    areaCode,
  });
  return data;
};

export const getList = async () => {
  const { data } = await axios.get(`https://g2b-bot.herokuapp.com/api/posts`);

  return data;
};

export const getDetail = async (bidNo: string) => {
  const { data } = await axios.get(
    `https://g2b-bot.herokuapp.com/api/post/result?bidNo=${bidNo}`
  );

  return data;
};

export const postChatGpt = async (message: string) => {
  const { data } = await axios.post(`https://g2b-bot.herokuapp.com/api/chat`, {
    message,
  });
  return data;
};

export type TotalType = {
  rank: number;
  업체명: string;
  대표자명: string;
  "입찰금액(원)": string;
  "투찰률(%)": string;
  기초금액: string;
};

export const getTotal = async (ceo: string) => {
  const { data } = await axios.get(
    `https://g2b-bot.herokuapp.com/api/post/result/detail?ceo=${ceo}`
  );

  return data;
};
