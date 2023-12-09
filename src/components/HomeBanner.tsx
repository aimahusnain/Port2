// import { useContext, useEffect, useState } from "react";
// import { AlexioContext } from "../Context";
// import TypingAnimation from "./TypingAnimation";
// import Image from "next/image";
// import Link from "next/link";
// import { Facebook, Twitter } from "lucide-react";
// import { FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
// import ContactShort from "./ContactShort";
// import siteMetadata from "../utils/siteMetaData";

// const HomeBanner = () => {
//   const activePageClass = (page) => (page === nav ? "" : "page--inactive"); // Accepts a parameter
//   const { changeNav, nav } = useContext(AlexioContext);

//   return (
//     <div
//       className={`page bg-darkness ${activePageClass("home")}`}
//       id={"home"}
//       // onClick={() => changeNav("home", false)}
//     >
//        <div className="md:h-[500px] lg:h-full justify-between items-center flex flex-wrap m-0 gap-0">
//          <div className="lg:w-[40%] md:h-full sm:h-full h-[500px] w-full m-0 mb-10 lg:mb-0 rounded-lg overflow-hidden bg-boo">
//            <img
//             alt="feature"
//             className="flex object-cover object-top sm:h-full w-full"
//             src="/static/img/H1.png"
//           />
//         </div>

//         <div className="flex flex-col lg:py-2 m-0 bg-red-500 w-full lg:w-[1000px] lg:text-left text-left">
//           <div className="h-full flex flex-col justify-between items-start">
//             <div className="home-text px-4">
//               <h6 className="text-white theme-after">Welcome to</h6>
//               <h1 className="text-white theme-after">DevKin Solutions</h1>
//               <p className="text-white">
//                 WEB <TypingAnimation />
//               </p>

//               <div className="flex w-full mt-2 gap-2 flex-row justify-between sm:justify-start items-center">
//                 <div className="">
//                    <button
//                     onClick={() => changeNav("portfolio", false)}
//                     className="bg-pinky w-32 p-1 border-pinky text-black hover:text-white transition-all duration-500 rounded-lg font-bold hover:no-underline"
//                   >
//                     View Portfolio
//                   </button>
//                 </div>

//                 <div className="">
//                   <button
//                     className="bg-pinky w-32 p-1 border-pinky text-black hover:text-white transition-all duration-500 rounded-lg font-bold hover:no-underline"
//                     onClick={() => changeNav("resume", false)}
//                   >
//                     Our Services
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-end flex-row gap-2">
//                <ContactShort />
//              </div>
//            </div>
//          </div>
//        </div>

//       {/* <div className="col-lg-20 mb-12 col-xl-8 mt-2">
//             <div className="h-full flex flex-col justify-between items-start">
//               <div />
//               <div className="home-text px-4">
//                 <h6 className="text-white theme-after">Welcome to</h6>
//                 <h1 className="text-white theme-after">DevKin Solutions</h1>
//                 <p className="text-white">
//                   WEB <TypingAnimation />
//                 </p>

//                 <div className="flex w-full mt-2 gap-2 flex-row justify-between sm:justify-start items-center">
//                   <div className="">
//                     <button
//                       onClick={() => changeNav("portfolio", false)}
//                       className="bg-pinky w-32 p-1 border-pinky text-black hover:text-white transition-all duration-500 rounded-lg font-bold hover:no-underline"
//                     >
//                       View Portfolio
//                     </button>
//                   </div>

//                   <div className="">
//                     <button
//                       className="bg-pinky w-32 p-1 border-pinky text-black hover:text-white transition-all duration-500 rounded-lg font-bold hover:no-underline"
//                       onClick={() => changeNav("resume", false)}
//                     >
//                       Our Services
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-end flex-row gap-2">
//                 <ContactShort />
//               </div>

//             </div>
//           </div> */}

//       {/* <div className="min-h-screen flex items-center justify-between">
//         <div className="container px-0 !mx-0 flex flex-col lg:flex-row">
//           <div className="lg:w-full h-80 gap-0 lg:h-screen flex justify-center lg:justify-between">
//             <div className="lg:h-full w-3/4 lg:w-[500px] bg-boo overflow-hidden">
//               <Image
//                 loading="lazy"
//                 src="/static/img/H1.png"
//                 alt=""
//                 width={400} // Set your desired width here
//                 height={500} // Set your desired height here
//                 layout="responsive"
//                 objectFit="cover"
//                 className="h-full w-full" // Make the image fill its container
//               />
//             </div>
//           </div>

//           <div className="lg:w-full lg:pl-8">
//             <div className="h-full flex flex-col justify-between items-start">
//               <div />
//               <div className="home-text px-4">
//                 <h6 className="text-white theme-after">Welcome to</h6>
//                 <h1 className="text-white theme-after">DevKin Solutions</h1>
//                 <p className="text-white">
//                   WEB <TypingAnimation />
//                 </p>

//                 <div className="flex w-full mt-2 gap-2 flex-row justify-between sm:justify-start items-center">
//                   <div className="">
//                     <button
//                       onClick={() => changeNav("portfolio", false)}
//                       className="bg-pinky w-32 p-1 border-pinky text-black hover:text-white transition-all duration-500 rounded-lg font-bold hover:no-underline"
//                     >
//                       View Portfolio
//                     </button>
//                   </div>

//                   <div className="">
//                     <button
//                       className="bg-pinky w-32 p-1 border-pinky text-black hover:text-white transition-all duration-500 rounded-lg font-bold hover:no-underline"
//                       onClick={() => changeNav("resume", false)}
//                     >
//                       Our Services
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex justify-end flex-row gap-2">
//                 <ContactShort />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };
// export default HomeBanner;

import Image from "next/image";
import { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { AlexioContext } from "../Context";
import siteMetadata from "../utils/siteMetaData";
import ContactShort from "./ContactShort";

const HomeBanner = () => {
  const activePageClass = (page) => (page === nav ? "" : "page--inactive"); // Accepts a parameter
  const { changeNav, nav } = useContext(AlexioContext);

  return (
    <div
      className={`page bg-darkness ${activePageClass("home")}`}
      id={"home"}
      // onClick={() => changeNav("home", false)}
    >
      {/* <div className="md:h-[500px] lg:h-full justify-between items-center flex flex-wrap m-0 gap-0">
         <div className="lg:w-[40%] md:h-full sm:h-full h-[500px] w-full m-0 mb-10 lg:mb-0 rounded-lg overflow-hidden bg-boo">
           <img
    //         alt="feature"
    //         className="flex object-cover object-top sm:h-full w-full"
    //         src="/static/img/H1.png"
    //       />
    //     </div>

    //     <div className="flex flex-col lg:py-2 m-0 bg-red-500 w-full lg:w-[1000px] lg:text-left text-left">
    //       <div className="h-full flex flex-col justify-between items-start">
    //         <div className="home-text px-4">
    //           <h6 className="text-white theme-after">Welcome to</h6>
    //           <h1 className="text-white theme-after">DevKin Solutions</h1>
    //           <p className="text-white">
    //             WEB <TypingAnimation />
    //           </p>

    //           <div className="flex w-full mt-2 gap-2 flex-row justify-between sm:justify-start items-center">
    //             <div className="">
    //               <button
    //                 onClick={() => changeNav("portfolio", false)}
    //                 className="bg-pinky w-32 p-1 border-pinky text-black hover:text-white transition-all duration-500 rounded-lg font-bold hover:no-underline"
    //               >
    //                 View Portfolio
    //               </button>
    //             </div>

    //             <div className="">
    //               <button
    //                 className="bg-pinky w-32 p-1 border-pinky text-black hover:text-white transition-all duration-500 rounded-lg font-bold hover:no-underline"
    //                 onClick={() => changeNav("resume", false)}
    //               >
    //                 Our Services
    //               </button>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex justify-end flex-row gap-2">
    //           <ContactShort />
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
      <div className="container-fluid p-0">
        <div className="row no-gutters full-screen">
          <div className="col-lg-3 overflow-hidden sm:h-screen h-[500px] col-xl-4 bg-boo">
            <div className="d-flex align-items-end home-user-avtar v-center-box">
              <Image
                loading="lazy"
                height={300}
                width={3020}
                src="/static/img/H1.png"
                title=""
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-20 mb-12 col-xl-8 mt-2">
            <div className="h-full flex flex-col justify-between items-start">
              <div />
              <div className="home-text flex flex-col px-4">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                  <span className="text-transparent capitalize bg-clip-text bg-gradient-to-r from-white/50 to-pinky">
                     Welcome to
                  </span>
                </h1>
                <TypeAnimation
                  className="text-white"
                  sequence={[
                    "WEB Designing",
                    2000,
                    "WEB Development",
                    2000,
                    `${siteMetadata.WebName}`,
                    3000,
                  ]}
                  wrapper="h1"
                  speed={60}
                  repeat={Infinity}
                />

                <div className="flex w-full mt-2 gap-2 flex-row justify-between sm:justify-start items-center">
                  <div className="">
                    <button
                      onClick={() => changeNav("portfolio", false)}
                      className="bg-pinky w-32 p-2 border-pinky text-black transition-all duration-500 rounded-lg font-bold hover:no-underline"
                    >
                      View Portfolio
                    </button>
                  </div>

                  <div className="">
                    <button
                      className="w-32 p-1 border-[3px] border-pinky text-white transition-all duration-500 rounded-lg font-bold hover:no-underline"
                      onClick={() => changeNav("resume", false)}
                    >
                      Our Services
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end flex-row gap-2">
                <ContactShort />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
