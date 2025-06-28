'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function SkillsClient() {
    // 動畫變體
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }
        }
    };

    // 技能標籤組件
    const SkillTag = ({ skill, color, index }: { skill: string; color: string; index: number }) => (
        <motion.span
            className={`px-4 py-2 bg-${color}-100 dark:bg-${color}-900 text-${color}-800 dark:text-${color}-200 rounded-full text-sm font-medium cursor-pointer`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
        >
            {skill}
        </motion.span>
    );

    // 技能區塊組件
    const SkillSection = ({
        icon,
        title,
        description,
        skills,
        color,
        centered = false
    }: {
        icon: string;
        title: string;
        description: string;
        skills: string[];
        color: string;
        centered?: boolean;
    }) => (
        <motion.div
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <motion.div
                className={`w-16 h-16 bg-${color}-100 dark:bg-${color}-900 rounded-2xl flex items-center justify-center mb-6 ${centered ? 'mx-auto' : ''}`}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-3xl">{icon}</span>
            </motion.div>
            <h2 className={`text-2xl font-bold text-gray-800 dark:text-white mb-4 ${centered ? 'text-center' : ''}`}>
                {title}
            </h2>
            <p className={`text-gray-600 dark:text-gray-300 mb-6 leading-relaxed ${centered ? 'text-center' : ''}`}>
                {description}
            </p>
            <div className={`flex flex-wrap gap-3 ${centered ? 'justify-center' : ''}`}>
                {skills.map((skill, skillIndex) => (
                    <SkillTag key={skill} skill={skill} color={color} index={skillIndex} />
                ))}
            </div>
        </motion.div>
    );

    // 技能資料
    const skillsData = [
        {
            icon: "🎨",
            title: "前端開發",
            description: "學習關於現代前端技術，重視使用者體驗與介面設計，創造流暢的互動體驗",
            skills: ["React", "Next.js", "Nuxt.js", "Vue.js", "HTML", "CSS", "Tailwind CSS", "Framer Motion"],
            color: "blue"
        },
        {
            icon: "⚙️",
            title: "程式設計",
            description: "熟悉多種程式語言，能夠應用於不同的開發需求",
            skills: ["C", "C#", "C++", "Python", "Java", "JavaScript", "TypeScript", "Golang"],
            color: "green"
        },
        {
            icon: "🌐",
            title: "後端開發",
            description: "學習現代後端開發框架，專注於API設計",
            skills: ["Express.js", "Koa.js", "Gin", "FastAPI", "PostgreSQL", "RESTful API"],
            color: "orange"
        }
    ];

    // AI技能資料
    const aiSkills = ["Machine Learning", "TensorFlow", "PyTorch", "Data Analysis", "Pandas", "NumPy", "Scikit-learn"];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
            {/* 背景裝飾 */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.3, 1, 1.3],
                        opacity: [0.6, 0.3, 0.6],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <Header />

            {/* Skills Section */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6">
                    <motion.h1
                        className="text-5xl font-bold text-center text-gray-800 dark:text-white mb-8"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        技能專長
                    </motion.h1>
                    <motion.p
                        className="text-xl text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        從前端到後端，從設計到實現，持續學習最新技術
                    </motion.p>

                    <motion.div
                        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {skillsData.map((skill) => (
                            <SkillSection key={skill.title} {...skill} />
                        ))}
                    </motion.div>

                    {/* AI & Machine Learning Section */}
                    <motion.div
                        className="max-w-4xl mx-auto mt-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <SkillSection
                            icon="🤖"
                            title="AI & 機器學習"
                            description="參與全國AI競賽獲得佳作，具備機器學習實務經驗與數據分析能力"
                            skills={aiSkills}
                            color="purple"
                            centered={true}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Additional Skills */}
            <section className="py-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative z-10">
                <div className="container mx-auto px-6">
                    <motion.h2
                        className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        開發工具與其他技能
                    </motion.h2>
                    <motion.div
                        className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                icon: "🔧",
                                title: "開發工具",
                                description: "Git, GitHub, VS Code, IntelliJ IDEA",
                                color: "blue"
                            },
                            {
                                icon: "🗄️",
                                title: "資料庫",
                                description: "MySQL, PostgreSQL, Firebase, MongoDB",
                                color: "green"
                            },
                            {
                                icon: "🏆",
                                title: "競賽經驗",
                                description: "技藝競賽優勝, AI競賽佳作, 資安競賽冠軍",
                                color: "yellow"
                            },
                            {
                                icon: "👥",
                                title: "團隊協作",
                                description: "社團領導, 專案管理, 協作開發",
                                color: "red"
                            }
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                className="text-center bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-600/50"
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className={`w-16 h-16 bg-${item.color}-100 dark:bg-${item.color}-900 rounded-2xl flex items-center justify-center mx-auto mb-4`}
                                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <span className="text-3xl">{item.icon}</span>
                                </motion.div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
