'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionWrapper from "@/components/MotionWrapper";

// SkillTag Component
const SkillTag = ({ skill }: { skill: string }) => (
    <span className="inline-block px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
        {skill}
    </span>
);

// SkillSection Component
const SkillSection = ({ 
    icon, 
    title, 
    description, 
    skills, 
    centered = false 
}: {
    icon: string;
    title: string;
    description: string;
    skills: string[];
    centered?: boolean;
}) => (
    <MotionWrapper
        className={`p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900 ${
            centered ? 'md:col-span-2 lg:col-span-3 mx-auto max-w-2xl' : ''
        }`}
        variants={{
            hidden: { y: 12, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94] as const
                }
            }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
        <div className={`flex items-start gap-4 mb-6 ${centered ? 'flex-col text-center items-center' : ''}`}>
            <div className="text-4xl flex-shrink-0 flex items-center justify-center h-12">
                {icon}
            </div>
            <div className={centered ? 'w-full' : ''}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
        <div className={`flex flex-wrap gap-2 ${centered ? 'justify-center' : ''}`}>
            {skills.map((skill) => (
                <SkillTag key={skill} skill={skill} />
            ))}
        </div>
    </MotionWrapper>
);

export default function SkillsPage() {
    // 動畫變體
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
    const skillsData = [
        {
            icon: "🎨",
            title: "前端開發",
            description: "現代前端技術，重視使用者體驗與介面設計",
            skills: ["React", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS", "Framer Motion"]
        },
        {
            icon: "⚙️",
            title: "程式設計",
            description: "多種程式語言，應用於不同的開發需求",
            skills: ["TypeScript", "JavaScript", "Python", "C", "C++", "Java"]
        },
        {
            icon: "🌐",
            title: "後端開發",
            description: "現代後端框架，專注於API設計與資料管理",
            skills: ["Express.js", "Koa.js", "FastAPI", "PostgreSQL", "MongoDB", "RESTful API"]
        }
    ];

    // AI技能資料
    const aiSkills = ["Machine Learning", "TensorFlow", "PyTorch", "Data Analysis", "Pandas", "NumPy"];

    // 其他技能資料
    const otherSkills = [
        {
            icon: "🔧",
            title: "開發工具",
            description: "Git, GitHub, VS Code, IntelliJ IDEA",
        },
        {
            icon: "🗄️",
            title: "資料庫",
            description: "MySQL, PostgreSQL, Firebase, MongoDB",
        },
        {
            icon: "🏆",
            title: "競賽經驗",
            description: "技藝競賽優勝, AI競賽佳作, 資安競賽冠軍",
        },
        {
            icon: "👥",
            title: "團隊協作",
            description: "社團領導, 專案管理, 協作開發",
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <Header />

            {/* 標題區塊 */}
            <section className="container mx-auto px-6 py-24 md:py-32 border-b border-gray-200 dark:border-gray-800">
                <MotionWrapper
                    className=""
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                        技能專長
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        從前端到後端，從設計到實現，持續學習最新技術
                    </p>
                </MotionWrapper>
            </section>

            {/* 主要技能區塊 */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <MotionWrapper
                        className="grid md:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            staggerChildren: 0.12,
                            delayChildren: 0.2
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {skillsData.map((skill) => (
                            <SkillSection key={skill.title} {...skill} />
                        ))}
                    </MotionWrapper>
                </div>
            </section>

            {/* AI & 機器學習區塊 */}
            <section className="py-12 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-6">
                    <MotionWrapper
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            staggerChildren: 0.12,
                            delayChildren: 0.2
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <SkillSection
                            icon="🤖"
                            title="AI & 機器學習"
                            description="參與全國AI競賽獲得佳作，具備機器學習實務經驗與數據分析能力"
                            skills={aiSkills}
                            centered={true}
                        />
                    </MotionWrapper>
                </div>
            </section>

            {/* 其他技能區塊 */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <MotionWrapper
                        className="text-center mb-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            staggerChildren: 0.12,
                            delayChildren: 0.2
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            開發工具與其他技能
                        </h2>
                    </MotionWrapper>

                    <MotionWrapper
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            staggerChildren: 0.12,
                            delayChildren: 0.2
                        }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {otherSkills.map((item) => (
                            <MotionWrapper
                                key={item.title}
                                className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900"
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                            >
                                <div className="text-3xl mb-4 text-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </MotionWrapper>
                        ))}
                    </MotionWrapper>
                </div>
            </section>

            <Footer />
        </div>
    );
}
