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
  const activePageClass = (page) => (page === nav ? "" : "page--inactive");
  const { changeNav, nav } = useContext(AlexioContext);

  return (
    <div
      className={`page bg-darkness ${activePageClass("home")}`}
      id={"home"}
      // onClick={() => changeNav("home", false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-0 mb-16">
          <div className="flex sm:flex-row flex-col !mx-0 h-full">
            <div className="pt-20 p-0 overflow-hidden sm:items-end items-start sm:justify-end justify-end flex flex-col sm:h-screen h-[450px] md:w-[50%] w-full bg-boo-700">
              <img
            loading="lazy"
                className="m-0 p-0 object-cover object-top w-full h-full"
                src="/static/img/H1.png"
                alt=""
              />
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
                    <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-boo-400 to-pinky-600">
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
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-boo-500 to-pinky-700 hover:bg-slate-800 text-white mt-3"
                      >
                        <span className="block bg-[#121212] cursor-pointer transtion-all duration-500 hover:bg-slate-800 rounded-full px-5 py-2">
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
export default HomeBanner;
