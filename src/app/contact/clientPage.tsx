'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGitea } from 'react-icons/si';
import { IconType } from 'react-icons';

type ContactMethod = {
    icon: IconType;
    title: string;
    value: string;
    href: string;
    color: string;
    description: string;
};

export default function ContactClient() {
    const contactMethods: ContactMethod[] = [
        {
            icon: MdEmail,
            title: "電子郵件",
            value: "me@zre.tw",
            href: "mailto:me@zre.tw",
            color: "blue",
            description: "歡迎透過 Email 聯絡討論"
        },
        {
            icon: FaGithub,
            title: "GitHub",
            value: "heavenmanysugar",
            href: "https://github.com/heavenmanysugar",
            color: "gray",
            description: "查看我的開源專案"
        },
        {
            icon: SiGitea,
            title: "Gitea",
            value: "zre",
            href: "https://gitea.com/zre",
            color: "green",
            description: "更多程式碼倉庫"
        },
        {
            icon: FaLinkedin,
            title: "LinkedIn",
            value: "ruien-zhang",
            href: "https://linkedin.com/in/ruien-zhang",
            color: "blue",
            description: "專業網絡連結"
        }
    ];
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
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
            {/* 背景裝飾 */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                        x: [0, -50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <Header />

            {/* Contact Section */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
                            聯絡我
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            歡迎與我聯絡！無論是技術交流、專案合作或任何想法分享，我都很期待聽到您的聲音
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            className="grid md:grid-cols-2 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {contactMethods.map((method) => {
                                const IconComponent = method.icon;
                                return (
                                    <motion.div
                                        key={method.title}
                                        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 group"
                                        variants={itemVariants}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div className="flex items-center mb-6">
                                            <motion.div
                                                className={`w-16 h-16 bg-${method.color}-100 dark:bg-${method.color}-900 rounded-2xl flex items-center justify-center mr-6`}
                                                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <IconComponent className={`w-8 h-8 text-${method.color}-600 dark:text-${method.color}-400`} />
                                            </motion.div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                                    {method.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                    {method.description}
                                                </p>
                                            </div>
                                        </div>
                                        <motion.a
                                            href={method.href}
                                            target={method.href.startsWith('http') ? "_blank" : undefined}
                                            rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                            className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium text-lg"
                                            whileHover={{ x: 10 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            {method.value}
                                            <motion.span
                                                className="inline-block ml-2"
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            >
                                                →
                                            </motion.span>
                                        </motion.a>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Location Info */}
                        <motion.div
                            className="mt-16 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 inline-block"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <motion.div
                                    className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-2xl flex items-center justify-center mx-auto mb-4"
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <MdLocationOn className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                    位置
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    台北, 台灣
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Call to Action */}
                        <motion.div
                            className="mt-16 text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                    讓我們一起創造精彩的專案！
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                                    我總是樂於學習新技術、分享經驗，並與有趣的人合作。
                                    如果您有任何想法或機會，請不要猶豫聯絡我！
                                </p>
                                <motion.a
                                    href="mailto:me@zre.tw"
                                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    發送郵件
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
};