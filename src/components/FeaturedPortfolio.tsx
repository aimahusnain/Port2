import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";

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
                className="object-cover object-left w-[420px] h-[340px] overflow-hidden block"
                src={imageSrcs[0]}
              />
            </a>
          </DialogTrigger>
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
        <div className="pb-6 text-center">
          <h3 className="text-xs my-4 title-font mb-1">{category}</h3>
          <h2 className="title-font text-lg font-medium">{title}</h2>
          <p className="mt-1 my-4">{description}</p>
        </div>
      </div>
    </li>
  );
};

export default PortfolioBox;
