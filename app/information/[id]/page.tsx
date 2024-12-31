import type { NewsItem } from "@/constants/news";
import { client } from "../../../libs/microcms";
import dayjs from "dayjs";
import { Card } from "@/components/ui/card";
import parse from "html-react-parser";

// ブログ記事の型定義

// microCMSから特定の記事を取得
async function getNewsPost(id: string): Promise<NewsItem> {
  const data = await client.get({
    endpoint: `news/${id}`,
  });
  return data;
}

// 記事詳細ページの生成
export default async function NewsDetailPage({
  params,
}: { params: Promise<{ id: string }> }) {
  const { id } = await params; // IDを取得
  const newsItem = await getNewsPost(id);

  return (
    <main>
      <div className="min-h-screen bg-white pt-24 pb-5">
        <div className="container mx-auto max-w-4xl px-4">
          <Card className="overflow-hidden">
            <div className="space-y-8 p-6 md:p-8">
              {/* Date */}
              <p>{dayjs(newsItem.createdAt).format("YY.MM.DD")}</p>
              {/* Title */}
              <h1 className="font-bold text-2xl leading-relaxed md:text-3xl">
                {newsItem.title}
              </h1>

              {/* Image */}
              {newsItem.images && (
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={newsItem.images.url}
                    alt=""
                    width={newsItem.images.width}
                    height={newsItem.images.height}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              {/* Rich Text Content */}
              <div className="prose max-w-none prose-headings:font-medium prose-p:text-gray-700 prose-p:leading-relaxed">
                {parse(newsItem.description ?? "")}
              </div>
            </div>
          </Card>

          {/* Back Button */}
          <div className="mt-8">
            <a
              href="/information"
              className="inline-flex items-center text-gray-600 text-sm hover:text-gray-900"
            >
              ← 一覧に戻る
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

// 静的パスを生成
export async function generateStaticParams() {
  const contentIds = await client.getAllContentIds({ endpoint: "news" });

  return contentIds.map((contentId) => ({
    id: contentId, // 各記事のIDをパラメータとして返す
  }));
}
