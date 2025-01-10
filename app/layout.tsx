import "./globals.css";
import Footer from "./_components/footer";
import Header from "./_components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boss baby - 福岡発3ピースギターロックバンド",
  description:
    "平均年齢22歳、福岡発・3ピースギターロックバンド Boss baby の公式サイト",
  keywords:
    "Boss baby, ロックバンド, 福岡, ギターロック, しんのすけ, かいり, りょうすけ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
