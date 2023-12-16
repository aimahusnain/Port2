"use client";

import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import { AlexioContext } from "../Context";
import Header from "../Header";
import Nav from "../Nav";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import HomeBanner from "../components/HomeBanner";
import Services from "../components/Services";
import Blog from "../components/Blog";
const Portfolio = dynamic(() => import("../components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    document.querySelector("html").classList.add("js");
  }, []);

  const { toggle } = useContext(AlexioContext);

  const { changeNav, nav } = useContext(AlexioContext);

  const insights = [
    "FIGMA",
    "HTML",
    "CSS",
    "TAILWIND CSS",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "REACT",
    "NEXT.JS",
    
  ];

  return (
    <div>
      <Nav />
      <div className={`pages-stack ${toggle ? "pages-stack--open" : ""}`}>
        <Blog />
        <HomeBanner />
        <AboutUs />
        <Services />
        <Portfolio />
        <Contact />
      </div>
      <Header />
    </div>

    
  );
};
export default Index;
