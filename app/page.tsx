import Link from "next/link";
import { client } from "../libs/microcms";

// ブログ記事の型定義
type Blog = {
  id: string;
  title: string;
};

// microCMSからブログ記事を取得
async function getBlogPosts(): Promise<Blog[]> {
  const data = await client.get({
    endpoint: "blog",
    queries: {
      fields: "id,title",
      limit: 100,
    },
  });
  return data.contents;
}

export default async function Home() {
  const blogPosts = await getBlogPosts();
  return (
    <main>
      <h1>ブログ記事一覧</h1>
      {/* ブログ記事を表示する */}
      <ul>
        {blogPosts.map((item) => (
          <li key={item.id}>
            <Link href={`/blog/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
