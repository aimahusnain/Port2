import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Featured Posts
      </h2>

      <BlogLayoutThree blog={sortedBlogs[1]} />
      <BlogLayoutThree blog={sortedBlogs[2]} />
      <BlogLayoutThree blog={sortedBlogs[3]} />
    </section>
  );
};

export default FeaturedPosts;
