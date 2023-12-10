import Image from "next/image";
import { useContext } from "react";
import { AlexioContext } from "../Context";
import InsightRoll from "./(blog)/About/InsightRoll";

const insights = [
  "Blog Development",
  "Ecommerce Websites",
  "SaaS Applications",
  "Affiliate Websites",
  "Portfolio Websites",
  "Educational Course Selling Websites",
  "Forum or Community Websites",
  "News or Magazine Websites",
  "Business Websites",
  "Non-Profit Websites",
  "Review Websites",
  "Event Websites"
];

const ServicesContainer = ({
  extraClass,
  name,
  children,
  title,
  subTitle,
  leftImage,
  leftImageTitle
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
      <div className="container-fluid !m-0 p-0">
        <div className="row no-gutters !m-0 full-screen">
          <div className="col-lg-3 m-0 overflow-hidden sm:h-screen h-[455px] col-xl-4 bg-boo">
            <div className=" flex flex-col justify-end align-items-end home-user-avtar v-center-box">
              <Image
                className=""
                loading="lazy"
                height={300}
                width={800}
                src="/static/img/H1.png"
                title=""
                alt=""
              />
              <div className="sm:hidden lg:block">
                <InsightRoll insights={insights} />
              </div>
            </div>
          </div>
          
          <div className="col-lg-20 mb-7 col-xl-8 mt-2">
            <div className="h-full flex flex-col justify-between items-start">
              <div className="sm:block lg:hidden ">
                <InsightRoll insights={insights} />
              </div>

              <div className="page-scroll -mt-12">
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
export default ServicesContainer;
