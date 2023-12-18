import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
    <li className={`text-white ${black} portfolio-item ${category}`}>
      <div className="p-4 w-full">
        <div className="block cursor-pointer relative h-[264px] w-[320px] rounded overflow-hidden">
          <Dialog>
            <DialogTrigger asChild>
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={imageSrcs[0]}
              />
            </DialogTrigger>
            {/* Adjusted size with Tailwind classes */}
            <DialogContent className="w-11/12 md:w-3/4 lg:max-w-3xl xl:w-1/3 2xl:w-1/4 mx-auto my-8 p-4">
              <Carousel showArrows={true} showStatus={true} showThumbs={true}>
                {imageSrcs.map((src, index) => (
                  <div key={index}>
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
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize">
            {category}
          </h3>
          <Link href={`https://${webURL}`} target="_blank">
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {title}
            </h2>
          </Link>
          <p className="mt-1">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default PortfolioBox;
