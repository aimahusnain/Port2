import Link from "next/link";
import React, { useContext } from "react";
import { AlexioContext } from "../Context";

const NavLinks = () => {
  const { changeNav, toggle, nav } = useContext(AlexioContext);

  return (
    <>
      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="cursor-pointer text-black dark:text-light"
          onClick={() => changeNav("home", false)}
        >
          <span className="text-xl bg-gradient-to-r from-boo-700 to-pinky-700  bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat duration-500 p-2">
            Home
          </span>
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="cursor-pointer text-black dark:text-light"
          onClick={() => changeNav("about", false)}
        >
          <span className="text-xl bg-gradient-to-r from-boo-700 to-pinky-700  bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat duration-500 p-2">
            About Us
          </span>
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="cursor-pointer text-black dark:text-white"
          onClick={() => changeNav("resume", false)}
        >
          <span className="text-xl bg-gradient-to-r from-boo-700 to-pinky-700  bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat duration-500 p-2">
            Our Services
          </span>
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <Link
          className="cursor-pointer text-black dark:text-white"
          href="/blog"
        >
          <span className="text-xl bg-gradient-to-r from-boo-700 to-pinky-700  bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat duration-500 p-2">
            Blog
          </span>
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="text-black dark:text-white cursor-pointer"
          onClick={() => changeNav("portfolio", false)}
        >
          <span className="text-xl bg-gradient-to-r from-boo-700 to-pinky-700  bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat duration-500 p-2">
            Portfolio
          </span>
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="text-black dark:text-white cursor-pointer"
          onClick={() => changeNav("contact", false)}
        >
          <span className="text-xl bg-gradient-to-r from-boo-700 to-pinky-700  bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat duration-500 p-2">
            Contact Us
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href="/"
          className="text-black dark:text-white cursor-pointer"
          onClick={() => changeNav("blog", false)}
        >
          <span className="text-xl bg-gradient-to-r from-boo-700 to-pinky-700  bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat duration-500 p-2">
            TestBlog
          </span>
        </Link>
      </div>
    </>
  );
};

export default NavLinks;
