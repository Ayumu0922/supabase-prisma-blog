import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { BBSData } from "@/app/types/types";

interface BBSDataProps {
  bbsData: BBSData;
}

const BBSCard = ({ bbsData }: BBSDataProps) => {
  const { id, title, content, createdAt, username } = bbsData;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link
          href={`/bbs-posts/${id}`}
          className=" text-orange-500 font-bold hover:text-orange-300"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
