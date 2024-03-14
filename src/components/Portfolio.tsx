"use client";

import Isotope from "isotope-layout";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AlexioContext } from "../Context";
import PortfolioBox from "./PortfolioBox";
import { PortCat, PortPosts } from "../utils/Static Data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FeaturedPortfolio from "./FeaturedPortfolio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

const Portfolio = () => {
  const isotope = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState("*");
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [selectedTitles, setSelectedTitles] = useState<string[]>([
    "Vapes Outlet",
    "Taha Ecommerce",
  ]);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    imagesLoaded(document.querySelector(".portfolio"), function (instance) {
      isotope.current = new Isotope(".portfolio", {
        itemSelector: ".portfolio-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".portfolio-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    });
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const toggleCategories = () => {
    setShowAllCategories((prev) => !prev);
  };

  const activeBtn = (value) => (value === filterKey ? "active" : "");
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = (name: any) => (name === nav ? "" : "page--inactive");

  // Decide which categories are initially shown and which are hidden
  const initiallyShownCategories = showAllCategories
    ? PortCat
    : PortCat.slice(0, 6);

  return (
    // extraClass="portfolio-section"
    //   name={"home"}
    //   title={"My Projects"}
    //   subTitle={"Latest Work"}
    //   leftImage="static/img/title-3.jpg"
    //   leftImageTitle={"Portfolio"}
    <div
      className={`page portfolio-section bg-darkness dark:bg-light ml-0 gap-0  ${activePageClass(
        "portfolio"
      )}`}
      id={"portfolio"}
      // onClick={() => changeNav(name, false)}
    >
      <div className="p-0">
        <div className="flex md:flex-row flex-col gap-1 !mx-0 h-full">
          <div className="p-0 sm:flex hidden md:pt-0 pt-16 pb-3 overflow-hidden items-center justify-center flex-col h-full md:max-w-[30%] md:h-screen w-full bg-boo-700">
            <h3 className="text-white text-3xl font-bold my-5">
              Featured Projects
            </h3>
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                align: "start",
              }}
              orientation="vertical"
              className="w-full px-6 list-none my-14"
            >
              <CarouselContent className="h-[430px] pt-10">
                {/* Remember to change the Key with title. */}
                {selectedTitles.map((title) => {
                  const project = PortPosts.find(
                    (post) => post.title === title
                  );
                  if (project) {
                    return (
                      <CarouselItem
                        key="Taha Ecommerce"
                        className="pt-1 md:basis-1/2"
                      >
                        <FeaturedPortfolio
                          black="text-white"
                          key={title}
                          category={project.category}
                          imageSrcs={project.images}
                          description={project.description}
                          webURL={project.webURL}
                          {...project}
                        />
                      </CarouselItem>
                    );
                  }
                  return null;
                })}

                {/* <FeaturedPortfolio
                    imageSrcs={[
                      "/static/img/Taha Ecommerce/Image1.png",
                      "/static/img/Taha Ecommerce/Image2.png",
                      "/static/img/Taha Ecommerce/Image3.png",
                      "/static/img/Taha Ecommerce/Image4.png",
                      "/static/img/Taha Ecommerce/Image5.png",
                    ]}
                    title="Taha Ecommerce"
                    category="ecommerce"
                    description="Need to by something?"
                    webURL="taha-commerce.vercel.app/"
                    black="text-white"
                  /> */}

                {/* Remember to change the Key with title. */}
                {/* <CarouselItem key="Alight Motion" className="pt-1 md:basis-1/2">
                  <FeaturedPortfolio
                    imageSrcs={[
                      "/static/img/Alight Motion/Image1.PNG",
                      "/static/img/Alight Motion/Image4.PNG",
                      "/static/img/Alight Motion/Image5.PNG",
                      "/static/img/Alight Motion/Image8.PNG",
                      "/static/img/Alight Motion/Image9.PNG",
                      "/static/img/Alight Motion/Image10.PNG",
                    ]}
                    title="Alight Motion"
                    category="apk"
                    description="This is the Micro Apk website"
                    webURL="alight-motion.vercel.app"
                    black="text-white"
                  />
                </CarouselItem> */}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="mb-7 col-xl-8">
            <div className="h-full flex flex-col justify-between">
              <div className="page-scroll">
                <div className="page-content">
                  <div className="section-titel">
                    <h6 className="theme-after text-white">Latest Work</h6>
                    <div className="st-title">
                      <h2 className="theme-after text-white dark:text-black">
                        My Projects
                      </h2>
                    </div>
                  </div>

                  <div className="">
                    <div>
                      <ul className="portfolio-filter flex flex-wrap">
                        <li
                          className={`${activeBtn("*")} theme-after`}
                          onClick={handleFilterKeyChange("*")}
                        >
                          All
                        </li>
                        {initiallyShownCategories.map((button) => (
                          <li
                            key={button.key}
                            className={`${activeBtn(button.key)} theme-after`}
                            onClick={handleFilterKeyChange(button.key)}
                            data-filter={`.${button.key}`}
                          >
                            {button.label}
                          </li>
                        ))}
                      </ul>

                      <button onClick={toggleCategories}>
                        {showAllCategories ? "See Less" : "See More"}
                      </button>
                    </div>
                    <ul className="portfolio flex w-full justify-between items-between flex-wrap">
                      {PortPosts.map((portfolioPost) => (
                        <PortfolioBox
                          key={portfolioPost.title}
                          imageSrcs={portfolioPost.images}
                          title={portfolioPost.title}
                          category={portfolioPost.category}
                          description={portfolioPost.description}
                          webURL={portfolioPost.webURL}
                          black="text-white"
                        />
                      ))}
                    </ul>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
