import { allBlogs } from "@/.contentlayer/generated";
import { useContext } from "react";
import { AlexioContext } from "../Context";
import FeaturedPosts from "./(blog)/Home/FeaturedPosts";
import HomeCoverSection from "./(blog)/Home/HomeCoverSection";
import RecentPosts from "./(blog)/Home/RecentPosts";
import ImageCarousel from './compo/ImageCarousel';

const images = [
  'https://placekitten.com/800/600',
  'https://placekitten.com/800/600',
  'https://placekitten.com/800/600',
];

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
        <div className="flex sm:flex-row flex-col !mx-0 h-full">
          <div className="p-0 py-3 px-5 overflow-hidden lg:flex flex-col items-start justify-start hidden sm:hidden lg:block sm:visible md:w-[50%] w-full bg-boo-700">
            <HomeCoverSection blogs={allBlogs} />
            <FeaturedPosts blogs={allBlogs} />
          </div>

          <div className="page-scroll">
            <RecentPosts textcolour="text-light dark:text-dark" blogs={allBlogs} />
          
          
          



          
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
