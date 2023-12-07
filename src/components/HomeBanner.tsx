import { useContext, useEffect, useState } from "react";
import { AlexioContext } from "../Context";
import TypingAnimation from "./TypingAnimation";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter } from "lucide-react";
import { FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import ContactShort from "./ContactShort";

const HomeBanner = () => {
  const activePageClass = (page) => (page === nav ? "" : "page--inactive"); // Accepts a parameter
  const { changeNav, nav } = useContext(AlexioContext);

  return (
    <div
      className={`page bg-darkness ${activePageClass("home")}`}
      id={"home"}
      // onClick={() => changeNav("home", false)}
    >
      <div className="container-fluid p-0">
        <div className="row no-gutters full-screen">
          <div className="col-lg-3 overflow-hidden sm:overflow-visible sm:h-full h-[500px] col-xl-4 bg-boo">
            <div className="d-flex align-items-end home-user-avtar v-center-box">
              <Image
                height={300}
                width={3020}
                src="/static/img/H1.png"
                title=""
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-20 mb-7 col-xl-8">
            <div className="h-full  flex flex-col justify-between items-start">
              <div />
              <div className="home-text">
                <h6 className="text-white theme-after">Wellcome to</h6>
                <h1 className="text-white theme-after">DevKin Solutions</h1>
                <p className="text-white">
                  WEB <TypingAnimation />
                </p>

                <div className="flex w-full px-4 sm:px-0 mt-2 gap-2 flex-row justify-between sm:justify-start items-center">
                  <div className="">
                    <button
                      onClick={() => changeNav("portfolio", false)}
                      className="bg-pinky w-32 p-1 border-pinky text-black hover:text-white transition-all duration-500 rounded-lg font-bold hover:no-underline"
                    >
                      View Portfolio
                    </button>
                  </div>

                  <div className="">
                    <button
                      className="bg-pinky w-32 p-1 border-pinky text-black hover:text-white transition-all duration-500 rounded-lg font-bold hover:no-underline"
                      onClick={() => changeNav("resume", false)}
                    >
                      Our Services
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end flex-row gap-2">
                <ContactShort />
              </div>
              

              <ul className="flex flex-row gap-2 absolute bottom-5 right-10">
                
                <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
                <Link href="#">
                <Facebook className="fill-white" stroke="0" size={15} />
                </Link>
                </li>
                <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
                <Link href="#">
                <Twitter className="fill-white" stroke="0" size={15} />
                </Link>
                </li>
                <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
                <Link href="#">
                <FaGooglePlusG
                className="fill-white"
                stroke="0"
                size={15}
                />
                </Link>
                </li>
                <li className="transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full">
                <Link href="#">
                    <FaLinkedinIn className="fill-white" stroke="0" size={15} />
                    </Link>
                    </li>
                  </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
