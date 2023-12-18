"use client";

import Isotope from "isotope-layout";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AlexioContext } from "../Context";
import PortfolioBox from "./PortfolioBox";

const Portfolio = () => {
  const isotope = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState("*");
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

  const activeBtn = (value) => (value === filterKey ? "active" : "");
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = (name: any) => (name === nav ? "" : "page--inactive");
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
          <div className="p-0 md:pt-0 md:pb-0 pt-28 pb-16 overflow-hidden items-center justify-center flex flex-col h-screen md:w-[50%] w-full bg-boo-700">
            <ul>
              <h3 className="text-white text-3xl font-bold mt-5">
                Featured Projects
              </h3>
              <PortfolioBox
                imageSrcs={[
                  "/static/img/portfolio-2.jpg",
                  "/static/img/portfolio-1.jpg",
                  "/static/img/portfolio-3.jpg",
                  "/static/img/portfolio-4.jpg",
                ]}
                title="Emirates Visa"
                category="cloning"
                description="Cloned by emiratesvisa.com"
                webURL="emirates-visa.vercel.app"
                black="text-white"
              />
              <PortfolioBox
                imageSrcs={[
                  "/static/img/portfolio-5.jpg",
                  "/static/img/portfolio-2.jpg",
                  "/static/img/portfolio-3.jpg",
                  "/static/img/portfolio-4.jpg",
                ]}
                title="Emirates Visa"
                category="cloning"
                description="Cloned by emiratesvisa.com"
                webURL="emirates-visa.vercel.app"
                black="text-white"
              />
            </ul>
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
                      <ul className="portfolio-filter m-10px-b">
                        <li
                          className={`${activeBtn("*")} theme-after`}
                          onClick={handleFilterKeyChange("*")}
                        >
                          All
                        </li>
                        <li
                          className={`${activeBtn("cloning")} theme-after`}
                          onClick={handleFilterKeyChange("cloning")}
                          data-filter=".cloning"
                        >
                          Websites Cloning
                        </li>
                        <li
                          className={`${activeBtn("business")} theme-after`}
                          onClick={handleFilterKeyChange("business")}
                          data-filter=".business"
                        >
                          Business Websites
                        </li>
                        <li
                          className={`${activeBtn("saas")} theme-after`}
                          onClick={handleFilterKeyChange("saas")}
                          data-filter=".saas"
                        >
                          SaaS Applications
                        </li>
                        <li
                          className={`${activeBtn("portfolio")} theme-after`}
                          onClick={handleFilterKeyChange("portfolio")}
                          data-filter=".portfolio"
                        >
                          Portfolio Websites
                        </li>
                        <li
                          className={`${activeBtn("ecommerce")} theme-after`}
                          onClick={handleFilterKeyChange("ecommerce")}
                          data-filter=".ecommerce"
                        >
                          Ecommerce Websites
                        </li>
                        <li
                          className={`${activeBtn("affiliate")} theme-after`}
                          onClick={handleFilterKeyChange("affiliate")}
                          data-filter=".affiliate"
                        >
                          Affiliate Websites
                        </li>
                        <li
                          className={`${activeBtn("blog")} theme-after`}
                          onClick={handleFilterKeyChange("blog")}
                          data-filter=".blog"
                        >
                          Blog Development
                        </li>
                      </ul>
                    </div>
                    <ul className="portfolio flex w-full justify-center flex-wrap">
                      <PortfolioBox
                        imageSrcs={[
                          "/static/img/portfolio-1.jpg",
                          "/static/img/portfolio-2.jpg",
                          "/static/img/portfolio-3.jpg",
                          "/static/img/portfolio-4.jpg",
                        ]}
                        title="Emirates Visa"
                        category="cloning"
                        description="Cloned by emiratesvisa.com"
                        webURL="emirates-visa.vercel.app"
                        black="dark:text-black"
                      />
                      <PortfolioBox
                        imageSrcs={[
                          "/static/img/portfolio-1.jpg",
                          "/static/img/portfolio-2.jpg",
                          "/static/img/portfolio-3.jpg",
                          "/static/img/portfolio-4.jpg",
                        ]}
                        title="Emirates Visa"
                        category="cloning"
                        description="Cloned by emiratesvisa.com"
                        webURL="emirates-visa.vercel.app"
                        black="dark:text-black"
                      />
                      <PortfolioBox
                        imageSrcs={[
                          "/static/img/portfolio-1.jpg",
                          "/static/img/portfolio-2.jpg",
                          "/static/img/portfolio-3.jpg",
                          "/static/img/portfolio-4.jpg",
                        ]}
                        title="Emirates Visa"
                        category="cloning"
                        description="Cloned by emiratesvisa.com"
                        webURL="emirates-visa.vercel.app"
                        black="dark:text-black"
                      />

                      <PortfolioBox
                        imageSrcs={[
                          "/static/img/portfolio-1.jpg",
                          "/static/img/portfolio-2.jpg",
                          "/static/img/portfolio-3.jpg",
                          "/static/img/portfolio-4.jpg",
                        ]}
                        title="Emirates Visa"
                        category="cloning"
                        description="Cloned by emiratesvisa.com"
                        webURL="emirates-visa.vercel.app"
                        black="dark:text-black"
                      />

                      <PortfolioBox
                        imageSrcs={[
                          "/static/img/portfolio-1.jpg",
                          "/static/img/portfolio-2.jpg",
                          "/static/img/portfolio-3.jpg",
                          "/static/img/portfolio-4.jpg",
                        ]}
                        title="Emirates Visa"
                        category="cloning"
                        description="Cloned by emiratesvisa.com"
                        webURL="emirates-visa.vercel.app"
                        black="dark:text-black"
                      />

                      <PortfolioBox
                        imageSrcs={[
                          "/static/img/portfolio-1.jpg",
                          "/static/img/portfolio-2.jpg",
                          "/static/img/portfolio-3.jpg",
                          "/static/img/portfolio-4.jpg",
                        ]}
                        title="Emirates Visa"
                        category="cloning"
                        description="Cloned by emiratesvisa.com"
                        webURL="emirates-visa.vercel.app"
                        black="dark:text-black"
                      />
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
