import { sortBlogs } from "@/src/utils";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <BlogLayoutThree blog={blog} />
  );
};

export default HomeCoverSection;
