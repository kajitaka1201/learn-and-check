import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui-elements/header";
import Footer from "@/components/ui-elements/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Learn and Check -解答欄でテスト形式で確認、覚えたらチェックする効率的なweb単語帳-", template: "%s | Learn and Check" },
  description: "主にPC向けの単語帳サイトです。覚えたかどうか保存するチェックボックス機能と覚えたか入力して確認できる解答欄機能で定着度を高めます。",
  verification: { google: "_1nF30lL6Uvm4efDY2ItUqyBeB-rB69TfEtR8tzrPqI" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="h-full grid content-between">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
