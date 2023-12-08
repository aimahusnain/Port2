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
      onClick={() => changeNav(name, false)}
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

      <div className="container-fluid m-ml-0 gap-0 p-0">
        <div className="row no-gutters full-screen">
          <div className="col-lg-3 overflow-hidden sm:h-screen h-[500px] col-xl-4 bg-boo">
            <div className="d-flex ml-0 gap-0 align-items-end home-user-avtar v-center-box">
              <Image
                loading="lazy"
                height={300}
                width={3020}
                src="/static/img/H1.png"
                title=""
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-20 mb-7 col-xl-8">
            <div className="h-full flex flex-col justify-between items-start">
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
    </div>
  );
};
export default SectionContainer;
