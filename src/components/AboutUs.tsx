import siteMetadata from "../utils/siteMetaData";
import AboutUsLayout from "./AboutUs-Page Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

const AboutUs = () => {
  return (
    <AboutUsLayout name="about" extraClass="about-section">
      <div className="hidden sm:hidden lg:block lg:w-1/3 xl:w-5/12 gap-0 bg-boo">
        {/* Image */}
        <section className="text-white mb-[-30px]">
          <div className="flex ml-2">
            <div className="flex flex-col">
              <div className="flex mx-8">
                <h3 className="font-bold text-white mt-4">
                  Meet <br />{" "}
                  <span
                    className="underline"
                    style={{
                      textDecorationColor: "white",
                      textDecorationThickness: "4px",
                    }}
                  >
                    Muhammad Husnain
                  </span>
                </h3>
                <div className="mt-6 h-fit w-full">
                  <img
                    className="w-[100px] ml-16 mb-3 h-[100px] object-top object-cover rounded-full"
                    src="static/img/H1.png"
                    alt="Husnain Image"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center ">
                <p className="w-full bg-white rounded-lg text-black mx-8 py-6 pb-4 px-4 text-sm">
                  Our design maestro, Muhammad Husnain, is a Figma virtuoso with
                  a keen eye for detail. Specializing in UI/UX design, he
                  transforms concepts into visually stunning and user-friendly
                  interfaces. His proficiency in Figma allows him to sculpt
                  digital landscapes that not only captivate but also ensure a
                  seamless and delightful user experience. Beyond design,
                  Muhammad is the backbone of our backend development,
                  specializing in Next.js. His mastery in translating design
                  into functional, high-performance applications is what sets us
                  apart.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-white">
          <div className="flex ml-2">
            <div className="flex flex-col">
              <div className="flex mx-8">
                <h3 className="font-bold w-full text-white mt-8">
                  Meet <br />{" "}
                  <span
                    className="underline"
                    style={{
                      textDecorationColor: "white",
                      textDecorationThickness: "4px",
                    }}
                  >
                    Taha Amin
                  </span>
                </h3>
                <div className="mt-6 h-fit w-full">
                  <img
                    className="w-[100px] mb-3 h-[100px] ml-16 object-top object-cover rounded-full"
                    src="static/img/T1.png"
                    alt="Husnain Image"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center ">
                <p className="w-full bg-white rounded-lg text-black mx-8 py-5 pb-3 px-4 text-sm">
                  Meet Taha Amin: The frontend wizard of our team, Taha Amin, is
                  a React and Next.js aficionado. With a passion for crafting
                  immersive user interfaces, Taha turns visions into interactive
                  and responsive web applications. His expertise lies in
                  bringing designs to life, creating dynamic and engaging user
                  interfaces that leave a lasting impression. Taha's commitment
                  to staying on the cutting edge of React and Next.js ensures
                  that your digital presence is not only modern but also
                  future-proof.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="col-lg-20 mb-7 col-xl-8">
        <div className="h-full flex flex-col justify-between items-start">
          <div className="page-scroll">
            <div className="page-content">
              <div className="section-titel">
                <h6 className="theme-after text-white">Who we are</h6>
                <div className="st-title">
                  <h2 className="theme-after text-white">About US</h2>
                </div>
              </div>
              <div className="flex flex-col text-white">
                <p className="tracking-widest capitalize">
                  Welcome to {siteMetadata.WebName} - Crafting Digital
                  Excellence!
                </p>
                <p className="text-white/50">
                  At {siteMetadata.WebName}, we are a dynamic duo of two
                  passionate brothers, Muhammad Husnain and Taha Amin, united by
                  a shared vision to create exceptional digital experiences.
                  With a blend of creativity, expertise, and innovation, we
                  embark on a journey to bring your ideas to life.
                </p>
                <br />
                <p className="font-bold text-white text-lg">Our Approach:</p>
                <p className="text-white/50">
                  At {siteMetadata.WebName}, we believe in a collaborative
                  approach. We work closely with our clients, understanding
                  their unique requirements and goals. By combining our
                  technical prowess with a client-centric mindset, we ensure
                  that every project is a true reflection of your vision.
                </p>
                <div className="block sm:block lg:hidden lg:w-1/3 xl:w-5/12 rounded-sm gap-0 bg-boo">
                  {/* Image */}
                  <section className="text-white mb-[-30px]">
                    <div className="flex ml-2">
                      <div className="flex flex-col">
                        <div className="flex mx-8">
                          <h4 className="font-bold text-white mt-4">
                            Meet <br />{" "}
                            <span
                              className="underline"
                              style={{
                                textDecorationColor: "white",
                                textDecorationThickness: "4px",
                              }}
                            >
                              Muhammad Husnain
                            </span>
                          </h4>
                          <div className="mt-6 h-fit w-full">
                            <img
                              className="w-[100px] ml-9 mb-3 h-[100px] object-top object-cover rounded-full"
                              src="static/img/H1.png"
                              alt="Husnain Image"
                            />
                          </div>
                        </div>
                        <div className="flex justify-center items-center ">
                          <p className="w-full bg-white rounded-lg text-black mx-8 py-6 pb-4 px-4 text-sm">
                            Our design maestro, Muhammad Husnain, is a Figma
                            virtuoso with a keen eye for detail. Specializing in
                            UI/UX design, he transforms concepts into visually
                            stunning and user-friendly interfaces. His
                            proficiency in Figma allows him to sculpt digital
                            landscapes that not only captivate but also ensure a
                            seamless and delightful user experience. Beyond
                            design, Muhammad is the backbone of our backend
                            development, specializing in Next.js. His mastery in
                            translating design into functional, high-performance
                            applications is what sets us apart.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="text-white">
                    <div className="flex ml-2">
                      <div className="flex flex-col">
                        <div className="flex mx-8">
                          <h4 className="font-bold w-full text-white mt-8">
                            Meet <br />{" "}
                            <span
                              className="underline"
                              style={{
                                textDecorationColor: "white",
                                textDecorationThickness: "4px",
                              }}
                            >
                              Taha Amin
                            </span>
                          </h4>
                          <div className="mt-6 h-fit w-full">
                            <img
                              className="w-[100px] mb-3 h-[100px] ml-7 object-top object-cover rounded-full"
                              src="static/img/T1.png"
                              alt="Husnain Image"
                            />
                          </div>
                        </div>
                        <div className="flex justify-center items-center ">
                          <p className="w-full bg-white rounded-lg text-black mx-8 py-5 pb-3 px-4 text-sm">
                            Meet Taha Amin: The frontend wizard of our team,
                            Taha Amin, is a React and Next.js aficionado. With a
                            passion for crafting immersive user interfaces, Taha
                            turns visions into interactive and responsive web
                            applications. His expertise lies in bringing designs
                            to life, creating dynamic and engaging user
                            interfaces that leave a lasting impression. Taha's
                            commitment to staying on the cutting edge of React
                            and Next.js ensures that your digital presence is
                            not only modern but also future-proof.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <br />
                <div className="flex sm:flex-row flex-col gap-14 mb-6">
                  <div className="sm:w-1/2 w-full">
                    <h5 className="text-white pb-1 border-b-2 border-boo">
                      Why Choose {siteMetadata.WebName} Solutions?
                    </h5>
                    <Accordion
                      type="single"
                      collapsible
                      className="text-sm w-full h-fit"
                    >
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                          Expertise:
                        </AccordionTrigger>
                        <AccordionContent className=" text-white/40">
                          Benefit from the combined expertise of Muhammad
                          Husnain in Figma UI/UX and Next.js backend, and Taha
                          Amin's proficiency in React and Next.js frontend
                          development.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                          Innovation:
                        </AccordionTrigger>
                        <AccordionContent className=" text-white/40">
                          We thrive on innovation, constantly pushing the
                          boundaries to deliver cutting-edge solutions that set
                          your brand apart.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                          Collaboration:
                        </AccordionTrigger>
                        <AccordionContent className=" text-white/40">
                          Your success is our success. We believe in fostering
                          strong, collaborative partnerships to achieve the best
                          possible outcomes.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                          Quality:
                        </AccordionTrigger>
                        <AccordionContent className=" text-white/40">
                          Our commitment to quality is unwavering. From design
                          to development, we adhere to the highest standards to
                          deliver a flawless end product.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  <div className="sm:w-1/2 w-full">
                    <h5 className="text-white pb-1 border-b-2 border-boo">
                      Discover the Difference!
                    </h5>

                    <Accordion
                      type="single"
                      collapsible
                      className="text-sm w-full h-fit"
                    >
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                          Unleashing Lightning-Fast Performance:
                        </AccordionTrigger>
                        <AccordionContent className=" text-white/40">
                          Experience the thrill of swift navigation and
                          lightning-quick loading times for an unparalleled user
                          journey.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                          Sleek and Responsive Designs:
                        </AccordionTrigger>
                        <AccordionContent className=" text-white/40">
                          Our mobile-friendly layouts redefine consistency
                          across devices, providing a visually stunning
                          experience every time.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                          SEO Magic at Your Fingertips:
                        </AccordionTrigger>
                        <AccordionContent className=" text-white/40">
                          Elevate your brand's visibility and dominate the
                          online landscape with our expert SEO optimization
                          techniques.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                          Ironclad Security:
                        </AccordionTrigger>
                        <AccordionContent className=" text-white/40">
                          Your data and users' privacy are our top priorities.
                          Our fortress-like security measures ensure a
                          worry-free digital environment.
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5">
                        <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                          Picture-Perfect Visuals:
                        </AccordionTrigger>
                        <AccordionContent className=" text-white/40">
                          Immerse yourself in a world of seamless visual
                          experiences. Our commitment to image optimization
                          means quick-loading, high-quality visuals that leave a
                          lasting impression. Welcome to a new era of online
                          excellence!
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
                <p className="text-white/50">
                  Thank you for considering {siteMetadata.WebName} Solutions for your digital
                  journey. Let's collaborate and turn your ideas into reality!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutUsLayout>
  );
};
export default AboutUs;
