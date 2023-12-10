"use client";

import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionContainer from "./SectionContainer";
import Testimonials from "./Testimonials";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  // Isotope
  const isotope = useRef<Isotope | null>(null);
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    imagesLoaded(
      document.querySelector(".portfolio-cols"),
      function (instance) {
        isotope.current = new Isotope(".portfolio-cols", {
          itemSelector: ".portfolio-item",
          // layoutMode: "fitRows",
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
      <div className="portfolio-section">
        <div className="portfolio-filter m-10px-b">
          <ul className="filter text-left text-md-center">
            {" "}
            <li
              className={`${activeBtn("*")} theme-after`}
              onClick={handleFilterKeyChange("*")}
            >
              All
            </li>{" "}
            <li
              className={`${activeBtn("photoshop")} theme-after`}
              onClick={handleFilterKeyChange("photoshop")}
              data-filter=".photoshop"
            >
              Websites Cloning
            </li>{" "}
            <li
              className={`${activeBtn("website")} theme-after`}
              onClick={handleFilterKeyChange("website")}
              data-filter=".website"
            >
              Business Websites
            </li>{" "}
            <li
              className={`${activeBtn("apps")} theme-after`}
              onClick={handleFilterKeyChange("apps")}
              data-filter=".apps"
            >
              SaaS Applications
            </li>
            <li
              className={`${activeBtn("apps")} theme-after`}
              onClick={handleFilterKeyChange("apps")}
              data-filter=".apps"
            >
              Portfolio Websites
            </li>
            <li
              className={`${activeBtn("apps")} theme-after`}
              onClick={handleFilterKeyChange("apps")}
              data-filter=".apps"
            >
              Ecommerce Websites
            </li>
            <li
              className={`${activeBtn("apps")} theme-after`}
              onClick={handleFilterKeyChange("apps")}
              data-filter=".apps"
            >
              Affiliate Websites
            </li>
            <li
              className={`${activeBtn("apps")} theme-after`}
              onClick={handleFilterKeyChange("apps")}
              data-filter=".apps"
            >
              Blog Development
            </li>
            
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content">
          <ul className="portfolio-cols portfolio-cols-3">
            <li className="portfolio-item website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <Link href="#">
                  <Image width={230} height={100}  src="/static/img/portfolio-1.jpg" title="" alt="" />
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
                        href="static/img/portfolio-1.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <i className="fas fa-expand" />
                      </Link>
                      <Link href="#" className="theme-color">
                        <i className="fa fa-link" />
                        </Link>
                    </div>{" "}
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item apps">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <Link href="#">
                  <Image width={230} height={100} src="/static/img/portfolio-2.jpg" title="" alt="" />
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
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item photoshop apps">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <Link href="#">
                    <Image width={230} height={100}  src="/static/img/portfolio-3.jpg" title="" alt="" />
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
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item photoshop website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <Link href="#">
                  <Image width={230} height={100}  src="/static/img/portfolio-4.jpg" title="" alt="" />
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
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item photoshop apps">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <Link href="#">
                  <Image width={230} height={100}  src="/static/img/portfolio-5.jpg" title="" alt="" />
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
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
            <li className="portfolio-item app website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <Link href="#">
                  <Image width={230} height={100} src="/static/img/portfolio-6.jpg" title="" alt="" />
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
                    {/* Video Btn */}
                  </div>{" "}
                  {/* Hover */}
                </div>
                <div className="portfolio-info">
                  <h5>Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>{" "}
              {/* Portfolio */}
            </li>{" "}
            {/* col */}
          </ul>{" "}
          {/* row */}
        </div>{" "}
        {/* portfolio content */}
      </div>
      {/* 
          ==========================
            Testimonials
          ==========================
          */}
      <Testimonials />
    </SectionContainer>
  );
};
export default Portfolio;
