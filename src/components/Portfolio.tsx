"use client";

import Isotope from "isotope-layout";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AlexioContext } from "../Context";
import PortfolioBox from "./PortfolioBox";
import { PortCat, PortPosts } from "../utils/Static Data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FeaturedPortfolio from "./FeaturedPortfolio";

const Portfolio = () => {
  const isotope = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState("*");
  const [showAllCategories, setShowAllCategories] = useState(false);

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
          <div className="p-0 md:pt-0 pt-16 pb-3 overflow-hidden items-center justify-center flex flex-col h-full md:max-w-[30%] md:h-screen w-full bg-boo-700">
            <h3 className="text-white text-3xl font-bold my-5">
              Featured Projects
            </h3>
            <Carousel
              className="w-fit px-7 !shadow-none"
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
            >
              <FeaturedPortfolio
                imageSrcs={[
                  "/static/img/Emirates Visa/Emirates Visa1.png",
                  "/static/img/Emirates Visa/Emirates Visa2.png",
                  "/static/img/Emirates Visa/Emirates Visa3.png",
                  "/static/img/Emirates Visa/Emirates Visa4.png",
                  "/static/img/Emirates Visa/Emirates Visa5.png",
                ]}
                title="Emirates Visa"
                category="cloning"
                description="Cloned by emiratesvisa.com"
                webURL="emirates-visa.vercel.app"
                black="text-white"
              />
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
