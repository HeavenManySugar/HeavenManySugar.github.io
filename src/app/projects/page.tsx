import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";

export const metadata: Metadata = {
    title: "精選專案 - 張睿恩 (Rui-En Zhang)",
    description: "探索張睿恩的作品集 - 包含各種網頁應用程式、前端專案與全端開發案例",
};

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

export default function Projects() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
            <Header />

            {/* Projects Section */}
            <section className="py-20 relative overflow-hidden">
                {/* 背景裝飾 */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full opacity-10 animate-pulse"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* 頁面標題 */}
                    <div className="text-center mb-20">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                            專案作品集
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            歡迎瀏覽我的程式開發作品集，這裡展示了我在不同技術領域的實戰經驗與創新思維
                        </p>
                        <div className="mt-8 flex justify-center">
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        </div>
                    </div>

                    {/* 精選專案 */}
                    <ProjectSection
                        title="精選專案"
                        projects={featuredProjects}
                        size="large"
                        gridCols="lg:grid-cols-3"
                    />

                    {/* 小專案 */}
                    <ProjectSection
                        title="小專案"
                        projects={smallProjects}
                        size="small"
                        gridCols="lg:grid-cols-4"
                    />

                    {/* 技能統計 */}
                    <div className="mt-20 text-center">
                        <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">專案統計</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                        {featuredProjects.length + smallProjects.length}
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-400 text-sm">完成專案</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                                        {Array.from(new Set([...featuredProjects, ...smallProjects].flatMap(p => p.technologies))).length}
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-400 text-sm">使用技術</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                                        {featuredProjects.length}
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-400 text-sm">精選專案</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                                        {smallProjects.length}
                                    </div>
                                    <div className="text-gray-600 dark:text-gray-400 text-sm">小專案</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div >
    );
}
