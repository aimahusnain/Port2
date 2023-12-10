import Link from "next/link";
import SectionContainer from "./SectionContainer";
import { AlexioContext } from "../Context";
import { useContext } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import Slider from "./Slider";
import siteMetadata from "../utils/siteMetaData";



const Services = () => {
  const features = [
        {
          id: 1,
          text: "Dynamic Websites",
          imageUrl: "static/img/portfolio-1.jpg",
        },
        {
          id: 2,
          text: "Static Websites",
          imageUrl: "static/img/portfolio-2.jpg",
        },
      ];
  const { changeNav, toggle, nav } = useContext(AlexioContext);

  return (
    <SectionContainer
      extraClass="service-section resume-section"
      name="resume"
      title="Our Services"
      subTitle="History"
      leftImage="static/img/title-2.jpg"
      leftImageTitle="services"
    >
      <div className="row text-white">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 mt-4">
            <h2 className="text-pinky">
              Crafting Exceptional Web Experiences with React and Next.js
            </h2>
            <p>
              At {siteMetadata.WebName} Solutions, we are passionate about turning your digital
              dreams into reality. As dedicated React and Next.js web
              developers, we specialize in creating robust and innovative
              solutions tailored to your unique needs. Whether you're a startup,
              an established business, or an individual with a vision, our team
              is ready to bring your ideas to life.
            </p>

            <Accordion type="single" collapsible className="text-sm w-full h-fit">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                  Dynamic and Static Web Development
                </AccordionTrigger>
                <AccordionContent className="text-white/40">
                <Slider features={features} />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">Full Stack Development</AccordionTrigger>
                <AccordionContent className="text-white/40">
                Elevate your project with end-to-end solutions. Our full stack development expertise covers both frontend and backend technologies, providing a cohesive and comprehensive web application experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">
                  Tailored Solutions for Every Niche
                </AccordionTrigger>
                <AccordionContent className="text-white/40">
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-sm px-5 hover:no-underline p-3 outline-none">Website Cloning</AccordionTrigger>
                <AccordionContent className="text-white/40">
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            
          </div>

          <div>
            <h2 className="text-pinky">Let's Build Something Extraordinary</h2>
            <p>
              No matter the scope or complexity of your project, our React and
              Next.js experts are ready to take on the challenge. Collaborate
              with us to transform your vision into a stunning, functional, and
              future-proof web solution.
            </p>
            <p>
              Ready to get started?{" "}
              <span>
                <Link href="" onClick={() => changeNav("contact", false)}>
                  Contact
                </Link>
              </span>{" "}
              Us and let's embark on this exciting journey together!
            </p>
            <p>
              Feel free to customize the content based on your specific
              offerings and brand voice.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Services;
