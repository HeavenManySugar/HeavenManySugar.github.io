'use client';

import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// export const metadata: Metadata = {
//   title: "張睿恩 (Rui-En Zhang) - 個人網頁",
//   description:
//     "張睿恩的個人網頁 - 熱愛程式設計與創新的開發者，專注於創造美觀實用的網頁應用程式 | Rui-En Zhang's personal website",
// };

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      {/* 背景裝飾元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="mb-8" variants={itemVariants}>
            <motion.div
              className="w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center relative animate-gradient"
              animate={floatingAnimation}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-4xl font-bold text-white drop-shadow-lg">張</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-xl animate-pulse" />
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6"
            variants={itemVariants}
          >
            嗨！我是{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              張睿恩
            </motion.span>
          </motion.h2>

          <motion.h3
            className="text-2xl md:text-4xl text-gray-600 dark:text-gray-400 mb-6"
            variants={itemVariants}
          >
            Hi! I'm{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Rui-En Zhang
            </motion.span>
          </motion.h3>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            一位熱愛程式設計與創新的開發者
          </motion.p>

          <motion.p
            className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A passionate developer who loves programming and innovation
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
                查看我的作品
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-400 inline-block"
              >
                下載履歷
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 滾動提示 */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">探索更多</span>
            <ChevronDownIcon className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Navigation */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            探索更多
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                href: "/about",
                icon: "👨‍💻",
                title: "關於我",
                description: "了解我的背景與故事",
                gradient: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-100 dark:bg-blue-900"
              },
              {
                href: "/skills",
                icon: "🛠️",
                title: "技能專長",
                description: "查看我的技術能力",
                gradient: "from-green-500 to-green-600",
                bgColor: "bg-green-100 dark:bg-green-900"
              },
              {
                href: "/projects",
                icon: "🚀",
                title: "精選專案",
                description: "探索我的作品集",
                gradient: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-100 dark:bg-purple-900"
              },
              {
                href: "/contact",
                icon: "📬",
                title: "聯絡我",
                description: "讓我們開始合作",
                gradient: "from-yellow-500 to-orange-500",
                bgColor: "bg-yellow-100 dark:bg-yellow-900"
              }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link
                  href={item.href}
                  className="block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-200/50 dark:border-gray-700/50"
                >
                  <motion.div
                    className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-3xl">{item.icon}</span>
                  </motion.div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <motion.div
                    className={`mt-4 h-1 bg-gradient-to-r ${item.gradient} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
