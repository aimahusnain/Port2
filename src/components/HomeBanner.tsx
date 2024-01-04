import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { TypeAnimation } from "react-type-animation";
import { AlexioContext } from "../Context";
import InsightRoll from "./(blog)/About/InsightRoll";
import ContactShort from "./ContactShort";

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
        <div className="flex md:flex-row flex-col !mx-0 h-full">
          <div className="md:pt-0 pt-2 p-0 overflow-hidden md:items-end items-start md:justify-end justify-end flex flex-col md:h-screen h-[450px] md:w-[50%] w-full bg-boo-600">
              {" "}
              <Carousel
                className="sm:pt-0 pt-2 h-full overflow-hidden flex items-start justify-center"
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
              >
                <div className="!max-h-full">
                  <Image
                  fill
                    className="m-0 p-0 object-cover object-top w-screen h-screen"
                    src="/static/img/IMG_3218 Edited.webp"
                    alt="665"
                  />
                </div>
                <div className="!max-h-full">
                  <Image
                  fill
                    className="md:pb-0 pb-[240px] m-0 p-0 object-cover object-bottom w-screen h-screen"
                    src="/static/img/Eman Best V3.webp"
                    alt="ffg"
                  />
                </div>
                <div className="!max-h-full">
                  <Image
                  fill
                    className="sm:pb-0 pb-[266px] m-0 p-0 object-cover object-bottom w-screen h-screen"
                    src="/static/img/IMG_3195_Edited.webp"
                    alt="fgt"
                  />
                </div>
                
                <div className="!max-h-full">
                  <Image
                    width={400}
                    height={842}
                    className="md:pb-0 pb-40 m-0 p-0 object-cover object-bottom w-screen h-screen"
                    src="/static/img/IMG_3223 Edited.webp"
                    alt="sdfsfd"
                  />
                </div>
                
              </Carousel>
              <div className="lg:visible">
                <InsightRoll insights={insights} />
              </div>
            </div>

            <div className="w-full">
              {/* 70% container */}
              <div className="h-full md:mx-16 mx-3 flex flex-col justify-between md:items-start items-center">
                <div />
                <section>
                  <div className="w-full place-self-center text-center md:text-left justify-self-center">
                    <h1 className="text-white dark:text-black mb-4 text-2xl md:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
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
                        className="px-6 inline-block py-3 w-full cursor-pointer md:w-fit rounded-full mr-4 bg-gradient-to-br from-boo-500 to-pinky-600 text-white"
                      >
                        View Portfolio
                      </p>

                      <p
                        onClick={() => changeNav("resume", false)}
                        className="px-1 inline-block py-1 w-full md:w-fit rounded-full bg-gradient-to-br from-boo-500 to-pinky-700 hover:dark:bg-zinc-500 hover:bg-slate-800 text-white dark:text-black md:mt-0 mt-3"
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
