import { useContext } from "react";
import { AlexioContext } from "../Context";

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
      className={`page ${extraClass} white-bg ${activePageClass(name)}`}
      id={name}
      onClick={() => changeNav(name, false)}
    >
      {" "}
      <div className="bg-darkness container-fluid p-0">
        <div className="row no-gutters">  
          <div
            className="col-lg-3 col-xl-4 page-title"
            style={{ backgroundImage: `url(${leftImage})` }}
          >
            <div className="v-center-box d-flex align-items-end">
              <h2>{leftImageTitle ? leftImageTitle : title}</h2>
            </div>
          </div>
          <div className="col-lg-9 col-xl-8">
            <div className="">
              <div className="page-content">
                {/* 
      ==========================
        Page Titel
      ==========================
      */}
                <div className="section-titel">
      <h6 className="theme-after text-white">{subTitle}</h6>
      <div className="st-title">
        <h2 className="theme-after text-white">{title}</h2>
      </div>
    </div>
                {/* 
      ==========================
        Contact Us
      ==========================
      */}
                {children}
              </div>{" "}
              {/* page-content */}
            </div>{" "}
            {/* page-scroll  */}
          </div>
        </div>{" "}
        {/* row */}
      </div>
    </div>
  );
};
export default SectionContainer;
