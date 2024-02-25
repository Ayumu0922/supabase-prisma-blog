import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className=" divide-y border-gray-200 dark:border-b-gray-800 border-b">
      <div className=" px-4 py-3 md:py-6 lg:px-6">
        <div className=" flex items-center space-y-2 md:space-y-4 md:space-x-6">
          <Link href="/" className=" text-2xl font-bold tracking-tighter mr-4">
            Blog
          </Link>
          <nav className=" space-x-6">
            <Link
              href="/"
              className=" font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              className=" font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              About
            </Link>
            <Link
              href="/bbs-posts/create"
              className=" font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              Create Post
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
