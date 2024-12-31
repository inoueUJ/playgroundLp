import type { Video } from "@/constants/video";
import { client } from "@/libs/microcms";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

// microCMSからビデオ情報取得
async function getVideoPost(): Promise<Video[]> {
  const data = await client.get({
    endpoint: "video",
    queries: {
      fields: "id,title,images,published_at,youtube_url",
    },
  });
  return data.contents;
}

export default async function VideoPage() {
  const videoData = await getVideoPost();
  return (
    <main>
      <div className="min-h-screen bg-white pt-24">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="mb-16 text-center font-light text-4xl tracking-wider">
            VIDEO
          </h1>
          <div className="grid grid-cols-1 gap-5 pb-5 md:grid-cols-2">
            {videoData.map((video) => (
              <Link
                key={video.id}
                href={`/video/${video.id}`}
                className="group"
              >
                <div className="space-y-2">
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <Image
                      src={video.images.url}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-0">
                    <p className="font-normal ">{video.title}</p>
                    <p className="text-gray-500">
                      {dayjs(video.createdAt).format("YY.MM.DD")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
