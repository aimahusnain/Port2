import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
const PortfolioBox = ({
  imageSrcs,
  black,
  webURL,
  title,
  category,
  description,
}: {
  category: string;
  imageSrcs: string[];
  webURL?: string;
  title: string;
  description: any;
  black: any;
}) => {
  return (
    <li className={`!max-h-full text-white ${black}`}>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <a className="cursor-pointer block relative h-64 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-[420px] h-[340px] overflow-hidden block"
                src={imageSrcs[0]}
              />
            </a>
          </DialogTrigger>
          {/* Adjusted size with Tailwind classes */}
          <DialogContent className="w-11/12 md:w-3/4 lg:max-w-3xl xl:w-1/3 2xl:w-1/4 mx-auto my-8 p-4">
            <Carousel showArrows={true} showStatus={true} showThumbs={true}>
              {imageSrcs.map((src, index) => (
                <div key={index} className="w-full">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={src}
                  />
                </div>
              ))}
            </Carousel>
          </DialogContent>
        </Dialog>
        <div className="my-4 pb-6 text-center">
          <h3 className="text-xs my-4 title-font mb-1">{category}</h3>
          <h2 className="title-font text-lg font-medium">{title}</h2>
          <p className="mt-1 my-4">{description}</p>
        </div>
      </div>

      {/* <div className="h-full border-2 border-gray-200 bg-red-500 border-opacity-60 rounded-lg overflow-hidden !max-w-[95%]">
        <img
          className="lg:h-48 md:h-36 bg-green-500 !max-w-full object-cover object-center"
          src={imageSrcs[0]}
          alt="blog"
        />
        <div className="text-left bg-purple-600">
          <h2 className="text-xs font-medium text-gray-400 mb-1">{category}</h2>
          <h1 className="text-lg font-medium text-gray-900 mb-3">
            {title} 
          </h1>
          <p className="leading-relaxed mb-3">{description}</p>
        </div>
      </div> */}

      {/* <div>
      <div className="cursor-pointer relative -left-0 -right-0 rounded h-[200px] w-[300px] bg-emerald-500">
                <Image
                fill
                  alt="ecommerce"
                  className="object-cover object-center bg-red-500 h-[200px] w-[300px]"
                  src={imageSrcs[0]}
                />
          </div>
          
        <div className="text-left">
          <h3 className="text-gray-500 text-xs tracking-widest capitalize">
            {category}
          </h3>
          <Link href={`https://${webURL}`} target="_blank">
            <h2 className="text-white flex items-center gap-1 hover:text-blue-500 text-lg font-medium">
              {title}
            //   <FaExternalLinkAlt />
            </h2>
          </Link>
          <p>{description}</p>
        </div>
      </div> */}
    </li>
  );
};

export default PortfolioBox;
