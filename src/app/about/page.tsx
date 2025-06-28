import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "關於我 - 張睿恩 (Rui-En Zhang)",
    description:
        "了解張睿恩的背景與故事 - 熱愛程式設計與創新的開發者，專注於創造美觀實用的網頁應用程式",
};

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
            <Header />

            {/* About Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
                        關於我
                    </h1>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                                關於我
                            </h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">基本資料</h3>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                                        <div><strong>姓名：</strong>張睿恩 (Rui-En Zhang)</div>
                                        <div><strong>學校：</strong>國立臺北科技大學</div>
                                        <div><strong>科系：</strong>資訊工程學系</div>
                                        <div><strong>年級：</strong>四年級</div>
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-6 mb-3">自傳</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    我是張睿恩，目前就讀於國立臺北科技大學資訊工程學系四年級。從高職時期開始，我就對程式設計充滿熱忱，並在學習過程中不斷精進自己的技術能力。
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    在臺南高工就讀期間，我有幸在全國高級中等學校技藝競賽的電腦軟體設計項目中獲得優勝，這個成就不僅增強了我對程式設計的信心，也讓我更加確定了未來的發展方向。同時，我擔任網頁設計社副社長，透過組織社團活動學習到寶貴的團隊協作與領導經驗。
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    進入大學後，我積極參與資訊工程系學會的各項活動，並在全國大專院校人工智慧競賽中與隊友合作獲得佳作。這些經歷讓我在理論學習之外，也累積了實務專案開發的經驗。
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    我專精於現代前端開發技術，包括React、Next.js、TypeScript等，同時也具備後端開發能力。我相信技術與設計的完美結合能創造出優秀的使用者體驗，這也是我持續努力的目標。
                                </p>

                                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">專業領域</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                                            Frontend Development
                                        </span>
                                        <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                                            Backend Development
                                        </span>
                                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                                            Mobile Development
                                        </span>
                                        <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm">
                                            AI & Machine Learning
                                        </span>
                                        <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm">
                                            UI/UX Design
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="relative">
                            <div className="w-full h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="/IMG_2132.jpeg"
                                    alt="個人照片"
                                    width={400}
                                    height={320}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div> */}
                        <div className="relative">
                            <div className="w-full h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                                <div className="text-white text-center">
                                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-4xl">👨‍💻</span>
                                    </div>
                                    <h3 className="text-xl font-semibold">張睿恩</h3>
                                    <p className="text-white/80">Rui-En Zhang</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education & Achievements Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">
                        教育背景與成就
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-2xl">🏫</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                            國立臺北科技大學
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            資訊工程學系 | 2021-2025
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    專精於軟體工程、資料結構與演算法、人工智慧等領域，積極參與系學會活動並累積實務開發經驗。
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                                        <span className="text-2xl">🎓</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                            國立臺南高級工業職業學校
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                                            資訊科 | 2018-2021
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    奠定程式設計基礎，擔任網頁設計社副社長，在全國技藝競賽中獲得電腦軟體設計優勝。
                                </p>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                                競賽成果與榮譽
                            </h3>

                            {/* 大學階段獲獎 */}
                            <div className="mb-8">
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                                    🎓 大學階段
                                </h4>
                                <div className="grid gap-6">
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                                        <div className="flex items-start">
                                            <span className="text-2xl mr-3">🏆</span>
                                            <div className="flex-1">
                                                <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                                                    教育部全國大專院校人工智慧競賽 (AI CUP 2024)
                                                </h5>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                                                    根據區域微氣候資料預測發電量競賽 - <span className="font-semibold text-blue-600 dark:text-blue-400">佳作</span>
                                                </p>
                                                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mb-2">
                                                    <p className="text-blue-800 dark:text-blue-200 text-sm font-medium">
                                                        🎯 排名: 第9名 / 934隊 (PR99)
                                                    </p>
                                                </div>
                                                <p className="text-gray-500 dark:text-gray-400 text-xs">
                                                    運用機器學習技術預測發電量，在近千支隊伍中脫穎而出，展現優異的AI技術應用能力
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 高中階段獲獎 */}
                            <div className="mb-8">
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                                    🏫 高中階段
                                </h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
                                        <div className="flex items-start">
                                            <span className="text-2xl mr-3">🥇</span>
                                            <div>
                                                <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                                                    全國高級中等學校技藝競賽
                                                </h5>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                                                    110學年度工業類 電腦軟體設計 - <span className="font-semibold text-yellow-600 dark:text-yellow-400">優勝</span>
                                                </p>
                                                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded mb-2">
                                                    <p className="text-yellow-800 dark:text-yellow-200 text-xs font-medium">
                                                        🏅 第17名
                                                    </p>
                                                </div>
                                                <p className="text-gray-500 dark:text-gray-400 text-xs">
                                                    展現了紮實的程式設計能力與問題解決技巧
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                                        <div className="flex items-start">
                                            <span className="text-2xl mr-3">🛡️</span>
                                            <div>
                                                <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                                                    T 貓盃全國資安基礎實務能力競賽
                                                </h5>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                                                    2021年基礎實務 高中職組 - <span className="font-semibold text-red-600 dark:text-red-400">冠軍</span>
                                                </p>
                                                <div className="bg-red-50 dark:bg-red-900/20 p-2 rounded mb-2">
                                                    <p className="text-red-800 dark:text-red-200 text-xs font-medium">
                                                        🏆 第1名 (國立成功大學主辦)
                                                    </p>
                                                </div>
                                                <p className="text-gray-500 dark:text-gray-400 text-xs">
                                                    資通安全領域頂尖表現，展現資安技術專業實力
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 其他成就 */}
                            <div>
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                                    🌟 其他成就
                                </h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
                                        <div className="flex items-start">
                                            <span className="text-2xl mr-3">👥</span>
                                            <div>
                                                <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                                                    網頁設計社副社長
                                                </h5>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                                                    臺南高工 網頁設計社
                                                </p>
                                                <p className="text-gray-500 dark:text-gray-400 text-xs">
                                                    領導社團活動，培養團隊合作與溝通能力
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                                        <div className="flex items-start">
                                            <span className="text-2xl mr-3">📚</span>
                                            <div>
                                                <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                                                    系學會積極參與
                                                </h5>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                                                    北科大資工系學會
                                                </p>
                                                <p className="text-gray-500 dark:text-gray-400 text-xs">
                                                    積極參與系上活動，累積實務專案經驗
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">
                        技術發展歷程
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-2xl">⚛️</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                                            前端開發專精
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            深入學習現代前端開發技術棧，從基礎的HTML/CSS/JavaScript到React生態系，專注於組件化開發、狀態管理和性能優化。掌握Next.js全端框架，能夠開發SEO友好的現代網頁應用。
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded text-xs text-center">
                                                React
                                            </span>
                                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded text-xs text-center">
                                                Next.js
                                            </span>
                                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded text-xs text-center">
                                                TypeScript
                                            </span>
                                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded text-xs text-center">
                                                Tailwind CSS
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-green-500">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-2xl">🔧</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                                            全端開發能力
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            擴展技能到後端開發領域，學習Node.js生態系統、RESTful API設計、資料庫設計與管理。具備從前端到後端的完整產品開發能力，能夠獨立完成全端專案。
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded text-xs text-center">
                                                Node.js
                                            </span>
                                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded text-xs text-center">
                                                Express.js
                                            </span>
                                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded text-xs text-center">
                                                Golang
                                            </span>
                                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded text-xs text-center">
                                                PostgreSQL
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-2xl">🎨</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                                            設計思維培養
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            深入學習UI/UX設計原則，注重使用者體驗研究與互動設計。熟悉設計工具使用，能夠從設計角度思考產品開發，讓技術實現與視覺設計完美結合。
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded text-xs text-center">
                                                Figma
                                            </span>
                                            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded text-xs text-center">
                                                Design System
                                            </span>
                                            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded text-xs text-center">
                                                User Research
                                            </span>
                                            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded text-xs text-center">
                                                Prototyping
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <span className="text-2xl">🤖</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                                            人工智慧探索
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            透過參與AI競賽深入學習機器學習與深度學習技術，了解AI在實際應用中的潛力。持續關注最新的AI發展趨勢，探索AI與傳統軟體開發的結合點。
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                            <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded text-xs text-center">
                                                Python
                                            </span>
                                            <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded text-xs text-center">
                                                Machine Learning
                                            </span>
                                            <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded text-xs text-center">
                                                TensorFlow
                                            </span>
                                            <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded text-xs text-center">
                                                Data Analysis
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                                持續學習的心態
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
                                技術日新月異，我始終保持好奇心與學習熱忱，關注最新的技術趨勢與最佳實踐。
                                相信透過不斷學習與實作，能夠在快速變化的科技領域中持續成長，
                                為創造更好的數位體驗貢獻自己的力量。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
