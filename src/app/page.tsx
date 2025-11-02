'use client';

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import MotionWrapper from "@/components/MotionWrapper";

export default function Home() {
  useEffect(() => {
    // 禁用瀏覽器的自動滾動恢復
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // 滾動到頂部
    window.scrollTo(0, 0);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 12, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />

      {/* Hero Section - HIG Design */}
      <section className="container mx-auto px-6 lg:px-8 py-24 md:py-32 border-b border-gray-200 dark:border-gray-800 relative z-10">
        <MotionWrapper
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.12,
            delayChildren: 0.2
          }}
        >
          {/* 頂部標籤 */}
          <MotionWrapper
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
          >
            <SparklesIcon className="w-4 h-4" />
            <span>歡迎來訪</span>
          </MotionWrapper>

          {/* 主標題 - 清晰的視覺層級 */}
          <MotionWrapper
            type="h1"
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
            variants={itemVariants}
          >
            我是 <span className="text-blue-600 dark:text-blue-400">張睿恩</span>
          </MotionWrapper>

          <MotionWrapper
            type="h2"
            className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6"
            variants={itemVariants}
          >
            全端開發者
          </MotionWrapper>

          {/* 描述文字 */}
          <MotionWrapper
            type="p"
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xl"
            variants={itemVariants}
          >
            專注於打造高效、優雅的應用程式。透過創新的設計與紮實的技術，將想法化為現實。
          </MotionWrapper>

          {/* 主要行動按鈕 - 清晰且易於識別 */}
          <MotionWrapper
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <MotionWrapper
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-lg font-medium transition-colors duration-200"
              >
                查看作品
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </MotionWrapper>
            <MotionWrapper
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3.5 rounded-lg font-medium transition-colors duration-200"
              >
                了解更多
              </Link>
            </MotionWrapper>
          </MotionWrapper>
        </MotionWrapper>
      </section>

      {/* Navigation Grid - HIG Design with Clear Hierarchy */}
      <section className="container mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <MotionWrapper
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{
            staggerChildren: 0.12,
            delayChildren: 0.2
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl"
        >
          {/* Section Title */}
          <MotionWrapper
            type="h2"
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            探索內容
          </MotionWrapper>
          <MotionWrapper
            type="p"
            className="text-lg text-gray-600 dark:text-gray-400 mb-12"
            variants={itemVariants}
          >
            了解更多關於我的背景、技能和作品
          </MotionWrapper>

          {/* Navigation Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                href: "/about",
                icon: "👨‍‍",
                title: "關於我",
                description: "背景故事與專業經歷"
              },
              {
                href: "/skills",
                icon: "🛠️",
                title: "技能專長",
                description: "技術能力與工具掌握"
              },
              {
                href: "/projects",
                icon: "🚀",
                title: "精選專案",
                description: "代表作品與案例"
              },
              {
                href: "/contact",
                icon: "✉️",
                title: "聯絡我",
                description: "尋求合作或交流"
              }
            ].map((item) => (
              <MotionWrapper
                key={item.href}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Link
                  href={item.href}
                  className="block p-6 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 mt-0.5" />
                  </div>
                </Link>
              </MotionWrapper>
            ))}
          </div>
        </MotionWrapper>
      </section>

      <Footer />
    </div>
  );
}
