import { useEffect, useState } from "react";
import { getRecentPost } from "../../lib/apis";
import { RightArrowSVG } from "../common/svgs";
import { IPostList } from "../List/List";

const Recent = () => {
  const [post, setPost] = useState<IPostList>();
  useEffect(() => {
    const recentPostFetch = async () => {
      const data = await getRecentPost();
      setPost(data);
    };
    recentPostFetch();
  }, []);

  return (
    <div className="flex justify-between bg-lime-600 rounded-lg shadow-md p-4 text-white">
      <div className="flex flex-col justify-between w-[90%]">
        <span className="font-bold">{post ? post.공고명 : "Loading..."}</span>
        <hr className="border-gray-300" />
        <div className="flex text-sm text-gray-200">
          <span>마감일시 : {post ? post.입찰마감일시 : "Loading..."}</span>
          <span className="font-bold ml-2">
            상태 : {post ? post.마감여부 : "Loading..."}
          </span>
        </div>
      </div>
      <a
        href={`https://www.g2b.go.kr:8081/ep/invitation/publish/bidInfoDtl.do?bidno=${post?.공고번호.slice(
          0,
          11
        )}&bidseq=00&releaseYn=Y&taskClCd=3`}
        target="_blank"
      >
        <RightArrowSVG w={30} h={30} />
      </a>
    </div>
  );
};
export default Recent;
