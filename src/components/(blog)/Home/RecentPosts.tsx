import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs, textcolour }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mb-10 md:mt-32 px-5 sm:px-10 md:px-24 sx:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-light">
          Recent Posts
        </h2>
        <Link
          href="/blog/categories/all"
          className=" capitalize text-light dark:text-black inline-block font-medium underline underline-offset-2 text-base md:text-lg"
        >
          View all categories
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 grid-rows-2 gap-16 mt-16">
        {sortedBlogs.slice(4, 10).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutThree textcolour={textcolour} blog={blog} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
