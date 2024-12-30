import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import type { NewsItem } from "@/constants/news";

interface NewsSectionProps {
  data: NewsItem[];
}

const ImageCarousel = ({ data }: NewsSectionProps) => {
  return (
    <div className="w-full px-4 md:px-6">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto w-full max-w-6xl"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {data.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 sm:basis-1/2 md:pl-4 lg:basis-1/3"
            >
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={item.images.url}
                  alt={item.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
