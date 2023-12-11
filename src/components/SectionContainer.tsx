import { useContext } from "react";
import { AlexioContext } from "../Context";
import ContactShort from "./ContactShort";
import TypingAnimation from "./TypingAnimation";
import Image from "next/image";

const SectionContainer = ({
  extraClass,
  name,
  children,
  title,
  subTitle,
  leftImage,
  leftImageTitle,
}) => {
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = (name: any) => (name === nav ? "" : "page--inactive");
  return (
    <div
      className={`page ${extraClass} bg-darkness ml-0 gap-0  ${activePageClass(
        name
      )}`}
      id={name}
      // onClick={() => changeNav(name, false)}
    >
      {/* <div className="bg-darkness container-fluid full-screen p-0">
        <div className="row no-gutters">
          <div
            className="col-lg-3 col-xl-4 page-title bg-boo"
            style={{ backgroundImage: `url(${leftImage})` }}
          >
            <div className="v-center-box d-flex align-items-end ">
              <h2>{leftImageTitle ? leftImageTitle : title}</h2>
            </div>
          </div>
          <div className="col-lg-9 col-xl-8">
            <div className="">
              <div className="page-content">
                <div className="section-titel">
                  <h6 className="theme-after text-white">{subTitle}</h6>
                  <div className="st-title">
                    <h2 className="theme-after text-white">{title}</h2>
                  </div>
                </div>

                {children}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="p-0">
        <div className="flex sm:flex-row flex-col !mx-0 h-full">
          <div className="p-0 overflow-hidden sm:items-end items-start sm:justify-end justify-end flex flex-col sm:h-screen h-[500px] md:w-[50%] w-full bg-boo-700">
            <img
              className="m-0 p-0 mt-10 object-cover object-top w-full h-full"
              loading="lazy"
              src="/static/img/H1.png"
              alt=""
            />
          </div>

          <div className="h-full -m-6 mx-3 flex flex-col justify-between items-start">
            <div className="page-scroll">
              <div className="page-content">
                <div className="section-titel">
                  <h6 className="theme-after text-white">{subTitle}</h6>
                  <div className="st-title">
                    <h2 className="theme-after text-white">{title}</h2>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionContainer;
