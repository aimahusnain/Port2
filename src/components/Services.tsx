import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import Link from "next/link";
import { useContext } from "react";
import { AlexioContext } from "../Context";
import siteMetadata from "../utils/siteMetaData";
import ServicesContainer from "./ServicesContainer";
import Slider from "./Slider";

const Services = () => {
  const features = [
    {
      id: 1,
      text: "Static Websites",
      description:
        "For lightning-fast performance and simplicity, we excel in crafting static websites that deliver content with speed and efficiency.",
    },
    {
      id: 2,
      text: "Dynamic Websites",
      description:
        "Harness the power of real-time updates and interactive user interfaces. Our dynamic web development services using React and Next.js ensure seamless functionality and engaging user experiences.",
    },
    
  ];

  const { changeNav } = useContext(AlexioContext);

  return (
    <ServicesContainer
      extraClass="service-section !m-0 !gap-0 resume-section"
      name="resume"
      title="Our Services"
      subTitle="History"
      leftImage="static/img/title-2.jpg"
      leftImageTitle="services"
    >
      <div className="row text-white dark:text-dark m-0 gap-0">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl text-boo-700">
              Crafting Exceptional Web Experiences with React and Next.js
            </h3>
            <p>
              At {siteMetadata.WebName} Solutions, we are passionate about
              turning your digital dreams into reality. As dedicated React and
              Next.js web developers, we specialize in creating robust and
              innovative solutions tailored to your unique needs. Whether you're
              a startup, an established business, or an individual with a
              vision, our team is ready to bring your ideas to life.
            </p>

            <div className="flex sm:flex-row flex-col w-full sm:gap-6 gap-0">
              <Accordion
                type="single"
                collapsible
                className="text-sm sm:w-1/2 w-full h-fit"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm px-5 text-left hover:no-underline p-3 outline-none">
                    Dynamic and Static Web Development
                  </AccordionTrigger>
                  <AccordionContent className="text-white/40 dark:text-dark/80">
                    <Slider features={features} />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                    Full Stack Development
                  </AccordionTrigger>
                  <AccordionContent className="text-white/40 dark:text-dark/80">
                    Elevate your project with end-to-end solutions. Our full
                    stack development expertise covers both frontend and backend
                    technologies, providing a cohesive and comprehensive web
                    application experience.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                    Blog Development
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                    Share your thoughts and stories with the world through a
                    custom-tailored blog that suits your style and vision.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                    Ecommerce Websites
                  </AccordionTrigger>

                  <AccordionContent className="text-white/50 dark:text-dark/80">
                    Open up new avenues for your business with an online store
                    that is not only visually appealing but also optimized for
                    seamless transactions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                    SaaS Applications
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                    Take your software ideas to the next level with our SaaS
                    development services, built to scale and adapt to your
                    growing user base.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                    Affiliate Websites
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                    Monetize your platform with affiliate marketing strategies,
                    implemented seamlessly into a website designed for
                    conversions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                    Portfolio Websites
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                    Showcase your work in style. Our portfolio websites are
                    crafted to reflect your unique identity and leave a lasting
                    impression.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                    Educational Course Selling Websites
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                    Empower your educational initiatives with a platform
                    designed for intuitive course browsing, enrollment, and
                    learning.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion
                type="single"
                collapsible
                className="text-sm sm:w-1/2 w-full h-fit"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                    Forum or Community Websites
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                    Foster engagement and connection among your audience with a
                    feature-rich forum or community website.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                    News or Magazine Websites
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                    Stay at the forefront of information delivery with a news or
                    magazine website that balances speed, aesthetics, and
                    content presentation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                    Business Websites{" "}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                    Establish a strong online presence for your business with a
                    website that communicates your brand values and offerings
                    effectively.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                    Non-Profit Websites
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                    Amplify your cause with a purpose-driven website that
                    encourages support and engagement from your audience.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                    Review Websites
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                    Enable informed decision-making by providing a user-friendly
                    platform for reviews and ratings.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                    Event Websites
                  </AccordionTrigger>
                  <AccordionContent className="text-white/50 dark:text-dark/80">
                    Create anticipation and buzz for your events with a website
                    that highlights details, encourages registration, and
                    enhances overall attendee experience.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                    Website Cloning
                  </AccordionTrigger>
                  <AccordionContent className="text-white/40 dark:text-dark/80">
                    Inspired by a website you love? We can recreate its magic
                    with our website cloning services. Maintain the essence of
                    what you admire while tailoring it to your specific
                    requirements.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-boo-700">Let's Build Something Extraordinary</h3>
            <p className="text-white/50 dark:text-dark/80">
              No matter the scope or complexity of your project, our React and
              Next.js experts are ready to take on the challenge. Collaborate
              with us to transform your vision into a stunning, functional, and
              future-proof web solution.
            </p>
            <p>
              Ready to get started?{" "}
              <span>
                <p className=" text-blue-800 hover:text-blue-700 underline inline-block cursor-pointer" onClick={() => changeNav("contact", false)}>
                  Contact
                </p>
              </span>{" "}
              Us and let's embark on this exciting journey together!
            </p>
            <p className="text-white/50">
              Feel free to customize the content based on your specific
              offerings and brand voice.
            </p>
          </div>
        </div>
      </div>
    </ServicesContainer>
  );
};
export default Services;
