import { BBSData } from "@/app/types/types";
import React from "react";

async function getDetailBBSData(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/${id}`,
    {
      cache: "no-store",
    }
  );
  const bbsDetailData: BBSData = await response.json();
  return bbsDetailData;
}

// 以下のbbsIdは作成したディレクトリ名と合わせる
const page = async ({ params }: { params: { bbsId: number } }) => {
  const bbsDetailData = await getDetailBBSData(params.bbsId);
  console.log(bbsDetailData);

  return <div>hello</div>;
};

export default page;
