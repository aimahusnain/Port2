import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { useContext } from "react";
import Image from "next/image";
import { AlexioContext } from "../Context";
import HomeCoverSection from "./(blog)/Home/HomeCoverSection";
import FeaturedPosts from "./(blog)/Home/FeaturedPosts";
import RecentPosts from "./(blog)/Home/RecentPosts";
import { allBlogs } from "@/.contentlayer/generated";

const Blog = () => {
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = (name: any) => (name === nav ? "" : "page--inactive");

  return (
    <div
      className={`page about-section bg-darkness ml-0 gap-0  ${activePageClass(
        "blog"
      )}`}
      id="blog"
      onClick={() => changeNav("blog", false)}
    >
      <div className="p-0">
        <div className="flex sm:flex-row flex-col  !mx-0 h-full">
          <div className="p-0 py-3 px-5 overflow-hidden lg:flex flex-col items-between justify-between hidden sm:hidden lg:block sm:visible md:w-[50%] w-full bg-boo-700 gap-16">
            <HomeCoverSection blogs={allBlogs} />
            <FeaturedPosts blogs={allBlogs} />
          </div>

          <div className="page-scroll">
            
            <RecentPosts blogs={allBlogs} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
