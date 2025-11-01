import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import MotionWrapper from "@/components/MotionWrapper";

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* 背景裝飾元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <MotionWrapper
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-amber-200 to-rose-200 rounded-full opacity-30 blur-3xl"
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
        <MotionWrapper
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-orange-300 to-rose-400 rounded-full opacity-20 blur-3xl"
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
        <MotionWrapper
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MotionWrapper className="mb-8" variants={itemVariants}>
            <MotionWrapper
              className="w-32 h-32 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-full mx-auto mb-6 flex items-center justify-center relative shadow-lg shadow-rose-200/40"
              animate={floatingAnimation}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-4xl font-bold text-white drop-shadow-lg">張</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 opacity-50 blur-xl" />
            </MotionWrapper>
          </MotionWrapper>

          <MotionWrapper
            type="h2"
            className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6"
            variants={itemVariants}
          >
            嗨！我是{" "}
            <MotionWrapper
              type="span"
              className="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent whitespace-nowrap font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              張睿恩
            </MotionWrapper>
          </MotionWrapper>

          <MotionWrapper
            type="h3"
            className="text-2xl md:text-4xl text-gray-600 dark:text-gray-400 mb-6"
            variants={itemVariants}
          >
            Hi! I&apos;m{" "}
            <MotionWrapper
              type="span"
              className="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent whitespace-nowrap font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Rui-En Zhang
            </MotionWrapper>
          </MotionWrapper>

          <MotionWrapper
            type="p"
            className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            一位熱愛程式設計與創新的開發者
          </MotionWrapper>

          <MotionWrapper
            type="p"
            className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A passionate developer who loves programming and innovation
          </MotionWrapper>

          <MotionWrapper
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <MotionWrapper
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/projects"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-orange-200/60 hover:shadow-orange-300/70 inline-block"
              >
                查看我的作品
              </Link>
            </MotionWrapper>
            {/* <MotionWrapper
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
            </MotionWrapper> */}
          </MotionWrapper>
        </MotionWrapper>

        {/* 滾動提示 */}
        <MotionWrapper
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <MotionWrapper
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-amber-500"
          >
            <span className="text-sm mb-2">探索更多</span>
            <ChevronDownIcon className="w-6 h-6" />
          </MotionWrapper>
        </MotionWrapper>
      </section>

      {/* Quick Navigation */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <MotionWrapper
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MotionWrapper
            type="h3"
            className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            探索更多
          </MotionWrapper>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                href: "/about",
                icon: "👨‍💻",
                title: "關於我",
                description: "了解我的背景與故事",
                bgColor: "bg-amber-100 dark:bg-amber-900/40",
                accent: "from-amber-500 to-orange-500",
                hoverText: "group-hover:text-amber-600 dark:group-hover:text-amber-400"
              },
              {
                href: "/skills",
                icon: "🛠️",
                title: "技能專長",
                description: "查看我的技術能力",
                bgColor: "bg-emerald-100 dark:bg-emerald-900/40",
                accent: "from-emerald-500 to-teal-500",
                hoverText: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
              },
              {
                href: "/projects",
                icon: "🚀",
                title: "精選專案",
                description: "探索我的作品集",
                bgColor: "bg-orange-100 dark:bg-orange-900/40",
                accent: "from-orange-500 to-amber-500",
                hoverText: "group-hover:text-orange-600 dark:group-hover:text-orange-400"
              },
              {
                href: "/contact",
                icon: "📬",
                title: "聯絡我",
                description: "讓我們開始合作",
                bgColor: "bg-rose-100 dark:bg-rose-900/40",
                accent: "from-rose-500 to-orange-500",
                hoverText: "group-hover:text-rose-600 dark:group-hover:text-rose-400"
              }
            ].map((item, index) => (
              <MotionWrapper
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
                  <MotionWrapper
                    className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-3xl">{item.icon}</span>
                  </MotionWrapper>
                  <h4 className={`text-xl font-semibold text-gray-800 dark:text-white mb-3 transition-colors ${item.hoverText}`}>
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <MotionWrapper
                    className={`mt-4 h-1 bg-gradient-to-r ${item.accent} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  />
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
