import { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { AlexioContext } from "../Context";
import siteMetadata from "../utils/siteMetaData";
import ContactShort from "./ContactShort";
import InsightRoll from "./(blog)/About/InsightRoll";

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
          <div className="p-0 overflow-hidden sm:items-end items-start sm:justify-end justify-end flex sm:h-screen h-[455px] md:w-[40%] w-full bg-boo">
            <img
              className="m-0 mt-5 p-0 object-cover object-top w-full h-full"
              loading="lazy"
              src="/static/img/H1.png"
              alt=""
            />
          </div>

          <div>
            <div className="h-full -m-6 mx-3 flex flex-col justify-between items-start">
              <div />

              <div className="flex flex-col px-4 w-full mt-5">
                <h1 className="font-extrabold lg:text-6xl md:text-5xl sm:text-4xl">
                  <span className="normal-case text-transparent bg-clip-text bg-gradient-to-r from-primaryyy-400 to-pinky">
                    Welcome to
                  </span>
                </h1>
                <InsightRoll insights={insights} />
                <TypeAnimation
                  className="text-white lg:text-7xl md:text-5xl sm:text-3xl"
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
                    className="bg-pinky w-32 p-2 border-pinky text-black transition-all duration-500 rounded-lg font-bold hover:no-underline"
                  >
                    View Portfolio
                  </button>

                  <button
                    className="w-32 p-1 border-[3px] border-pinky text-white transition-all duration-500 rounded-lg font-bold hover:no-underline"
                    onClick={() => changeNav("resume", false)}
                  >
                    Our Services
                  </button>
                </div>
              </div>

              <div className="flex justify-end flex-row gap-2">
                <ContactShort />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
