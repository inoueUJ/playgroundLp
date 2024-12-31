import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Video } from "@/constants/video";
import { YouTubeEmbed } from "@next/third-parties/google";
import Link from "next/link";

interface YoutubeCarouselProps {
  data: Video[];
}

const YoutubeCarousel = ({ data }: YoutubeCarouselProps) => {
  return (
    <section className="py-16 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col items-center justify-between sm:flex-row">
          <div className="w-24" /> {/* 左側のスペーサー */}
          <h2 className="font-bold text-2xl tracking-wider ">VIDEO</h2>
          <Link
            href="/video"
            className="text-sm transition-opacity hover:opacity-70 sm:text-base"
          >
            VIEW ALL →
          </Link>
        </div>
      </div>
      <Carousel className="mx-auto max-w-[90vw] sm:max-w-[80vw] md:max-w-4xl">
        <CarouselContent>
          {data.map((video) => (
            <CarouselItem key={video.id}>
              <div className="aspect-video w-full">
                <YouTubeEmbed
                  videoid={video.youtube_url.split("/").pop() ?? ""}
                  params="controls=1"
                  style="max-width: 100%;"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="-left-4 sm:-left-8 md:-left-12" />
          <CarouselNext className="-right-4 sm:-right-8 md:-right-12" />
        </div>
      </Carousel>
    </section>
  );
};

export default YoutubeCarousel;
