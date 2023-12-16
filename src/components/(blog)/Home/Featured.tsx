import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const FeaturedPosts = ({ blogs, index }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (

      <BlogLayoutThree
        titlesize='text-3xl'
        textcolour="text-light"
        blog={sortedBlogs[index]}
      />
  );
};

export default FeaturedPosts;
