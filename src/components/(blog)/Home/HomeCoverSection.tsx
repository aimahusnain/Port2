import { sortBlogs } from "@/src/utils";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <BlogLayoutThree textcolour='text-light dark:text-dark' blog={blog} />
  );
};

export default HomeCoverSection;
