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

  return data.data();
};
