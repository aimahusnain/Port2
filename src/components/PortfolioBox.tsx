import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
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
        <div className="block cursor-pointer relative h-[200px] w-[300px] rounded overflow-hidden">
          <Dialog>
            <DialogTrigger asChild>
              <Image
                fill
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={imageSrcs[0]}
              />
            </DialogTrigger>
            {/* Adjusted size with Tailwind classes */}
            <DialogContent className="my-8 p-4 flex items-center justify-center">
              <Carousel className="min-w-full py-6">
                <CarouselContent>
                  {imageSrcs.map((src, index) => (
                    <CarouselItem key={index}>
                      <img
                        alt="ecommerce"
                        className="object-center max-w-full h-96"
                        src={src}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="mx-14" />
                <CarouselNext className="mx-14" />
              </Carousel>
            </DialogContent>
          </Dialog>
        </div>
        <div className="mt-4 max-w-fit">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize">
            {category}
          </h3>
          <Link href={`https://${webURL}`} target="_blank">
            <h2 className="text-gray-900 flex items-center gap-1 hover:text-blue-500 w-fit title-font text-lg font-medium">
              {title}
              <FaExternalLinkAlt />
            </h2>
          </Link>
          <p className="mt-1">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default PortfolioBox;
