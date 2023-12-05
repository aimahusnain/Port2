'use client'

import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import HomeBanner from "../components/HomeBanner";
import Services from "../components/Services";
import { AlexioContext } from "../Context";
import Header from "../Header";
import Nav from "../Nav";
import { useEffect ,useContext } from "react";
import React from 'react'
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import dynamic from "next/dynamic";
const Portfolio = dynamic(() => import("../components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    document.querySelector("html").classList.add("js");
    document.querySelector("body").classList.add("dark-body");
  }, []);

  const { toggle } = useContext(AlexioContext);

  return (
    <div className="bg-dark">
      <VideoPopup />
      <ImageView />
      <Nav />
      <div className={`pages-stack ${toggle ? "pages-stack--open" : ""}`}>
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
