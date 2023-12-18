import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { useContext } from "react";
import Image from "next/image"
import { AlexioContext } from "../Context";
import siteMetadata from "../utils/siteMetaData";


const AboutUs = () => {
  const { nav, changeNav } = useContext(AlexioContext);
  const activePageClass = (name: any) => (name === nav ? "" : "page--inactive");

  return (
    <div
      className={`page about-section bg-darkness dark:bg-light ml-0 gap-0  ${activePageClass(
        "about"
      )}`}
      id="about"
      onClick={() => changeNav("about", false)}
    >
      <div className="p-0">
        <div className="flex sm:flex-row flex-col  !mx-0 h-full">
          <div className="p-0 py-7 px-5 overflow-hidden lg:flex flex-col items-between justify-between hidden sm:hidden lg:block sm:visible md:w-[50%] w-full bg-boo-700 gap-16">
            <div className="bg-white shadow-2xl rounded-3xl text-center flex flex-col justify-center transition-colors h-[40vh] lg:h-[calc(30vh - 70px)]">
              <div>
                <Image
                  src="/static/img/T1.png"
                  width={292} 	
                  height={415}
                  className="object-cover object-top rounded-3xl shadow-2xl !h-40 !w-40 bg-boo-400 mx-auto  transition-all  mt-10  hover:scale-125"
                  alt="avatar"
                />
              </div>

              <h1 className="mt-1 text-3xl font-bold text-black">Taha Amin</h1>

              <section className="flex h-full lg:h-[50%] flex-col gap-4">
                <div className="flex flex-col justify-center items-center h-full">
                  <div className="w-full rounded-lg bg-white text-black text-sm p-4 px-8 pb-4 overflow-hidden">
                    <div className="text-justify h-[90px] overflow-y-auto custom-scrollbar">
                      <p>
                        The frontend wizard of our team, Taha Amin, is a React
                        and Next.js aficionado. With a passion for crafting
                        immersive user interfaces, Taha turns visions into
                        interactive and responsive web applications. His
                        expertise lies in bringing designs to life, creating
                        dynamic and engaging user interfaces that leave a
                        lasting impression. Taha's commitment to staying on the
                        cutting edge of React and Next.js ensures that your
                        digital presence is not only modern but also
                        future-proof.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="bg-white shadow-2xl rounded-3xl text-center flex flex-col justify-center transition-colors h-[40vh] lg:h-[calc(30vh - 70px)]">
              <div>
                <Image
                width={487}
                height={842}
                  src="/static/img/H1.png"
                  className=" object-cover
           object-top
           rounded-3xl
            shadow-2xl
            !h-40
            !w-40
            bg-boo-400
            mx-auto
            transition-all
            mt-12
            hover:scale-125
          "
                  alt="avatar"
                />
              </div>

              <h1 className="mt-12 text-3xl font-bold text-black">
                Muhammad Husnain
              </h1>

              <section className="flex h-full lg:h-[50%] /* Half the height on large screens */ flex-col gap-4">
                <div className="flex flex-col justify-center items-center h-full">
                  {/* Description taking the full height */}
                  <div className="w-full rounded-lg bg-white text-black text-sm p-4 px-8 pb-4 overflow-hidden">
                    <div className="text-justify h-[90px] overflow-y-auto custom-scrollbar">
                      <p>
                        Our design maestro, Muhammad Husnain, is a Figma
                        virtuoso with a keen eye for detail. Specializing in
                        UI/UX design, he transforms concepts into visually
                        stunning and user-friendly interfaces. His proficiency
                        in Figma allows him to sculpt digital landscapes that
                        not only captivate but also ensure a seamless and
                        delightful user experience. Beyond design, Muhammad is
                        the backbone of our backend development, specializing in
                        Next.js. His mastery in translating design into
                        functional, high-performance applications is what sets
                        us apart.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div>
            <div className="h-full mx-3 flex flex-col justify-between items-start">
              <div className="page-scroll">
                <div className="page-content">
                  <div className="section-titel">
                    <h6 className="theme-after text-white">Who we are</h6>
                    <div className="st-title">
                      <h2 className="theme-after text-white dark:text-dark">About US</h2>
                    </div>
                  </div>
                  <div className="flex flex-col text-white dark:text-dark">
                    <p className="tracking-widest capitalize">
                      Welcome to {siteMetadata.WebName} - Crafting Digital
                      Excellence!
                    </p>
                    <p className="text-white/50  dark:text-dark/80">
                      At {siteMetadata.WebName}, we are a dynamic duo of two
                      passionate brothers, Muhammad Husnain and Taha Amin,
                      united by a shared vision to create exceptional digital
                      experiences. With a blend of creativity, expertise, and
                      innovation, we embark on a journey to bring your ideas to
                      life.
                    </p>
                    <br />
                    <p className="font-bold text-white dark:text-dark text-lg">
                      Our Approach:
                    </p>
                    <p className="text-white/50  dark:text-dark/80">
                      At {siteMetadata.WebName}, we believe in a collaborative
                      approach. We work closely with our clients, understanding
                      their unique requirements and goals. By combining our
                      technical prowess with a client-centric mindset, we ensure
                      that every project is a true reflection of your vision.
                    </p>

                    <div className="block sm:block lg:hidden h-fit rounded-sm my-20 gap-32">
                      <div className="bg-white shadow-2xl mb-2  4 rounded-3xl text-center flex flex-col justify-center transition-colors">
                        <div>
                          <Image
                          height={415}
                          width={292}
                            src="/static/img/T1.png"
                            className=" object-cover object-top rounded-3xl shadow-2xl h-32 w-32 bg-boo-400 mx-auto transition-all mt-10 hover:scale-125"
                            alt="avatar"
                          />
                        </div>

                        <h1 className="mt-12 text-3xl font-bold text-black">
                          Taha Amin
                        </h1>

                        <section className="flex h-full lg:h-[50%] /* Half the height on large screens */ flex-col gap-4">
                          <div className="flex flex-col justify-center items-center h-full">
                            {/* Description taking the full height */}
                            <div className="w-full rounded-lg bg-white text-black text-sm p-4 px-8 pb-4 overflow-hidden">
                              <div className="text-justify">
                                <p>
                                  The frontend wizard of our team, Taha Amin, is
                                  a React and Next.js aficionado. With a passion
                                  for crafting immersive user interfaces, Taha
                                  turns visions into interactive and responsive
                                  web applications. His expertise lies in
                                  bringing designs to life, creating dynamic and
                                  engaging user interfaces that leave a lasting
                                  impression. Taha's commitment to staying on
                                  the cutting edge of React and Next.js ensures
                                  that your digital presence is not only modern
                                  but also future-proof.
                                </p>
                              </div>
                              {/* "Learn More" button */}
                            </div>
                          </div>
                        </section>
                      </div>

                      <div className="bg-white shadow-2xl rounded-3xl text-center flex flex-col justify-center transition-colors">
                        <div>
                          <Image
                          width={487}
                          height={842}
                            src="/static/img/H1.png"
                            className=" object-cover
           object-top
           rounded-3xl
            shadow-2xl
            h-40
            w-40
            bg-boo-400
            mx-auto
            transition-all
            mt-10
            hover:scale-125
          "
                            alt="avatar"
                          />
                        </div>

                        <h1 className="mt-12 text-3xl font-bold text-black">
                          Muhammad
                          <br /> Husnain
                        </h1>

                        <section className="flex h-full lg:h-[50%] /* Half the height on large screens */ flex-col gap-4">
                          <div className="flex flex-col justify-center items-center h-full">
                            {/* Description taking the full height */}
                            <div className="w-full rounded-lg bg-white text-black text-sm p-4 px-8 pb-4 overflow-hidden">
                              <div className="text-justify">
                                <p>
                                  Our design maestro, Muhammad Husnain, is a
                                  Figma virtuoso with a keen eye for detail.
                                  Specializing in UI/UX design, he transforms
                                  concepts into visually stunning and
                                  user-friendly interfaces. His proficiency in
                                  Figma allows him to sculpt digital landscapes
                                  that not only captivate but also ensure a
                                  seamless and delightful user experience.
                                  Beyond design, Muhammad is the backbone of our
                                  backend development, specializing in Next.js.
                                  His mastery in translating design into
                                  functional, high-performance applications is
                                  what sets us apart.{" "}
                                </p>
                              </div>
                              {/* "Learn More" button */}
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>

                    <br />
                    <div className="flex sm:flex-row flex-col gap-14 mb-6">
                      <div className="sm:w-1/2 w-full">
                        <h5 className="text-white dark:text-dark pb-1 border-b-2 border-boo">
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
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Benefit from the combined expertise of Muhammad
                              Husnain in Figma UI/UX and Next.js backend, and
                              Taha Amin's proficiency in React and Next.js
                              frontend development.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="item-2">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              Innovation:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              We thrive on innovation, constantly pushing the
                              boundaries to deliver cutting-edge solutions that
                              set your brand apart.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="item-3">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              Collaboration:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Your success is our success. We believe in
                              fostering strong, collaborative partnerships to
                              achieve the best possible outcomes.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="item-4">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              Quality:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Our commitment to quality is unwavering. From
                              design to development, we adhere to the highest
                              standards to deliver a flawless end product.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>

                      <div className="sm:w-1/2 w-full">
                        <h5 className="text-white dark:text-dark pb-1 border-b-2 border-boo">
                          Discover the Difference!
                        </h5>

                        <Accordion
                          type="single"
                          collapsible
                          className="text-sm w-full h-fit"
                        >
                          <AccordionItem value="item-1">
                            <AccordionTrigger className="text-sm text-left px-5 hover:no-underline p-3">
                              Unleashing Lightning-Fast Performance:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Experience the thrill of swift navigation and
                              lightning-quick loading times for an unparalleled
                              user journey.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="item-2">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              Sleek and Responsive Designs:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Our mobile-friendly layouts redefine consistency
                              across devices, providing a visually stunning
                              experience every time.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="item-3">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              SEO Magic at Your Fingertips:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Elevate your brand's visibility and dominate the
                              online landscape with our expert SEO optimization
                              techniques.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="item-4">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              Ironclad Security:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Your data and users' privacy are our top
                              priorities. Our fortress-like security measures
                              ensure a worry-free digital environment.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="item-5">
                            <AccordionTrigger className="text-sm px-5 hover:no-underline p-3">
                              Picture-Perfect Visuals:
                            </AccordionTrigger>
                            <AccordionContent className=" text-white/40 dark:text-dark/80">
                              Immerse yourself in a world of seamless visual
                              experiences. Our commitment to image optimization
                              means quick-loading, high-quality visuals that
                              leave a lasting impression. Welcome to a new era
                              of online excellence!
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                    <p className="text-white/50 dark:text-dark/80">
                      Thank you for considering {siteMetadata.WebName} Solutions
                      for your digital journey. Let's collaborate and turn your
                      ideas into reality!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
