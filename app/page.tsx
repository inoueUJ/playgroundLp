import type { NewsItem } from "@/constants/news";
import { client } from "@/libs/microcms";
import Image from "next/image";
import InformationSection from "./_components/informationSection";
import type { Video } from "@/constants/video";
import YoutubeCarousel from "./_components/youtubeCarousel";
// import ImageCarousel from "./_components/imageCarousel";

// microCMSからブログ記事を取得
async function getInformationPost(): Promise<NewsItem[]> {
  const data = await client.get({
    endpoint: "news",
    queries: {
      fields: "id,publishedAt,title,description,images,publishDate",
    },
  });
  return data.contents;
}
// microCMSからVideo記事を取得
async function getVideoPost(): Promise<Video[]> {
  const data = await client.get({
    endpoint: "video",
    queries: {
      fields: "id,title,images,published_at,youtube_url",
    },
  });
  return data.contents;
}

export default async function Home() {
  const infoData = await getInformationPost();
  const videoData = await getVideoPost();

  return (
    <main>
      {/* ファーストビュー */}
      <div className="relative h-[50vh] w-full sm:h-[60vh] md:h-[70vh] lg:h-screen">
        <Image
          src="/top_img.webp"
          alt="Band Hero Image"
          layout="fill"
          objectFit="cover"
          priority
          sizes="100vw"
        />
      </div>
      <InformationSection data={infoData} />
      <YoutubeCarousel data={videoData} />
    </main>
  );
}
