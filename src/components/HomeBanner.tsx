import { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { AlexioContext } from "../Context";
import siteMetadata from "../utils/siteMetaData";
import ContactShort from "./ContactShort";
import InsightRoll from "./(blog)/About/InsightRoll";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
  const activePageClass = (page) => (page === nav ? "" : "page--inactive"); // Accepts a parameter
  const { changeNav, nav } = useContext(AlexioContext);

  return (
    <div
      className={`page bg-darkness ${activePageClass("home")}`}
      id={"home"}
      // onClick={() => changeNav("home", false)}
    >
      <div className="p-0">
        <div className="flex sm:flex-row flex-col !mx-0 h-full">
          <div className="p-0 overflow-hidden sm:items-end items-start sm:justify-end justify-end flex flex-col sm:h-screen h-[500px] md:w-[50%] w-full bg-boo">
            <img
              className="m-0 p-0 mt-10 object-cover object-top w-full h-full"
              loading="lazy"
              src="/static/img/H1.png"
              alt=""
            />
            <div className="lg:visible">
              <InsightRoll insights={insights} />
            </div>
          </div>

          <div className="w-full">
            {/* 70% container */}
            <div className="h-full mx-3 flex flex-col justify-between items-start">
              <div />
              <section>
                <div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="place-self-center text-center sm:text-left justify-self-start"
                  >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryyy-400 to-secondaryyyy-600">
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
                      <Link
                        href=""
                        onClick={() => changeNav("portfolio", false)}
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primaryyy-500 to-cyan-500 hover:bg-pinky text-white"
                      >
                        View Portfolio
                      </Link>

                      <Link
                        onClick={() => changeNav("resume", false)}
                        href=""
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primaryyy-500 to-cyan-700 hover:bg-slate-800 text-white mt-3"
                      >
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                          Our Services
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </section>
              {/* <div className="flex mt-7 flex-col px-4 w-full">
                <p className="font-extrabold text-3xl lg:text-5xl md:text-3xl">
                  <span className="normal-case text-transparent bg-clip-text bg-gradient-to-r from-primaryyy-400 to-pinky">
                    Welcome to
                  </span>
                </p>
                <TypeAnimation
                  className="text-white text-4xl lg:text-7xl md:text-6xl"
                  sequence={[
                    `${siteMetadata.WebName}`,
                    3000,
                    "WEB Designing",
                    2000,
                    "WEB Development",
                    2000,
                  ]}
                  wrapper="h1"
                  speed={60}
                  repeat={Infinity}
                />

                <div className="flex max-w-full mt-2 gap-2 flex-row justify-between sm:justify-start items-center">
                  <button
                    onClick={() => changeNav("portfolio", false)}
                    className="bg-pinky w-32 py-2 border-pinky text-black transition-all duration-500 rounded-lg font-bold hover:no-underline"
                  >
                    View Portfolio
                  </button>

                  <button
                    className="w-32 p-1 border-[3px] border-pinky text-white hover:bg-white/20 transition-all duration-500 rounded-lg font-bold hover:no-underline"
                    onClick={() => changeNav("resume", false)}
                  >
                    Our Services
                  </button>
                </div>
              </div> */}

              <ContactShort />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
