"use client";

import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionContainer from "./SectionContainer";
import Testimonials from "./Testimonials";
import Link from "next/link";
import Image from "next/image";
import PortfolioBox from "./PortfolioBox";

const Portfolio = () => {
  const isotope = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    imagesLoaded(
      document.querySelector(".portfolio-cols"),
      function (instance) {
        isotope.current = new Isotope(".portfolio-cols", {
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
      }
    );
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

  return (
    <SectionContainer
      extraClass="portfolio-section"
      name={"portfolio"}
      title={"My Projects"}
      subTitle={"Latest Work"}
      leftImage="static/img/title-3.jpg"
      leftImageTitle={"Portfolio"}
    >
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
 
        <div>
          <ul className="portfolio-cols fgap">
          <PortfolioBox title="Emirates Visa" description="copied from emiratesvisa.com" webURL="emirates-visa.vercel.app" imageSrc="/static/img/portfolio-1.jpg" categary="cloning" />
          <PortfolioBox title="Emirates Visa" description="copied from emiratesvisa.com" webURL="emirates-visa.vercel.app" imageSrc="/static/img/portfolio-2.jpg" categary="blog" />
          <PortfolioBox title="Emirates Visa" description="copied from emiratesvisa.com" webURL="emirates-visa.vercel.app" imageSrc="/static/img/portfolio-3.jpg" categary="affiliate" />
          <PortfolioBox title="Emirates Visa" description="copied from emiratesvisa.com" webURL="emirates-visa.vercel.app" imageSrc="/static/img/portfolio-4.jpg" categary="ecommerce" />
          <PortfolioBox title="Emirates Visa" description="copied from emiratesvisa.com" webURL="emirates-visa.vercel.app" imageSrc="/static/img/portfolio-5.jpg" categary="portfolio" />
          <PortfolioBox title="Emirates Visa" description="copied from emiratesvisa.com" webURL="emirates-visa.vercel.app" imageSrc="/static/img/portfolio-6.jpg" categary="saas" />
          <PortfolioBox title="Emirates Visa" description="copied from emiratesvisa.com" webURL="emirates-visa.vercel.app" imageSrc="/static/img/portfolio-1.jpg" categary="business" />
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
