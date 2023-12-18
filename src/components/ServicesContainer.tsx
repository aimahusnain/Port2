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
      className={`page ${extraClass} bg-darkness dark:bg-light ml-0 gap-0  ${activePageClass(
        name
      )}`}
      id={name}
      // onClick={() => changeNav(name, false)}
    >
      <div className="p-0">
        <div className="flex sm:flex-row flex-col !mx-0 h-full">
          <div className="p-0 overflow-hidden sm:items-end items-start sm:justify-end justify-end flex flex-col sm:h-screen h-[500px] md:w-[40%] w-full bg-boo-700">
            <Image
            width={487}
            height={842}
              className="m-0 p-0 mt-10 object-cover object-top w-full h-full"
              src="/static/img/H1.png"
              alt=""
            />
            {/* <div className="lg:visible">
            <InsightRoll insights={insights} />
            </div> */}
          </div>
          
          <div className="mb-7 col-xl-8 mt-2">
            <div className="h-full flex flex-col justify-between items-start">
              <div className="page-scroll">
                <div className="page-content">
                  <div className="section-titel">
                    <h6 className="theme-after text-white">{subTitle}</h6>
                    <div className="st-title">
                      <h2 className="theme-after text-white dark:text-dark">{title}</h2>
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
