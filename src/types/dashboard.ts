interface IMessage {
  text: string;
  user: boolean;
}

interface IBidDetails {
  rank: number;
  업체명: string;
  대표자명: string;
  "입찰금액(원)": string;
  "투찰률(%)": string;
  기초금액: string;
}

interface RecentDetailProps {
  detail?: IBidDetails;
}

interface TotalProps {
  mode: "EARN" | "WIN";
  total?: IBidDetails[];
}

export type { IMessage, IBidDetails, RecentDetailProps, TotalProps };
