import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import Image from "next/image";
import { useContext } from "react";
import { AlexioContext } from "../../Context";
import siteMetadata from "../../utils/siteMetaData";
import { Badge } from "../ui/badge";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { LiaFacebookMessenger } from "react-icons/lia";
const TPC = ({ height, mtopicons, scale }) => {
  const { nav, changeNav } = useContext(AlexioContext);

  return (
    <div
      className={`w-full flex items-center justify-center flex-col ${height} max-h-full !max-w-full rounded-xl text-trueGray-800 dark:text-trueGray-400 overflow-hidden group motion-safe:transition-all motion-safe:duration-700 m-0 p-0`}
    >
      <figure className={`relative w-40 h-40 m-0 mx-auto rounded-full outline outline-offset-4 outline-white before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-pinky-500 before:-z-[1] group-hover:before:scale-[${scale}] motion-safe:before:transition-all motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:outline-pinky-400`}>
        <div className="w-40 h-40 overflow-hidden rounded-full">
          <Image
            fill
            className="rounded-full block max-w-full bg-white object-cover z-10 relative object-top"
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
          The frontend wizard of our team, Taha Amin, is a React and Next.js
          aficionado. With a passion for crafting immersive user interfaces,
          Taha turns visions into interactive and responsive web applications.
          His expertise lies in bringing designs to life, creating dynamic and
          engaging user interfaces that leave a lasting impression. Taha's
          commitment to staying on the cutting edge of React and Next.js ensures
          that your digital presence is not only modern but also future-proof.
        </p>
      </header>

      <ul
        className={`flex justify-center space-x-4 ${mtopicons} text-white relative`}
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
          <a target="_blank" href="#!" aria-label="Visit me on Facebook">
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
  );
};

export default TPC;
