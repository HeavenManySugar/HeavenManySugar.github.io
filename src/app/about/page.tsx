import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PersonalInfoCard from "@/components/PersonalInfoCard";
import BiographySection from "@/components/BiographySection";
import ProfessionalAreasCard from "@/components/ProfessionalAreasCard";
import ProfileImageSection from "@/components/ProfileImageSection";
import EducationCard from "@/components/EducationCard";
import AwardCard from "@/components/AwardCard";
import OtherAchievementCard from "@/components/OtherAchievementCard";
import TechStageCard from "@/components/TechStageCard";
import { getFadeInAnimation, textEffects } from "@/utils/animationUtils";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "關於我",
    description: "了解張睿恩的個人背景、教育經歷、專業技能與獲獎記錄",
};

// =============================================================================
// 常數定義區塊
// =============================================================================

/** 個人基本資料 */
const PERSONAL_INFO = {
    name: "張睿恩",
    englishName: "Rui-En Zhang",
    school: "國立臺北科技大學",
    department: "資訊工程學系",
    grade: "四年級"
} as const;

/** 專業領域標籤 */
const PROFESSIONAL_AREAS = [
    { label: "Frontend Development", color: "blue" },
    { label: "Backend Development", color: "green" },
    { label: "Mobile Development", color: "purple" },
    { label: "AI & Machine Learning", color: "orange" },
    { label: "UI/UX Design", color: "pink" }
] as const;

/** 自傳段落內容 */
const BIOGRAPHY_PARAGRAPHS = [
    "我是張睿恩，目前就讀於國立臺北科技大學資訊工程學系四年級。從高職時期開始，我就對程式設計充滿熱忱，並在學習過程中不斷精進自己的技術能力。",
    "在臺南高工就讀期間，我有幸在全國高級中等學校技藝競賽的電腦軟體設計項目中獲得優勝，這個成就不僅增強了我對程式設計的信心，也讓我更加確定了未來的發展方向。同時，我擔任網頁設計社副社長，透過組織社團活動學習到寶貴的團隊協作與領導經驗。",
    "進入大學後，我積極參與資訊工程系學會的各項活動，並在全國大專院校人工智慧競賽中與隊友合作獲得佳作。這些經歷讓我在理論學習之外，也累積了實務專案開發的經驗。",
    "我專精於現代前端開發技術，包括React、Next.js、TypeScript等，同時也具備後端開發能力。我相信技術與設計的完美結合能創造出優秀的使用者體驗，這也是我持續努力的目標。"
] as const;

/** 教育背景資料 */
const EDUCATION_DATA = [
    {
        id: "university",
        icon: "🏫",
        bgColor: "blue",
        institution: "國立臺北科技大學",
        department: "資訊工程學系",
        period: "2021-2025",
        description: "學習關於軟體工程、資料結構與演算法、人工智慧等領域，積極參與系學會活動並累積實務開發經驗。"
    },
    {
        id: "high-school",
        icon: "🎓",
        bgColor: "green",
        institution: "國立臺南高級工業職業學校",
        department: "資訊科",
        period: "2018-2021",
        description: "奠定程式設計基礎，擔任網頁設計社副社長，在全國技藝競賽中獲得電腦軟體設計優勝。"
    }
] as const;

/** 大學階段獲獎資料 */
const UNIVERSITY_AWARDS = [
    {
        emoji: "🏆",
        title: "教育部全國大專院校人工智慧競賽 (AI CUP 2024)",
        subtitle: "根據區域微氣候資料預測發電量競賽",
        award: "佳作",
        ranking: "第9名 / 934隊 (PR99)",
        description: "運用機器學習技術預測發電量，在近千支隊伍中脫穎而出，展現優異的AI技術應用能力",
        borderColor: "blue"
    }
] as const;

/** 高中階段獲獎資料 */
const HIGH_SCHOOL_AWARDS = [
    {
        emoji: "🥇",
        title: "全國高級中等學校技藝競賽",
        subtitle: "110學年度工業類 電腦軟體設計",
        award: "優勝",
        ranking: "第17名",
        description: "展現了紮實的程式設計能力與問題解決技巧",
        borderColor: "yellow"
    },
    {
        emoji: "🛡️",
        title: "T 貓盃全國資安基礎實務能力競賽",
        subtitle: "2021年基礎實務 高中職組",
        award: "冠軍",
        ranking: "第1名 (國立成功大學主辦)",
        description: "資通安全領域頂尖表現，展現資安技術專業實力",
        borderColor: "red"
    }
] as const;

/** 其他成就資料 */
const OTHER_ACHIEVEMENTS = [
    {
        emoji: "👥",
        title: "網頁設計社副社長",
        subtitle: "臺南高工 網頁設計社",
        description: "領導社團活動，培養團隊合作與溝通能力",
        borderColor: "purple"
    },
    {
        emoji: "📚",
        title: "系學會積極參與",
        subtitle: "北科大資工系學會",
        description: "積極參與系上活動，累積實務專案經驗",
        borderColor: "green"
    }
] as const;

/** 技術發展歷程資料 */
const TECH_DEVELOPMENT_STAGES = [
    {
        icon: "⚛️",
        bgColor: "blue",
        borderColor: "blue-500",
        title: "前端開發專精",
        description: "深入學習現代前端開發技術棧，從基礎的HTML/CSS/JavaScript到React生態系，專注於組件化開發、狀態管理和性能優化。掌握Next.js全端框架，能夠開發SEO友好的現代網頁應用。",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
        icon: "🔧",
        bgColor: "green",
        borderColor: "green-500",
        title: "全端開發能力",
        description: "擴展技能到後端開發領域，學習Node.js生態系統、RESTful API設計、資料庫設計與管理。具備從前端到後端的完整產品開發能力，能夠獨立完成全端專案。",
        skills: ["Node.js", "Express.js", "Golang", "PostgreSQL"]
    },
    {
        icon: "🎨",
        bgColor: "purple",
        borderColor: "purple-500",
        title: "設計思維培養",
        description: "深入學習UI/UX設計原則，注重使用者體驗研究與互動設計。熟悉設計工具使用，能夠從設計角度思考產品開發，讓技術實現與視覺設計完美結合。",
        skills: ["Figma", "Design System", "User Research", "Prototyping"]
    },
    {
        icon: "🤖",
        bgColor: "orange",
        borderColor: "orange-500",
        title: "人工智慧探索",
        description: "透過參與AI競賽深入學習機器學習與深度學習技術，了解AI在實際應用中的潛力。持續關注最新的AI發展趨勢，探索AI與傳統軟體開發的結合點。",
        skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"]
    }
] as const;

/**
 * 關於我主要內容區塊
 * 包含個人資訊、自傳、專業領域等核心資訊
 */
function AboutMeSection() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
            {/* 裝飾性背景元素 */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-800/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h1 className={`text-5xl font-bold text-center ${textEffects.gradient} mb-16 ${getFadeInAnimation('up', 0)}`}>
                    關於我
                </h1>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* 左側：個人資訊 */}
                    <div className={`space-y-4 ${getFadeInAnimation('left', 200)}`}>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                            關於我
                        </h2>
                        <div className="space-y-4">
                            <PersonalInfoCard personalInfo={PERSONAL_INFO} />
                            <BiographySection paragraphs={BIOGRAPHY_PARAGRAPHS} />
                            <ProfessionalAreasCard areas={PROFESSIONAL_AREAS} />
                        </div>
                    </div>

                    {/* 右側：個人頭像 */}
                    <div className={getFadeInAnimation('right', 400)}>
                        <ProfileImageSection
                            name={PERSONAL_INFO.name}
                            englishName={PERSONAL_INFO.englishName}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * 教育背景與成就主要區塊
 * 包含學歷、競賽成果、其他成就等資訊
 */
function EducationAndAchievementsSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
            {/* 裝飾性幾何圖形 */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-200/30 dark:border-blue-700/30 rounded-lg rotate-45"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-purple-200/30 dark:border-purple-700/30 rounded-full"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className={`text-4xl font-bold text-center ${textEffects.gradient} mb-16 ${getFadeInAnimation('up', 0)}`}>
                    教育背景與成就
                </h2>
                <div className="max-w-4xl mx-auto">
                    {/* 教育背景 */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {EDUCATION_DATA.map((education, index) => (
                            <div key={education.id} className={`${getFadeInAnimation('up', index * 200)}`}>
                                <EducationCard education={education} />
                            </div>
                        ))}
                    </div>

                    {/* 競賽成果與榮譽 */}
                    <div className="mt-16">
                        <h3 className={`text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center ${getFadeInAnimation('up', 400)}`}>
                            🏆 競賽成果與榮譽
                        </h3>

                        {/* 大學階段獲獎 */}
                        <div className="mb-12">
                            <div className={`bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/40 dark:to-blue-800/20 p-6 rounded-2xl ${getFadeInAnimation('up', 600)}`}>
                                <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                                    🎓 大學階段
                                </h4>
                                <div className="grid gap-6">
                                    {UNIVERSITY_AWARDS.map((award, index) => (
                                        <div key={index} className={`${getFadeInAnimation('up', 800 + index * 200)}`}>
                                            <AwardCard award={award} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 高中階段獲獎 */}
                        <div className="mb-12">
                            <div className={`bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900/40 dark:to-green-800/20 p-6 rounded-2xl ${getFadeInAnimation('up', 1000)}`}>
                                <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                                    🏫 高中階段
                                </h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {HIGH_SCHOOL_AWARDS.map((award, index) => (
                                        <div key={index} className={`${getFadeInAnimation('up', 1200 + index * 200)}`}>
                                            <AwardCard award={award} showRanking={false} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 其他成就 */}
                        <div className={`bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900/40 dark:to-purple-800/20 p-6 rounded-2xl ${getFadeInAnimation('up', 1400)}`}>
                            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
                                🌟 其他成就
                            </h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                {OTHER_ACHIEVEMENTS.map((achievement, index) => (
                                    <div key={index} className={`${getFadeInAnimation('up', 1600 + index * 200)}`}>
                                        <OtherAchievementCard achievement={achievement} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * 技術發展歷程主要區塊
 * 展示技術學習的各個階段與持續學習的理念
 */
function TechDevelopmentSection() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
            {/* 動態背景網格 */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="grid grid-cols-12 h-full">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="border-r border-gray-300 dark:border-gray-700"></div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className={`text-4xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-16 ${getFadeInAnimation('up', 0)}`}>
                    🚀 技術發展歷程
                </h2>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        {TECH_DEVELOPMENT_STAGES.map((stage, index) => (
                            <div key={index} className={getFadeInAnimation('up', index * 300)}>
                                <TechStageCard stage={stage} />
                            </div>
                        ))}
                    </div>

                    {/* 持續學習理念 */}
                    <div className={`mt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 p-12 rounded-3xl border border-blue-200/50 dark:border-blue-700/50 shadow-2xl relative overflow-hidden ${getFadeInAnimation('up', 1200)}`}>
                        {/* 裝飾性元素 */}
                        <div className="absolute top-4 right-4 text-4xl opacity-20">💡</div>
                        <div className="absolute bottom-4 left-4 text-3xl opacity-20">🌱</div>

                        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                            持續學習的心態
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
                            技術日新月異，我始終保持好奇心與學習熱忱，關注最新的技術趨勢與最佳實踐。
                            相信透過不斷學習與實作，能夠在快速變化的科技領域中持續成長，
                            為創造更好的數位體驗貢獻自己的力量。
                        </p>

                        {/* 學習關鍵字雲 */}
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            {["持續學習", "技術探索", "創新思維", "團隊協作", "問題解決"].map((keyword, index) => (
                                <span
                                    key={keyword}
                                    className={`px-4 py-2 bg-white/70 dark:bg-gray-800/70 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-600/50 backdrop-blur-sm ${getFadeInAnimation('up', 1400 + index * 100)}`}
                                >
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// =============================================================================
// 主要組件
// =============================================================================

/**
 * About 頁面主要組件
 * 整合所有子區塊，呈現完整的個人介紹頁面
 */
export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden">
            {/* 全域裝飾性背景 */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-blue-300/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-purple-300/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300/5 dark:bg-indigo-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <Header />

            {/* 關於我區塊 */}
            <AboutMeSection />

            {/* 教育背景與成就區塊 */}
            <EducationAndAchievementsSection />

            {/* 技術發展歷程區塊 */}
            <TechDevelopmentSection />

            <Footer />
        </div>
    );
}
