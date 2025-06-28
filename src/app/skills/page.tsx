import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "技能專長 - 張睿恩 (Rui-En Zhang)",
    description: "查看張睿恩的技術能力 - 前端開發、後端開發、資料庫設計等全端開發技能",
};

export default function Skills() {
    // 技能標籤組件
    const SkillTag = ({ skill, color }: { skill: string; color: string }) => (
        <span className={`px-3 py-1 bg-${color}-100 dark:bg-${color}-900 text-${color}-800 dark:text-${color}-200 rounded-full text-sm font-medium`}>
            {skill}
        </span>
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
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className={`w-12 h-12 bg-${color}-100 dark:bg-${color}-900 rounded-lg flex items-center justify-center mb-4 ${centered ? 'mx-auto' : ''}`}>
                <span className="text-2xl">{icon}</span>
            </div>
            <h2 className={`text-xl font-semibold text-gray-800 dark:text-white mb-4 ${centered ? 'text-center' : ''}`}>
                {title}
            </h2>
            <p className={`text-gray-600 dark:text-gray-300 mb-4 ${centered ? 'text-center' : ''}`}>
                {description}
            </p>
            <div className={`flex flex-wrap gap-2 ${centered ? 'justify-center' : ''}`}>
                {skills.map((skill) => (
                    <SkillTag key={skill} skill={skill} color={color} />
                ))}
            </div>
        </div>
    );

    // 技能資料
    const skillsData = [
        {
            icon: "🎨",
            title: "前端開發",
            description: "專精於現代前端技術，重視使用者體驗與介面設計",
            skills: ["React", "Next.js", "Nuxt.js", "Vue.js", "HTML", "CSS", "Tailwind CSS"],
            color: "blue"
        },
        {
            icon: "⚙️",
            title: "程式設計",
            description: "熟悉多種程式語言，具備扎實的演算法基礎",
            skills: ["C", "C#", "C++", "Python", "Java", "JavaScript", "TypeScript", "Golang"],
            color: "green"
        },
        {
            icon: "🌐",
            title: "後端開發",
            description: "目前有使用的專案技術，學習現代後端開發框架",
            skills: ["Express.js", "Koa.js", "Gin", "FastAPI"],
            color: "orange"
        }
    ];

    // AI技能資料
    const aiSkills = ["Machine Learning", "TensorFlow", "PyTorch", "Data Analysis", "Pandas", "NumPy"];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
            <Header />

            {/* Skills Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
                        技能專長
                    </h1>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                        {skillsData.map((skill) => (
                            <SkillSection key={skill.title} {...skill} />
                        ))}
                    </div>

                    {/* AI & Machine Learning Section */}
                    <div className="max-w-4xl mx-auto mt-12">
                        <SkillSection
                            icon="🤖"
                            title="AI & 機器學習"
                            description="具備AI競賽經驗"
                            skills={aiSkills}
                            color="purple"
                            centered={true}
                        />
                    </div>
                </div>
            </section>

            {/* Additional Skills */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-16">
                        開發工具與其他技能
                    </h2>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🔧</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">開發工具</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">Git, GitHub, VS Code, IntelliJ</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🗄️</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">資料庫</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">MySQL, PostgreSQL, Firebase</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🏆</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">競賽經驗</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">技藝競賽優勝, AI競賽佳作</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">�</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">團隊協作</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">社團領導, 專案管理, 協作開發</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
