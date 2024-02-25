import { BBSData } from "@/app/types/types";
import Link from "next/link";
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
  const { title, content, username } = bbsDetailData;

  return (
    <div className=" mx-auto max-w-4xl p-4">
      <div className=" mb-8">
        <h1 className=" text-2xl font-bold">{title}</h1>
        <p className=" text-gray-700">{username}</p>
      </div>

      <div className=" mb-8">
        <p className=" text-gray-900">{content}</p>
      </div>

      <Link href={"/"} className=" text-orange-500">
        Back
      </Link>
    </div>
  );
};

export default page;
