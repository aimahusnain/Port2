"use client";
import siteMetadata from "@/src/utils/siteMetaData";
import { Undo2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AlexioContext } from "../../../Context";
import NavLinks from "../../NavLinks";
import ThemeToggler from "../../theme";

const Header = () => {
  const router = useRouter();
  const [mode, setMode] = useState<string>("dark");
  const { changeNav, toggle, nav } = useContext(AlexioContext);
  const [click, setClick] = useState(false);

  const toggle2 = () => {
    setClick(!click);
  };

  return (
    <header className="w-full px-5 sm:px-10 flex items-center justify-between">
      <header className="bg-boo-700 fixed top-0 left-0 flex justify-end sm:w-fit w-full z-[9999]">

        <div
          onClick={router.back}
          className="relative cursor-pointer top-0 bottom-0 right-0 bg-black items-center justify-center flex w-[60px]"
        >
            <Undo2 className="text-white" />
        </div>
        <div className=" cursor-pointer text-white w-full flex justify-left items-center text-xl font-bold uppercase float-left leading-8 tracking-wider py-[15px] px-5">
          {siteMetadata.WebName}
        </div>
        <ThemeToggler />
      </header>
      <nav
        className={`w-max py-3 sm:flex-row flex-col px-6 sm:px-8 gap-5 bg-white border border-black font-medium capitalize items-left flex 
  fixed backdrop-blur-sm z-50 transition-all ease duration-300 
  ${click ? "top-[4rem] sm:top-16" : "hidden -top-20 sm:-top-80"}`}
      >
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;