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
  const { data } = await axios.post("/najangbot/api/posts", {
    from: from,
    to: to,
    bidCode: bidCode,
    areaCode,
  });
  return data;
};

export const getList = async () => {
  const { data } = await axios.get(`/najangbot/api/posts`);

  return data;
};
