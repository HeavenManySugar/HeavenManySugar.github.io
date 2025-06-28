import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "張睿恩 (Rui-En Zhang) - 個人網頁",
  description:
    "張睿恩的個人網頁 - 熱愛程式設計與創新的開發者，專注於創造美觀實用的網頁應用程式 | Rui-En Zhang's personal website",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">張</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            嗨！我是{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              張睿恩
            </span>
          </h2>
          <h3 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
            Hi! I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Rui-En Zhang
            </span>
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            一位熱愛程式設計與創新的開發者，專注於創造美觀實用的網頁應用程式
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            A passionate developer who loves programming and innovation, focusing on creating beautiful and practical web applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              查看我的作品
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              下載履歷
            </a>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">
            探索更多
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              href="/about"
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">👨‍💻</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                關於我
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                了解我的背景與故事
              </p>
            </Link>

            <Link
              href="/skills"
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛠️</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                技能專長
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                查看我的技術能力
              </p>
            </Link>

            <Link
              href="/projects"
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🚀</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                精選專案
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                探索我的作品集
              </p>
            </Link>

            <Link
              href="/contact"
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-3xl">📬</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                聯絡我
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                讓我們開始合作
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
