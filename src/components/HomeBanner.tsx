import { useContext } from "react";
import { AlexioContext } from "../Context";
import TypingAnimation from "./TypingAnimation";
import Link from "next/link";
import Image from "next/image";

const HomeBanner = () => {
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = () => ("home" === nav ? "" : "page--inactive");
  return (
    <div
    className={`page home-banner white-bg ${activePageClass()}`}
    id={"home"}
    onClick={() => changeNav("home", false)}
  >
      <div className="container-fluid p-0">
        <div className="row no-gutters full-screen">
          <div className="col-lg-3 col-xl-4 blue-bg">
            <div className="d-flex align-items-end home-user-avtar v-center-box">
              <Image width={600} height={0} src="/static/img/user.png" title="" alt="" />
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
                    <div className="btn-bar">
                      <Link href="#" className="btn btn-theme">
                        Download CV
                      </Link>
                    </div>
                  </div>
                  <ul className="social-icons">
                    <li>
                      <Link className="facebook" href="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>{" "}
                    <li>
                      <Link className="twitter" href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>{" "}
                    <li>
                      <Link className="google" href="#">
                        <i className="fab fa-google-plus-g" />
                      </Link>
                    </li>{" "}
                    <li>
                      <Link className="linkedin" href="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
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
