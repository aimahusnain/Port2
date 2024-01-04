import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import Image from "next/image";
import { useContext } from "react";
import { AlexioContext } from "../Context";
import siteMetadata from "../utils/siteMetaData";
import { Badge } from "./ui/badge";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { LiaFacebookMessenger } from "react-icons/lia";

const AboutUs = () => {
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = (name: any) => (name === nav ? "" : "page--inactive");

  return (
    <div
      className={`page about-section bg-darkness dark:bg-light ml-0 gap-0 ${activePageClass(
        "about"
      )}`}
      id="about"
    >
      <div className="p-0">
        <div className="flex sm:flex-row flex-col  !mx-0 h-full">
          <div className="p-0 overflow-hidden lg:flex flex-col items-between justify-center hidden sm:hidden lg:block sm:visible md:w-[50%] w-full bg-boo-700 ">
            <Carousel
              className="overflow-hidden flex h-full items-center justify-center"
              autoPlay
              infiniteLoop
              showIndicators={false}
              showThumbs={false}
              showStatus={false}
            >
              <div className="!h-screen w-full flex items-center justify-center flex-col !max-h-full max-w-full rounded-xl text-trueGray-800 dark:text-trueGray-400 overflow-hidden group motion-safe:transition-all motion-safe:duration-700 m-0 p-0">
                <figure className="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4 outline-white before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-pinky-500 before:-z-[1] group-hover:before:scale-[5.6] motion-safe:before:transition-all motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-pinky-400">
                  <div className="w-40 h-40 overflow-hidden rounded-full">
                    <img
                      className="rounded-full block max-w-full bg-white object-cover z-10 relative"
                      src="/static/img/H1.webp"
                      alt="Avatar"
                    />
                  </div>
                </figure>

                <header className="motion-safe:translate-y-4 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
                  <h3 className="font-semibold text-2xl text-center mt-6 text-white relative">
                    Muhammad Husnain
                  </h3>
                  <div className="flex flex-wrap items-center justify-center gap-2 my-3">
                    <Badge variant="secondary">Graphic Designing</Badge>
                    <Badge variant="secondary">2D Animation</Badge>
                    <Badge variant="secondary">UI/UX Designing</Badge>
                    <Badge variant="secondary">App Development</Badge>
                    <Badge variant="secondary">Web Development</Badge>
                  </div>
                  <p className="text-center group-hover:text-white text-white/40 text-sm relative mx-5 my-2">
                    Our design maestro, Muhammad Husnain, is a Figma virtuoso
                    with a keen eye for detail. Specializing in UI/UX design, he
                    transforms concepts into visually stunning and user-friendly
                    interfaces. His proficiency in Figma allows him to sculpt
                    digital landscapes that not only captivate but also ensure a
                    seamless and delightful user experience. Beyond design,
                    Muhammad is the backbone of our backend development,
                    specializing in Next.js. His mastery in translating design
                    into functional, high-performance applications is what sets
                    us apart.
                  </p>
                </header>

                <ul
                  className="flex justify-center space-x-4 mt-32 text-white
                   relative"
                >
                  <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                    <a
                      href="https://github.com/aimahusnain"
                      aria-label="Visit me on Github"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        className="h-6 w-6"
                      >
                        <path
                          fill="currentColor"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                    <a
                      target="_blank"
                      href="#!"
                      aria-label="Visit me on Facebook"
                    >
                      <LiaFacebookMessenger className="h-6 w-6" />
                    </a>
                  </li>
                  <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
                    <button
                      onClick={() => changeNav("contact", false)}
                      aria-label="Send me a message"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="w-full flex items-center justify-center flex-col !h-screen max-h-full !max-w-full rounded-xl text-trueGray-800 dark:text-trueGray-400 overflow-hidden group motion-safe:transition-all motion-safe:duration-700 m-0 p-0">
                <figure className="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4 outline-white before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-pinky-500 before:-z-[1] group-hover:before:scale-[5.6] motion-safe:before:transition-all motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-pinky-400">
                  <div className="w-40 h-40 overflow-hidden rounded-full">
                    <img
                      className="rounded-full block max-w-full bg-white object-cover z-10 relative"
                      src="/static/img/Taha Image v2.jpg"
                      alt="Avatar"
                    />
                  </div>
                </figure>

                <header className="motion-safe:translate-y-4 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
                  <h3 className="font-semibold text-2xl text-center mt-6 text-white relative">
                    Taha Amin
                  </h3>
                  <div className="flex flex-wrap items-center justify-center gap-2 my-3">
                    <Badge variant="secondary">Expert of Web Development</Badge>
                  </div>
                  <p className="text-center group-hover:text-white text-white/40 text-sm relative mx-5 my-2">
                    The frontend wizard of our team, Taha Amin, is a React and
                    Next.js aficionado. With a passion for crafting immersive
                    user interfaces, Taha turns visions into interactive and
                    responsive web applications. His expertise lies in bringing
                    designs to life, creating dynamic and engaging user
                    interfaces that leave a lasting impression. Taha's
                    commitment to staying on the cutting edge of React and
                    Next.js ensures that your digital presence is not only
                    modern but also future-proof.
                  </p>
                </header>

                <ul
                  className="flex justify-center space-x-4 mt-32 text-white
                   relative"
                >
                  <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                    <a
                      href="https://github.com/tahaamin2013"
                      aria-label="Visit me on Github"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        className="h-6 w-6"
                      >
                        <path
                          fill="currentColor"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                    <a
                      target="_blank"
                      href="#!"
                      aria-label="Visit me on Facebook"
                    >
                      <LiaFacebookMessenger className="h-6 w-6" />
                    </a>
                  </li>
                  <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
                    <button
                      onClick={() => changeNav("contact", false)}
                      aria-label="Send me a message"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </Carousel>
          </div>

          <div>
            <div className="h-full mx-3 flex flex-col justify-between items-start">
              <div className="page-scroll">
                <div className="page-content">
                  <div className="section-titel">
                    <h6 className="theme-after text-white">Who we are</h6>
                    <div className="st-title">
                      <h2 className="theme-after text-white dark:text-dark">
                        About US
                      </h2>
                    </div>
                  </div>
                  <div className="flex flex-col text-white dark:text-dark">
                    <p className="tracking-widest capitalize">
                      Welcome to {siteMetadata.WebName} - Crafting Digital
                      Excellence!
                    </p>
                    <p className="text-white/50 dark:text-dark/80">
                      At {siteMetadata.WebName}, we are a dynamic duo of two
                      passionate brothers, Muhammad Husnain and Taha Amin,
                      united by a shared vision to create exceptional digital
                      experiences. With a blend of creativity, expertise, and
                      innovation, we embark on a journey to bring your ideas to
                      life.
                    </p>
                    <br />
                    <p className="font-bold text-white dark:text-dark text-lg">
                      Our Approach:
                    </p>
                    <p className="text-white/50  dark:text-dark/80">
                      At {siteMetadata.WebName}, we believe in a collaborative
                      approach. We work closely with our clients, understanding
                      their unique requirements and goals. By combining our
                      technical prowess with a client-centric mindset, we ensure
                      that every project is a true reflection of your vision.
                    </p>

                    <div className="block sm:block lg:hidden h-fit rounded-sm my-20 gap-32">
                      {/* Muhammad Husnain */}
                      <div className="!h-screen w-full flex items-center justify-center flex-col !max-h-full max-w-full rounded-xl text-trueGray-800 dark:text-trueGray-400 overflow-hidden group motion-safe:transition-all motion-safe:duration-700 m-0 p-0">
                        <figure className="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4 outline-white before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-pinky-500 before:-z-[1] group-hover:before:scale-[5.6] motion-safe:before:transition-all motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-pinky-400">
                          <div className="w-40 h-40 overflow-hidden rounded-full">
                            <img
                              className="rounded-full block max-w-full bg-white object-cover z-10 relative"
                              src="/static/img/H1.webp"
                              alt="Avatar"
                            />
                          </div>
                        </figure>

                        <header className="motion-safe:translate-y-4 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
                          <h3 className="font-semibold text-2xl text-center mt-6 text-white relative">
                            Muhammad Husnain
                          </h3>
                          <div className="flex flex-wrap items-center justify-center gap-2 my-3">
                            <Badge variant="secondary">Graphic Designing</Badge>
                            <Badge variant="secondary">2D Animation</Badge>
                            <Badge variant="secondary">UI/UX Designing</Badge>
                            <Badge variant="secondary">App Development</Badge>
                            <Badge variant="secondary">Web Development</Badge>
                          </div>
                          <p className="text-center group-hover:text-white text-white/40 text-sm relative mx-5 my-2">
                            Our design maestro, Muhammad Husnain, is a Figma
                            virtuoso with a keen eye for detail. Specializing in
                            UI/UX design, he transforms concepts into visually
                            stunning and user-friendly interfaces. His
                            proficiency in Figma allows him to sculpt digital
                            landscapes that not only captivate but also ensure a
                            seamless and delightful user experience. Beyond
                            design, Muhammad is the backbone of our backend
                            development, specializing in Next.js. His mastery in
                            translating design into functional, high-performance
                            applications is what sets us apart.
                          </p>
                        </header>

                        <ul
                          className="flex justify-center space-x-4 mt-32 text-white
                   relative"
                        >
                          <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                            <a
                              href="https://github.com/aimahusnain"
                              aria-label="Visit me on Github"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                className="h-6 w-6"
                              >
                                <path
                                  fill="currentColor"
                                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                />
                              </svg>
                            </a>
                          </li>
                          <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                            <a
                              target="_blank"
                              href="#!"
                              aria-label="Visit me on Facebook"
                            >
                              <LiaFacebookMessenger className="h-6 w-6" />
                            </a>
                          </li>
                          <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
                            <button
                              onClick={() => changeNav("contact", false)}
                              aria-label="Send me a message"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                />
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </div>

                      {/* Taha Amin */}
                      <div className="w-full flex items-center justify-center flex-col !h-screen max-h-full !max-w-full rounded-xl text-trueGray-800 dark:text-trueGray-400 overflow-hidden group motion-safe:transition-all motion-safe:duration-700 m-0 p-0">
                        <figure className="relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4 outline-white before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-pinky-500 before:-z-[1] group-hover:before:scale-[5.6] motion-safe:before:transition-all motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-pinky-400">
                          <div className="w-40 h-40 overflow-hidden rounded-full">
                            <img
                              className="rounded-full block max-w-full bg-white object-cover z-10 relative"
                              src="/static/img/Taha Image v2.jpg"
                              alt="Avatar"
                            />
                          </div>
                        </figure>

                        <header className="motion-safe:translate-y-4 group-hover:translate-y-0 motion-safe:transition-transform motion-safe:transform-gpu motion-safe:duration-500">
                          <h3 className="font-semibold text-2xl text-center mt-6 text-white relative">
                            Taha Amin
                          </h3>
                          <div className="flex flex-wrap items-center justify-center gap-2 my-3">
                            <Badge variant="secondary">
                              Expert of Web Development
                            </Badge>
                          </div>
                          <p className="text-center group-hover:text-white text-white/40 text-sm relative mx-5 my-2">
                            The frontend wizard of our team, Taha Amin, is a
                            React and Next.js aficionado. With a passion for
                            crafting immersive user interfaces, Taha turns
                            visions into interactive and responsive web
                            applications. His expertise lies in bringing designs
                            to life, creating dynamic and engaging user
                            interfaces that leave a lasting impression. Taha's
                            commitment to staying on the cutting edge of React
                            and Next.js ensures that your digital presence is
                            not only modern but also future-proof.
                          </p>
                        </header>

                        <ul
                          className="flex justify-center space-x-4 mt-32 text-white
                   relative"
                        >
                          <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition">
                            <a
                              href="https://github.com/tahaamin2013"
                              aria-label="Visit me on Github"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                className="h-6 w-6"
                              >
                                <path
                                  fill="currentColor"
                                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                />
                              </svg>
                            </a>
                          </li>
                          <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-200 motion-safe:transition">
                            <a
                              target="_blank"
                              href="#!"
                              aria-label="Visit me on Facebook"
                            >
                              <LiaFacebookMessenger className="h-6 w-6" />
                            </a>
                          </li>
                          <li className="motion-safe:translate-y-[100px] group-hover:translate-y-0 motion-safe:delay-300 motion-safe:transition">
                            <button
                              onClick={() => changeNav("contact", false)}
                              aria-label="Send me a message"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                />
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <br />
                    <div className="flex sm:flex-row flex-col gap-14 mb-6">
                      <div className="sm:w-1/2 w-full">
                        <h5 className="text-white dark:text-dark pb-1 border-b-2 border-boo">
                          Why Choose {siteMetadata.WebName} Solutions?
                        </h5>
                        <Accordion
                          type="single"
                          collapsible
                          className="text-sm w-full h-fit"
                        >
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              Expertise:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Benefit from the combined expertise of Muhammad
                              Husnain in Figma UI/UX and Next.js backend, and
                              Taha Amin's proficiency in React and Next.js
                              frontend development.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              Innovation:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              We thrive on innovation, constantly pushing the
                              boundaries to deliver cutting-edge solutions that
                              set your brand apart.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              Collaboration:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Your success is our success. We believe in
                              fostering strong, collaborative partnerships to
                              achieve the best possible outcomes.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-4">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              Quality:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Our commitment to quality is unwavering. From
                              design to development, we adhere to the highest
                              standards to deliver a flawless end product.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>

                      <div className="sm:w-1/2 w-full">
                        <h5 className="text-white dark:text-dark pb-1 border-b-2 border-boo">
                          Discover the Difference!
                        </h5>

                        <Accordion
                          type="single"
                          collapsible
                          className="text-sm w-full h-fit"
                        >
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-sm text-left px-5 hover:no-underline p-3">
                              Unleashing Lightning-Fast Performance:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Experience the thrill of swift navigation and
                              lightning-quick loading times for an unparalleled
                              user journey.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              Sleek and Responsive Designs:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Our mobile-friendly layouts redefine consistency
                              across devices, providing a visually stunning
                              experience every time.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-3">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              SEO Magic at Your Fingertips:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Elevate your brand's visibility and dominate the
                              online landscape with our expert SEO optimization
                              techniques.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-4">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              Ironclad Security:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Your data and users' privacy are our top
                              priorities. Our fortress-like security measures
                              ensure a worry-free digital environment.
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-5">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              Picture-Perfect Visuals:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Immerse yourself in a world of seamless visual
                              experiences. Our commitment to image optimization
                              means quick-loading, high-quality visuals that
                              leave a lasting impression. Welcome to a new era
                              of online excellence!
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>

                    <p className="text-white/50 dark:text-dark/80">
                      Thank you for considering {siteMetadata.WebName} Solutions
                      for your digital journey. Let's collaborate and turn your
                      ideas into reality!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
