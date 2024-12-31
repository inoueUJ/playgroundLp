import { client } from "@/libs/microcms";
import { YouTubeEmbed } from "@next/third-parties/google";
import type { Video } from "@/constants/video";
import dayjs from "dayjs";

async function getVideoPost(id: string): Promise<Video> {
  const data = await client.get({
    endpoint: `video/${id}`,
  });
  return data;
}

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const videoItem = await getVideoPost(id);

  const videoId = videoItem.youtube_url.split("/").pop();

  return (
    <main className="min-h-screen bg-white pt-16 sm:pt-20 md:pt-24">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-16 text-center font-light text-4xl tracking-wider">
          {videoItem.title}
        </h1>
        <p className="mb-4 text-gray-600 text-sm sm:mb-6 sm:text-base md:mb-8">
          {dayjs(videoItem.createdAt).format("YY.MM.DD")}
        </p>
        <div className="aspect-video w-full">
          <YouTubeEmbed
            videoid={videoId || ""}
            params="controls=1"
            style="max-width: 100%;"
          />
        </div>
        <div className="mt-8">
          <a
            href="/video"
            className="inline-flex items-center text-gray-600 text-sm hover:text-gray-900"
          >
            ← 一覧に戻る
          </a>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const contentIds = await client.getAllContentIds({ endpoint: "video" });

  return contentIds.map((contentId) => ({
    id: contentId,
  }));
}
