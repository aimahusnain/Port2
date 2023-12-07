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
          <div className="col-lg-20 col-xl-8">
            <div className="h-full flex flex-col justify-between items-start">
              <div />
              <div className="home-text">
                <h6 className="text-white theme-after">Wellcome to</h6>
                <h1 className="text-white theme-after">DevKin Solutions</h1>
                <p className="text-white">
                  WEB <TypingAnimation />
                </p>

                <div className="flex w-full mt-4 flex-col gap-4 sm:flex-row justify-center sm:justify-start items-center">
                  <div className="">
                    <Link
                      href=""
                      onClick={() => changeNav("portfolio", false)}
                      className="bg-pinky border-pinky text-black hover:text-white tracking-widest shadow-lg hover:shadow-xl transition-all duration-500 px-4 py-2 rounded-lg font-bold hover:no-underline"
                    >
                      View Portfolio
                    </Link>
                  </div>

                  <div className="mt-3">
                    <Link
                      href=""
                      className="bg-pinky border-pinky text-black hover:text-white tracking-widest shadow-lg hover:shadow-xl transition-all duration-500 px-4 py-2 rounded-lg font-bold hover:no-underline"
                      onClick={() => changeNav("resume", false)}
                    >
                      Our Services
                    </Link>
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
