import SectionContainer from "./SectionContainer";
const Services = () => {
  const extraClasses = "service-section resume-section";
  return (
    <SectionContainer
      extraClass={extraClasses}
      name="resume"
      title="My Resume"
      subTitle="History"
      leftImage="static/img/title-2.jpg"
      leftImageTitle="services"
    >
      <div className="row">
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after text-white">Experience</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="text-white">Google</span>
                  <label>OCT 2015 - JUNE 2016</label>
                </div>
                <div className="r-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg ti-briefcase" />
                  <span className="text-white">Apple</span>
                  <label>OCT 2015 - JUNE 2016</label>
                </div>
                <div className="r-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
        <div className="col-md-6">
          <div className="resume-row">
            <h2 className="theme-after text-white">Education</h2>
            <ul>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="text-white">University</span>
                  <label>OCT 2015 - JUNE 2016</label>
                </div>
                <div className="r-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
              </li>
              <li>
                <div className="r-name">
                  <i className="theme-bg fas fa-graduation-cap" />
                  <span className="text-white">Design and Art</span>
                  <label>OCT 2015 - JUNE 2016</label>
                </div>
                <div className="r-info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* col */}
      </div>{" "}
      {/* row */}
      <div className="skill-row m-30px-t sm-m-20px-t">
        <div className="sub-title m-30px-b">
          <h2 className="text-white theme-after">My Skills</h2>
        </div>
        <div className="row">
          <div className="col-md-6 p-30px-r sm-p-15px-r">
            <h3 className="text-white">Design Skills</h3>
            <div className="skills">
              <div className="progress-lt">
                <h6>Coral Draw</h6>
                <span className="theme-bg">92%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "92%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Photoshop</h6>
                <span className="theme-bg">84%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "84%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Illustrator</h6>
                <span className="theme-bg">88%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "88%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
            </div>
          </div>
          <div className="col-md-6 p-30px-l sm-p-15px-l sm-m-30px-t">
            <h3 className="text-white">Coding Skills</h3>
            <div className="skills">
              <div className="progress-lt">
                <h6>HTML5</h6>
                <span className="theme-bg">92%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "92%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>CSS3</h6>
                <span className="theme-bg">84%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "84%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>Javascript</h6>
                <span className="theme-bg">88%</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "88%" }}></div>
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Services;
