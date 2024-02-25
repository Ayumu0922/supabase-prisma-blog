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

const BBSCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea atque
        nulla, eum dignissimos molestiae illum, beatae corrupti deleniti magnam
        dolor necessitatibus esse reprehenderit earum magni ullam ipsa tempora
        maxime?
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link
          href={"/bbs-posts/1"}
          className=" text-orange-500 font-bold hover:text-orange-300"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BBSCard;
