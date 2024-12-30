import type { NewsItem } from "@/constants/news";
import dayjs from "dayjs";
import Link from "next/link";

interface NewsSectionProps {
  data: NewsItem[];
}

const InformationSection = ({ data }: NewsSectionProps) => {
  const latestNews = data.slice(0, 4);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div className="w-24" /> {/* 左側のスペーサー */}
          <h2 className="font-bold text-2xl tracking-wider">INFORMATION</h2>
          <Link
            href="/information"
            className="w-24 text-right text-sm transition-opacity hover:opacity-70"
          >
            VIEW ALL
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-6">
          {latestNews.map((item) => (
            <div
              key={item.id}
              className="flex w-full max-w-2xl items-center gap-4"
            >
              <p className="w-24 text-gray-600 text-sm">
                {dayjs(item.createdAt).format("YY.MM.DD")}
              </p>
              <h3 className="flex-1 text-start">
                <Link
                  href={`/news/${item.id}`}
                  className="transition-opacity hover:opacity-70"
                >
                  {item.title}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
