// 記事詳細ページの生成

import type { NewsItem } from "@/constants/news";
import { client } from "@/libs/microcms";
import dayjs from "dayjs";
import Link from "next/link";

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

export default async function InformationPage() {
  const post = await getInformationPost();

  return (
    <main>
      <div className="min-h-screen bg-white pt-24">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="mb-16 text-center font-light text-4xl tracking-wider">
            INFORMATION
          </h1>

          <div className="space-y-8">
            {post.map((news) => (
              <Link
                key={news.id}
                href={`/information/${news.id}`}
                className="group block border-gray-200 border-b pb-8"
              >
                <div className="flex flex-col space-y-2">
                  <p>{dayjs(news.createdAt).format("YY.MM.DD")}</p>
                  <h2 className="font-medium text-lg transition-colors group-hover:text-gray-600">
                    {news.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
