import Slider from "react-slick";
import { sliderProps } from "../sliderProps";
const Testimonials = () => {
  return (
    <div className="testimonial-section m-30px-t sm-m-20px-t pb-5">
      <div className="sub-title m-30px-b">
        <h2 className="dark-color theme-after">What People Say?</h2>
      </div>
      <Slider {...sliderProps.testimonial} id="client-slider-single">
        <div className="testimonial-col">
          <div className="say">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/avtar1.jpg" alt title />
            </div>
            <div className="name ml-2">
              <span>Jennifer Lutheran</span>
              <label>CEO</label>
            </div>
          </div>
        </div>
        <div className="testimonial-col">
          <div className="say">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/avtar1.jpg" alt title />
            </div>
            <div className="name ml-2">
              <span>Salma Hayek</span>
              <label>CEO</label>
            </div>
          </div>
        </div>
        <div className="testimonial-col">
          <div className="say">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="user">
            <div className="img">
              <img src="static/img/avtar1.jpg" alt title />
            </div>
            <div className="name ml-2">
              <span>Martin Lutheran</span>
              <label>CEO</label>
            </div>
          </div>
        </div>
      </Slider>{" "}
    </div>
  );
};
export default Testimonials;
