import { client } from "@/libs/microcms";
import { YouTubeEmbed } from "@next/third-parties/google";
import type { Video } from "@/constants/video";
import dayjs from "dayjs";

// microCMSからブログ記事を取得
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
  const { id } = await params; // IDを取得
  const videoItem = await getVideoPost(id);
  console.log(videoItem);

  // YouTubeのURLからビデオIDを抽出
  const videoId = videoItem.youtube_url.split("/").pop();

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 font-medium text-3xl">{videoItem.title}</h1>
        <p className="mb-8 text-gray-600">
          {dayjs(videoItem.createdAt).format("YY.MM.DD")}
        </p>
        <div className="aspect-video w-full">
          <YouTubeEmbed
            videoid={videoId || ""}
            height={400}
            params="controls=1"
          />
        </div>
      </div>
    </div>
  );
}

// 静的パス生成
export async function generateStaticParams() {
  const contentIds = await client.getAllContentIds({ endpoint: "video" });

  return contentIds.map((contentId) => ({
    id: contentId, // 各記事のIDをパラメータとして返す
  }));
}
