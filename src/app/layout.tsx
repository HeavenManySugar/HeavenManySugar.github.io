import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "張睿恩 (Rui-En Zhang) - 個人網頁",
  description: "張睿恩的個人網頁 - 熱愛程式設計與創新的開發者 | Rui-En Zhang's personal website - A passionate developer",
  keywords: "張睿恩, Rui-En Zhang, 程式設計, 網頁開發, 軟體開發, programming, web development",
  authors: [{ name: "張睿恩 (Rui-En Zhang)" }],
  openGraph: {
    title: "張睿恩 (Rui-En Zhang) - 個人網頁",
    description: "熱愛程式設計與創新的開發者",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
