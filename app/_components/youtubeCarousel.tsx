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
    <section className="min-h-screen bg-white pt-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div className="w-24" />
          <h2 className="font-bold text-2xl tracking-wider">VIDEO</h2>
          <Link
            href="/video"
            className="w-24 text-right text-sm transition-opacity hover:opacity-70"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
      <Carousel className="mx-auto max-w-4xl">
        <CarouselContent>
          {data.map((video) => (
            <CarouselItem key={video.id}>
              <div className="aspect-video w-full items-center">
                <YouTubeEmbed
                  videoid={video.youtube_url.split("/").pop() ?? ""}
                  height={400}
                  params="controls=1"
                  style="max-width: 100%;"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </div>
      </Carousel>
    </section>
  );
};

export default YoutubeCarousel;
