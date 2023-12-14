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
   //  .portfolio-filter ul {
    //   margin: 0;
    //   padding: 0;
    //   list-style-type: none;
    // }
    // .portfolio-filter li {
    //   display: inline-block;
    //   font-size: 13px;
    //   color: #fff;
    //   position: relative;
    //   text-transform: uppercase;
    //   padding: 4px 15px;
    //   font-weight: 600;
    //   letter-spacing: 1px;
    //   margin: 2px 1px;
    //   cursor: pointer;
    // }
    // .portfolio-filter li:after {
    //   content: "";
    //   position: absolute;
    //   top: 0;
    //   bottom: 0;
    //   left: 0;
    //   right: 0;
    //   z-index: -1;
    //   transform: skew(-20deg);
    //   -webkit-transform: skew(-20deg);
    // }
    // .portfolio-filter li:not(.active):after {
    //   background: #000;
    // }
    
    // .portfolio-content {
    //   margin: 0 -10px;
    // }
    
    // .portfolio-cols-3 {
    //   margin: 0;
    //   padding: 0;
    // }
    // .portfolio-cols-3 .portfolio-item {
    //   padding: 10px;
    //   width: 33.33%;
    //   list-style-type: none;
    // }
    
    // .portfolio-col {
    //   padding: 10px;
    //   background: #fff;
    //   border: 1px solid #ddd;
    //   border-bottom: 4px solid #ddd;
    // }
    // .portfolio-col .portfolio-img {
    //   position: relative;
    // }
    // .portfolio-col .portfolio-info {
    //   padding: 10px 0 0;
    // }
    // .portfolio-col .portfolio-info h5 {
    //   margin: 0;
    //   padding: 0 0 2px;
    //   color: #151515;
    //   font-weight: 600;
    //   font-size: 16px;
    // }
    // .portfolio-col .portfolio-info span {
    //   font-size: 14px;
    //   color: #666;
    //   font-weight: 400;
    // }
    
    // /*Portfolio Hover 01*/
    // .portfolio-hover-01 {
    //   position: relative;
    // }
    // .portfolio-hover-01 img {
    //   display: block;
    // }
    
    // .portfolio-hover-01 .hover {
    //   background: rgba(255, 255, 255, 0.62);
    //   position: absolute;
    //   bottom: 0;
    //   visibility: hidden;
    //   opacity: 0;
    //   left: 0;
    //   text-align: center;
    //   padding: 0;
    //   width: 100%;
    //   -webkit-transition: ease all 0.35s;
    //   -o-transition: ease all 0.35s;
    //   -ms-transition: ease all 0.35s;
    //   -moz-transition: ease all 0.35s;
    //   transition: ease all 0.35s;
    // }
        <div className="portfolio-content">
          <ul className="portfolio-cols portfolio-cols-3">
            {/* Image Src */}
            {/* Website URL (optional) */}
            {/* Title */}
            {/* Description */}

            <PortfolioBox title="Emirates Visa" description="copied from emiratesvisa.com" webURL="emirates-visa.vercel.app" imageSrc="/static/img/portfolio-1.jpg" categary="cloning" />

            <li className="portfolio-item cloning">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <Link href="#">
                    <Image
                    loading="eager"
                      width={230}
                      height={100}
                      src="/static/img/portfolio-2.jpg"
                      title=""
                      alt=""
                    />
                  </Link>
                  <div className="hover">
                    <div className="action-btn">
                      <Link
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </Link>
                      <Link
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-2.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </Link>
                      <Link href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </Link>
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="portfolio-info">
                  <h5>Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>{" "}
            </li>{" "}
            <li className="portfolio-item photoshop apps">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <Link href="#">
                    <Image
                    loading="eager"
                      width={230}
                      height={100}
                      src="/static/img/portfolio-3.jpg"
                      title=""
                      alt=""
                    />
                  </Link>
                  <div className="hover">
                    <div className="action-btn">
                      <Link
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </Link>
                      <Link
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-3.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </Link>
                      <Link href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </Link>
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="portfolio-info">
                  <h5>Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>{" "}
            </li>{" "}
            <li className="portfolio-item photoshop website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <Link href="#">
                    <Image
                    loading="eager"
                      width={230}
                      height={100}
                      src="/static/img/portfolio-4.jpg"
                      title=""
                      alt=""
                    />
                  </Link>
                  <div className="hover">
                    <div className="action-btn">
                      <Link
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </Link>
                      <Link
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-4.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </Link>
                      <Link href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </Link>
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="portfolio-info">
                  <h5>Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>{" "}
            </li>{" "}
            <li className="portfolio-item ecommerce apps">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <Link href="#">
                    <Image
                    loading="eager"
                      width={230}
                      height={100}
                      src="/static/img/portfolio-5.jpg"
                      title=""
                      alt=""
                    />
                  </Link>
                  <div className="hover">
                    <div className="action-btn">
                      <Link
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </Link>
                      <Link
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-5.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </Link>
                      <Link href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </Link>
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="portfolio-info">
                  <h5>Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>{" "}
            </li>{" "}
            <li className="portfolio-item app website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <Link href="#">
                    <Image
                    loading="eager"
                      width={230}
                      height={100}
                      src="/static/img/portfolio-6.jpg"
                      title=""
                      alt=""
                    />
                  </Link>
                  <div className="hover">
                    <div className="action-btn">
                      <Link
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        className="popup-video theme-color"
                      >
                        <i className="fa fa-play" />
                      </Link>
                      <Link
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-6.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </Link>
                      <Link href="#" className="theme-color">
                        <i className="fa fa-link" />
                      </Link>
                    </div>{" "}
                  </div>{" "}
                </div>
                <div className="portfolio-info">
                  <h5>Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>{" "}
            </li>{" "}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
