import type { Metadata } from "next";
import { notoSansTC } from "@/lib/fonts";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: {
    template: "%s | 張睿恩 (Rui-En Zhang)",
    default: "張睿恩 (Rui-En Zhang) - 個人網頁",
  },
  description: "張睿恩的個人網頁 - 熱愛程式設計與創新的開發者 | Rui-En Zhang's personal website - A passionate developer",
  keywords: "張睿恩, Rui-En Zhang, 程式設計, 網頁開發, 軟體開發, programming, web development",
  authors: [{ name: "張睿恩 (Rui-En Zhang)" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
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
    <html lang="zh-TW" className="scroll-smooth" style={{ fontFamily: 'var(--font-noto-sans-tc)' }}>
      <body className={`${notoSansTC.className} antialiased`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
