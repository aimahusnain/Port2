import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="mt-14 w-full flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-white">
        Featured Posts
      </h2>

      <BlogLayoutThree textcolour="text-light" blog={sortedBlogs[1]} />
      <BlogLayoutThree textcolour="text-light" blog={sortedBlogs[2]} />
      <BlogLayoutThree textcolour="text-light" blog={sortedBlogs[3]} />
    </section>
  );
};

export default FeaturedPosts;
