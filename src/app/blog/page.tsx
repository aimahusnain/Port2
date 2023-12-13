"use client";

import { allBlogs } from "contentlayer/generated";
import FeaturedPosts from "../../components/(blog)/Home/FeaturedPosts";
import HomeCoverSection from "../../components/(blog)/Home/HomeCoverSection";
import RecentPosts from "../../components/(blog)/Home/RecentPosts";
import { useContext } from "react";
import { AlexioContext } from "@/src/Context";

export default function Home() {
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = (name: any) => (name === nav ? "" : "page--inactive");
  
  return (
    <div
    // <HomeCoverSection blogs={allBlogs} />
    // <FeaturedPosts blogs={allBlogs} />
    // <RecentPosts blogs={allBlogs} />
      className={`page blog page bg-darkness ml-0 gap-0  ${activePageClass(
        "blog"
      )}`}
      id='blog'
      // onClick={() => changeNav(name, false)}
    >
      <div className="p-0">
        <div className="flex sm:flex-row flex-col gap-10 !mx-0 h-full">
          <div className="p-0 overflow-hidden sm:items-end items-start sm:justify-end justify-end flex flex-col sm:h-screen h-[500px] md:w-[50%] w-full bg-boo-700">
            <img
              className="m-0 p-0 mt-10 object-cover object-top w-full h-full"
              loading="lazy"
              src="/static/img/H1.png"
              alt=""
            />
          </div>

          <div className="h-full mt-8 -m-6 mx-3 flex flex-col justify-between items-start">
            <div className="page-scroll">
        Hello
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
