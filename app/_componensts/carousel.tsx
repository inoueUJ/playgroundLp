"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

type News = {
  id: string;
  title: string;
  description: string;
  images: { url: string; height: number; width: number };
  publishDate?: string;
};

export function NewsCarousel({ items }: { items: News[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="mx-auto w-full max-w-screen-xl"
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <Link href={`/news/${item.id}`}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={item.images.url}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute right-0 bottom-0 left-0 bg-black bg-opacity-50 p-4">
                      <h3 className="line-clamp-2 font-semibold text-lg text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
