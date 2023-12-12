"use client";
import siteMetadata from "@/src/utils/siteMetaData";
import Link from "next/link";
import { useContext, useState } from "react";
import { AlexioContext } from "../../../Context";
import NavLinks from "../../NavLinks";

const Header = () => {
  const [mode, setMode] = useState<string>("dark");
  const { changeNav, toggle, nav } = useContext(AlexioContext);
  const [click, setClick] = useState(false);

  const toggle2 = () => {
    setClick(!click);
  };

  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">

      <header className="bg-boo-700 fixed top-0 right-0 flex justify-end sm:w-fit w-full z-[9999]">
        <Link
          href=""
          className="text-white w-full flex justify-left items-center text-xl font-bold uppercase float-left leading-8 tracking-wider py-[15px] px-5"
        >
          {siteMetadata.WebName}
        </Link>
        <div
          onClick={toggle2}
          className="relative cursor-pointer top-0 bottom-0 right-0 bg-black items-center  flex w-[60px]"
        >
          <button aria-label="Hamburger Menu">
            <div className="w-6 cursor-pointer transition-all ease duration-300">
              <div className="relative">
                <span
                  className="absolute top-0 inline-block w-full h-0.5 bg-light dark:bg-black rounded transition-all ease duration-200"
                  style={{
                    transform: click
                      ? "rotate(-45deg) translateY(0)"
                      : "rotate(0deg) translateY(6px)",
                  }}
                >
                  &nbsp;
                </span>
                <span
                  className="absolute top-0 inline-block w-full h-0.5 bg-light dark:bg-dark rounded transition-all ease duration-200"
                  style={{
                    opacity: click ? 0 : 1,
                  }}
                >
                  &nbsp;
                </span>
                <span
                  className="absolute top-0 inline-block w-full h-0.5 bg-light dark:bg-dark rounded transition-all ease duration-200"
                  style={{
                    transform: click
                      ? "rotate(45deg) translateY(0)"
                      : "rotate(0deg) translateY(-6px)",
                  }}
                >
                  &nbsp;
                </span>
              </div>
            </div>
          </button>
        </div>
      </header>
      <nav
  className={`w-max py-3 px-6 sm:px-8 border border-solid border-black rounded-full font-medium capitalize items-center flex 
  fixed bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300 
  ${click ? 'top-20 sm:top-6' : '-top-20 sm:-top-20'}`}
>
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
