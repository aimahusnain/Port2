import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { AlexioContext } from "../Context";
import InsightRoll from "./(blog)/About/InsightRoll";
import ContactShort from "./ContactShort";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link'

const insights = [
  "FIGMA",
  "HTML",
  "CSS",
  "TAILWIND CSS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "NEXT.JS",
  "FIGMA",
  "HTML",
  "CSS",
  "TAILWIND CSS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "REACT",
  "NEXT.JS",
];

const HomeBanner = () => {
  const { changeNav, toggle, nav } = useContext(AlexioContext);
  const activePageClass = (name: any) => (name === nav ? "" : "page--inactive");

  return (
    <div
      className={`page bg-darkness dark:bg-light ml-0 gap-0  ${activePageClass(
        "home"
      )}`}
      id="home"
      // onClick={() => changeNav("home", false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-0 mb-16">
        <div className="flex sm:flex-row flex-col !mx-0 h-full">
          <div className="sm:pt-0 pt-2 p-0 overflow-hidden sm:items-end items-start sm:justify-end justify-end flex flex-col sm:h-screen h-[450px] md:w-[50%] w-full bg-boo-700">
              {" "}
              <Carousel
                className="sm:pt-0 pt-12 h-full overflow-hidden flex items-start justify-center"
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
              >
                <div className="!max-h-full">
                  <Image
                  
                    width={400}
                    height={842}
                    className="m-0 p-0 object-cover object-top w-screen h-screen"
                    src="/static/img/Home2.png"
                    alt=""
                  />
                </div>
                <div className="!max-h-full">
                  <Image
                    width={400}
                    height={842}
                    className="m-0 p-0 object-cover object-top w-screen h-screen"
                    src="/static/img/Home1.png"
                    alt=""
                  />
                </div>
              </Carousel>
              <div className="lg:visible">
                <InsightRoll insights={insights} />
              </div>
            </div>

            <div className="w-full">
              {/* 70% container */}
              <div className="h-full sm:mx-16 mx-3 flex flex-col justify-between sm:items-start items-center">
                <div />
                <section>
                  <div className="w-full place-self-center text-center sm:text-left justify-self-center">
                    <h1 className="text-white dark:text-black mb-4 text-2xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-boo-400 to-pinky-500">
                        Welcome to
                      </span>
                      <br></br>
                      <TypeAnimation
                        sequence={[
                          "WebKin Solutions",
                          1500,
                          "Web Development",
                          1000,
                          "UI/UX Designing",
                          1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                      />
                    </h1>
                    <div>
                      <p
                        onClick={() => changeNav("portfolio", false)}
                        className="px-6 inline-block py-3 w-full cursor-pointer sm:w-fit rounded-full mr-4 bg-gradient-to-br from-boo-500 to-pinky-600 text-white"
                      >
                        View Portfolio
                      </p>

                      <p
                        onClick={() => changeNav("resume", false)}
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-boo-500 to-pinky-700 hover:dark:bg-zinc-500 hover:bg-slate-800 text-white dark:text-black mt-3"
                      >
                        <span className="block bg-[#121212] dark:bg-white cursor-pointer transtion-all duration-500 hover:bg-slate-800 rounded-full px-5 py-2">
                          Our Services
                        </span>
                      </p>
                    </div>
                  </div>
                </section>

                <div className=" w-full">
                  <ContactShort />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    Next
  </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    Prev
  </div>
);

export default HomeBanner;
