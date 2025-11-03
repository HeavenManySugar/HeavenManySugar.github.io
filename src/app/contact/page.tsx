import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGitea } from 'react-icons/si';
import { IconType } from 'react-icons';
import MotionWrapper from "@/components/MotionWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "聯絡我",
    description: "歡迎與我聯絡！無論是技術交流、專案合作或任何想法分享，我都很期待聽到您的聲音",
};

type ContactMethod = {
    icon: IconType;
    title: string;
    value: string;
    href: string;
    description: string;
};

export default function ContactClient() {
    const contactMethods: ContactMethod[] = [
        {
            icon: MdEmail,
            title: "電子郵件",
            value: "me@zre.tw",
            href: "mailto:me@zre.tw",
            description: "歡迎透過 Email 聯絡討論"
        },
        {
            icon: FaGithub,
            title: "GitHub",
            value: "heavenmanysugar",
            href: "https://github.com/heavenmanysugar",
            description: "查看我的開源專案"
        },
        {
            icon: SiGitea,
            title: "Gitea",
            value: "zre",
            href: "https://gitea.com/zre",
            description: "更多程式碼倉庫"
        },
        {
            icon: FaLinkedin,
            title: "LinkedIn",
            value: "ruien-zhang",
            href: "https://linkedin.com/in/ruien-zhang",
            description: "專業網絡連結"
        }
    ];

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
            <section className="container mx-auto px-6 lg:px-8 py-24 md:py-32 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        聯絡我
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed lxgw-wenkai-mono-tc-regular">
                        歡迎與我聯絡！無論是技術交流、專案合作或任何想法分享，我都很期待聽到您的聲音。
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="container mx-auto px-6 lg:px-8 py-12">
                <MotionWrapper
                    className="grid md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                        staggerChildren: 0.12,
                        delayChildren: 0.2
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {contactMethods.map((method) => {
                        const IconComponent = method.icon;
                        return (
                            <MotionWrapper
                                key={method.title}
                                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900"
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                            {method.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {method.description}
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href={method.href}
                                    target={method.href.startsWith('http') ? "_blank" : undefined}
                                    rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors inline-flex items-center gap-1"
                                >
                                    {method.value}
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </MotionWrapper>
                        );
                    })}
                </MotionWrapper>
            </section>

            {/* Location Section */}
            <section className="container mx-auto px-6 lg:px-8 py-12">
                <MotionWrapper
                    className="max-w-md mx-auto text-center"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <span className="text-xl">📍</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            位置
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            台北，台灣
                        </p>
                    </div>
                </MotionWrapper>
            </section>

            {/* Call to Action */}
            <section className="container mx-auto px-6 lg:px-8 py-24 md:py-32">
                <MotionWrapper
                    className="max-w-2xl mx-auto text-center"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-8 md:p-12 border border-gray-200 dark:border-gray-800">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            讓我們一起創造精彩的專案！
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            我總是樂於學習新技術、分享經驗，並與有趣的人合作。如果您有任何想法或機會，請不要猶豫聯絡我！
                        </p>
                        <a
                            href="mailto:me@zre.tw"
                            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium transition-colors"
                        >
                            發送郵件
                        </a>
                    </div>
                </MotionWrapper>
            </section>

            <Footer />
        </div>
    )
};