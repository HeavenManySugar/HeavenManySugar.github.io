'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
import { motion } from "framer-motion";

export default function ProjectsClient() {
    // 主要專案數據
    const featuredProjects = [
        {
            title: "個人網站",
            description: "使用 Next.js 和 Tailwind CSS 建立的響應式個人網站，展示個人技能與專案作品。",
            technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
            projectUrl: "/",
            githubUrl: "https://github.com/HeavenManySugar/HeavenManySugar.github.io",
            icon: "🌐",
            gradientFrom: "from-blue-400",
            gradientTo: "to-purple-500"
        },
        {
            title: "電商平台",
            description: "實作一個賣茶網站，包含商品管理、購物車和訂單追蹤功能。",
            technologies: ["React", "C#", "MSSQL"],
            projectUrl: "https://ootd.ruien.me/",
            githubUrl: "https://github.com/HeavenManySugar/OOTD-FullStack",
            icon: "🛒",
            gradientFrom: "from-purple-400",
            gradientTo: "to-pink-500"
        },
        {
            title: "節奏地牢(Clone模仿)",
            description: "透過C++實作的節奏地牢遊戲，包含音樂節奏與角色扮演元素。",
            technologies: ["C++", "CMake", "Git"],
            projectUrl: "https://github.com/NTUT-FUCK-PTSD/Fuck-PTSD/releases/tag/v1.0.6",
            githubUrl: "https://github.com/NTUT-FUCK-PTSD/Fuck-PTSD",
            icon: "📊",
            gradientFrom: "from-orange-400",
            gradientTo: "to-red-500"
        },
        {
            title: "交友軟體",
            description: "一個交友軟體，支援個人資料管理和好友推薦功能，用於練習UI/UX設計。",
            technologies: ["Kotlin", "Jetpack Compose", "Firebase"],
            projectUrl: "https://www.canva.com/design/DAGp2popNs0/Twi5BEsI5Epvt6VyvC_yMQ/view?utm_content=DAGp2popNs0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4ffa896248",
            githubUrl: "https://github.com/HeavenManySugar/NTUT-MADD-Final",
            icon: "💬",
            gradientFrom: "from-teal-400",
            gradientTo: "to-green-500"
        }
    ];

    // 小專案數據
    const smallProjects = [
        {
            title: "TTS Web",
            description: "TTS Web 是一個基於 Next.js 的文字轉語音應用程式，提供多語言支持和語音選擇功能。",
            technologies: ["Next.js"],
            projectUrl: "https://ruien.me/tts-web/",
            githubUrl: "https://github.com/HeavenManySugar/tts-web",
            icon: "⚛️",
            gradientFrom: "from-indigo-400",
            gradientTo: "to-purple-500"
        },
        {
            title: "Isolate React 配置工具",
            description: "一個現代化的、使用者友善的 Web 介面，用於配置 Isolate 沙盒。",
            technologies: ["Next.js", "daisyUI"],
            projectUrl: "https://ruien.me/isolate-react/",
            githubUrl: "https://github.com/HeavenManySugar/isolate-react",
            icon: "🎮",
            gradientFrom: "from-pink-400",
            gradientTo: "to-red-500"
        },
        {
            title: "員工訓練與管理平台",
            description: "113-1 人工智慧課程專案，實作員工訓練與管理平台。",
            technologies: ["Python", "LangChain", "Ollama"],
            projectUrl: "https://github.com/Bryan-Eva/ETKMP",
            githubUrl: "https://github.com/Bryan-Eva/ETKMP",
            icon: "📝",
            gradientFrom: "from-emerald-400",
            gradientTo: "to-teal-500"
        },
        {
            title: "Todolist",
            description: "一個簡單的待辦事項應用程式，使用 SwiftUI 和 Firebase 實現實時數據同步，並結合AI做為規劃助手。",
            technologies: ["SwiftUI", "Firebase", "AI"],
            projectUrl: "https://www.canva.com/design/DAGqheO54t8/TzX726Eu0ZKVJ-MJrnIgwQ/edit?utm_content=DAGqheO54t8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            githubUrl: "https://github.com/HeavenManySugar/Todolist",
            icon: "🔧",
            gradientFrom: "from-amber-400",
            gradientTo: "to-orange-500"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
            {/* 背景裝飾 */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-10"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full opacity-10"
                    animate={{
                        scale: [1.3, 1, 1.3],
                        opacity: [0.3, 0.1, 0.3],
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

            {/* Projects Section */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6">
                    {/* 頁面標題 */}
                    <motion.div
                        className="text-center mb-20"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            專案作品集
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            歡迎瀏覽我的程式開發作品集，這裡展示了我在不同技術領域的專案
                        </motion.p>
                        <motion.div
                            className="mt-8 flex justify-center"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <motion.div
                                className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                animate={{
                                    width: [96, 120, 96],
                                    opacity: [0.8, 1, 0.8],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* 精選專案 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <ProjectSection
                            title="精選專案"
                            projects={featuredProjects}
                            size="large"
                            gridCols="lg:grid-cols-3"
                        />
                    </motion.div>

                    {/* 小專案 */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <ProjectSection
                            title="小專案"
                            projects={smallProjects}
                            size="small"
                            gridCols="lg:grid-cols-4"
                        />
                    </motion.div>

                    {/* 技能統計 */}
                    <motion.div
                        className="mt-20 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-lg"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <motion.h3
                                className="text-2xl font-bold text-gray-800 dark:text-white mb-8"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                專案統計
                            </motion.h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    {
                                        value: featuredProjects.length + smallProjects.length,
                                        label: "完成專案",
                                        color: "text-blue-600 dark:text-blue-400"
                                    },
                                    {
                                        value: Array.from(new Set([...featuredProjects, ...smallProjects].flatMap(p => p.technologies))).length,
                                        label: "使用技術",
                                        color: "text-purple-600 dark:text-purple-400"
                                    },
                                    {
                                        value: featuredProjects.length,
                                        label: "精選專案",
                                        color: "text-green-600 dark:text-green-400"
                                    },
                                    {
                                        value: smallProjects.length,
                                        label: "小專案",
                                        color: "text-orange-600 dark:text-orange-400"
                                    }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        className="text-center"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <motion.div
                                            className={`text-3xl font-bold mb-2 ${stat.color}`}
                                            animate={{
                                                scale: [1, 1.05, 1],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: index * 0.5,
                                            }}
                                        >
                                            {stat.value}
                                        </motion.div>
                                        <div className="text-gray-600 dark:text-gray-400 text-sm">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
