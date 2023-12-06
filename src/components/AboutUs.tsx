import Link from "next/link";
import SectionContainer from "./SectionContainer";
import Image from "next/image";
import {
  FileImage,
  LayoutTemplate,
  Smile,
  TabletSmartphone,
  Workflow,
} from "lucide-react";

const AboutUs = () => {
  return (
    <SectionContainer
      name={"about"}
      extraClass="about-section"
      title={"About"}
      subTitle={"WHO I AM"}
      leftImage="static/img/title-1.jpg"
      leftImageTitle={"About Me"}
    >
      <div className="row">
        <div className="col-md-4">
          <Image
            width={300}
            height={100}
            src="/static/img/my-pic.jpg"
            title=""
            alt=""
          />
        </div>
        <div className="col-md-8 md-m-30px-t">
          <div className="about-text">
            <h3 className="dark-color">I'm Alexis Larten</h3>
            <p className="m-0px">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>{" "}
          {/* about-text */}
          <div className="row m-30px-t">
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <Workflow
                  className="icon dark-color theme-after"
                  size={30}
                />
                <div className="feature-content">
                  <h5 className="dark-color">Development</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <FileImage
                  className="icon dark-color theme-after"
                  size={30}
                />
                <div className="feature-content">
                  <h5 className="dark-color">Graphic</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                <LayoutTemplate
                  className="icon dark-color theme-after"
                  size={30}
                />
                <div className="feature-content">
                  <h5 className="dark-color">Web design</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
            <div className="col-md-6 col-sm-6 m-30px-b">
              <div className="feature-box">
                {/* <i className="icon dark-color theme-after ti-mobile" /> */}
                <TabletSmartphone
                  className="icon dark-color theme-after"
                  size={30}
                />
                <div className="feature-content">
                  <h5 className="dark-color">Mobile apps</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* col */}
          </div>{" "}
          {/* row */}
          <div className="btn-bar">
            <Link href="#" className="btn btn-theme">
              Download CV
            </Link>
          </div>
        </div>
      </div>{" "}
      {/* row */}
      {/* 
     ==========================
       Counter
     ==========================
     */}
      <div className="counter-row m-50px-t p-40px-t lg-m-35px-t lg-p-25px-t sm-p-15px-t">
        <div className="row">
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <Smile className="theme-color" size={30}/>
                <div className="count dark-color">375</div>
                <h6>Happy Clients</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-headphone" />
                <div className="count dark-color">375</div>
                <h6>Telephonic Talk</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-camera" />
                <div className="count dark-color">375</div>
                <h6>Photo Capture</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
          <div className="col-md-3 col-sm-6 md-m-15px-tb">
            <div className="counter-col counter-box">
              <div className="counter-data" data-count={375}>
                <i className="theme-color ti-thumb-up" />
                <div className="count dark-color">375</div>
                <h6>Projects</h6>
              </div>
            </div>
          </div>{" "}
          {/* col */}
        </div>{" "}
        {/* row */}
      </div>
    </SectionContainer>
  );
};
export default AboutUs;
