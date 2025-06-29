'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
    const [countdown, setCountdown] = useState(5);
    const router = useRouter();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    router.push('/');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
            <div className="text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <motion.h1
                        className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        404
                    </motion.h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                >
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        頁面不存在
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                        抱歉，您訪問的頁面不存在或已被移除。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8"
                >
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 max-w-sm mx-auto">
                        <div className="text-6xl mb-4">
                            <motion.span
                                key={countdown}
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="text-blue-600 dark:text-blue-400 font-bold"
                            >
                                {countdown}
                            </motion.span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            秒後自動跳轉至首頁
                        </p>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-4">
                            <motion.div
                                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: 5, ease: "linear" }}
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-4"
                >
                    <Link href="/">
                        <motion.button
                            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            立即返回首頁
                        </motion.button>
                    </Link>

                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        或者您可以
                        <Link
                            href="/projects"
                            className="text-blue-600 dark:text-blue-400 hover:underline mx-1"
                        >
                            查看我的專案
                        </Link>
                        或
                        <Link
                            href="/about"
                            className="text-blue-600 dark:text-blue-400 hover:underline mx-1"
                        >
                            了解更多
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
