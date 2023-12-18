import { allBlogs } from "@/.contentlayer/generated";
import { useContext } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { AlexioContext } from "../Context";
import RecentPosts from "./(blog)/Home/RecentPosts";
import Carousel from "./Carousel";
import { Separator } from "./ui/separator";
import Footer from "./(blog)/Footer";


const Blog = () => {
  const activePageClass = (page) => (page === nav ? "" : "page--inactive");
  const { changeNav, nav } = useContext(AlexioContext);

  return (
    <div
      className={`page bg-darkness dark:bg-light ${activePageClass("blog")}`}
      id={"blog"}
      // onClick={() => changeNav("home", false)}
    >
      <div className="p-0 page-scroll">
        <div className="flex flex-col !mx-0 h-full">
          <div className="text-light px-16 text-center justify-center items-center py-20 bg-boo-700">
            <div className="flex gap-5 flex-col">
              <h4 className="text-5xl font-bold tracking-wider capitalize">
                The WebKin Solutions Blog
              </h4>
              <p>Unlock the Power of Next.js Websites and SEO Strategies</p>
            </div>
            <Separator className="my-6 mt-11" />
            <div className="flex mx-5 justify-between gap-5 items-start text-left">
              {/* <div className="flex sm:flex-row flex-col gap-6">
                <div className="w-full sm:w-1/2">
                  <FeaturedPost blogs={allBlogs} index={1} />
                </div>
                <div className="w-full sm:w-1/2">
                  <FeaturedPost blogs={allBlogs} index={2} />
                </div>
              </div> */}

              <div className="w-3/4 m-auto">
                <div className="mt-20">
                <Carousel blogs={allBlogs} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-6">
            <RecentPosts
              height="lg:h-[230px] h-full"
              width="lg:w-[330px] h-full"
              textcolour="text-boo-200 dark:text-dark"
              blogs={allBlogs}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Blog;
