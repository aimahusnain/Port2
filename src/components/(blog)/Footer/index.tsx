"use client";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaData";
import ContactShort from "../../ContactShort";
import ContactShort2 from "../../ContactShort2";
import NavLinks from "../../NavLinks";
import { AlexioContext } from "@/src/Context";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const { changeNav, toggle, nav } = useContext(AlexioContext);
  return (
    <footer className="mt-16 rounded-2xl !text-white bg-dark dark:bg-boo-700 m-2 sm:m-10 flex flex-col items-center">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <div className="">
        <ContactShort2 />
      </div>

        <ul className="flex h-fit gap-7 mt-8 text-center">
          <li>
            <Link href='/' onClick={() => changeNav("home", false)}>Home</Link>
          </li>
          <li>
            <Link href='/' onClick={() => changeNav("about", false)}>About Us</Link>
          </li>
          <li>
            <Link href='/' onClick={() => changeNav("resume", false)}>
              Our Services
            </Link>
          </li>
          <li>
            <Link href='/' onClick={() => changeNav("blog", false)}>Blog</Link>
          </li>
          <li>
            <Link href='/' onClick={() => changeNav("portfolio", false)}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href='/' onClick={() => changeNav("Contact", false)}>
              Contact Us
            </Link>
          </li>
        </ul>

      <div className="w-full mt-3 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;2023 DevKin Solutions. All rights reserved.
        </span>
        <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <Link
            href="https://devdreaming.com"
            className="underline"
            target="_blank"
          >
            DevKin Solutions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
