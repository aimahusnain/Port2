import { allBlogs } from "@/.contentlayer/generated";
import { useContext } from "react";
import { AlexioContext } from "../Context";
import FeaturedPosts from "./(blog)/Home/FeaturedPosts";
import HomeCoverSection from "./(blog)/Home/HomeCoverSection";
import RecentPosts from "./(blog)/Home/RecentPosts";

const Blog = () => {
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = (name: any) => (name === nav ? "" : "page--inactive");

  return (
    <div
      className={`page about-section bg-darkness dark:bg-light ml-0 gap-0  ${activePageClass(
        "blog"
      )}`}
      id="blog"
      onClick={() => changeNav("blog", false)}
    >
      <div className="p-0">
        <div className="flex lg:flex-row flex-col !mx-0 h-full">
          <div className="pt-20 p-0 overflow-hidden lg:items-end items-start lg:justify-end justify-end flex flex-col lg:h-screen h-[450px] lg:w-[45%] w-full bg-boo-700">
            <HomeCoverSection blogs={allBlogs} />
            <FeaturedPosts blogs={allBlogs} />
          </div>

          <div className="page-scroll w-full">
            <RecentPosts
              height="lg:h-[230px] h-full"
              width="lg:w-[330px] h-full"
              textcolour="text-boo-200 dark:text-dark"
              blogs={allBlogs}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
