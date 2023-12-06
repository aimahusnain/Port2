import { useContext } from "react";
import { AlexioContext } from "../Context";
import TypingAnimation from "./TypingAnimation";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter } from 'lucide-react';
import { FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";



const HomeBanner = () => {
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = (page) => (page === nav ? "" : "page--inactive"); // Accepts a parameter
  return (
    <div
      className={`page home-banner white-bg ${activePageClass("home")}`}
      id={"home"}
      onClick={() => changeNav("home", false)}
    >
      <div className="container-fluid p-0">
        <div className="row no-gutters full-screen">
          <div className="col-lg-3 col-xl-4 blue-bg">
            <div className="d-flex align-items-end home-user-avtar v-center-box">
              <Image height={810} width={512} src="/static/img/user.png" title="" alt="" />
            </div>
          </div>
          <div className="col-lg-9 col-xl-8">
            <div className="page-scroll">
              <div className="page-content">
                <div className="v-center-box d-flex align-items-center">
                  <div className="home-text">
                    <h6 className="dark-color theme-after">Hello, There</h6>
                    <h1 className="dark-color blue-after">I'm Alexis Larten</h1>
                    <p>
                      WEB <TypingAnimation />
                    </p>
                    <div>
                      <Link href="#" className="btn btn-theme">
                        Download CV
                      </Link>
                    </div>
                  </div>
                  <ul className="flex flex-row gap-2 absolute bottom-2 right-10">
                    <li className="bg-black transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full"><Link href="#"><Facebook className="fill-white" stroke="0" size={15} /></Link></li>
                    <li className="bg-black transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full"><Link href="#"><Twitter className="fill-white" stroke="0" size={15} /></Link></li>
                    <li className="bg-black transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full"><Link href="#"><FaGooglePlusG className="fill-white" stroke="0" size={15} /></Link></li>
                    <li className="bg-black transition-all duration-500 hover:bg-boo p-2 cursor-pointer rounded-full"><Link href="#"><FaLinkedinIn className="fill-white" stroke="0" size={15} /></Link></li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
