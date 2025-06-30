'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiGitea } from 'react-icons/si';
import MotionWrapper from '@/components/MotionWrapper';

// 定義 build 信息的類型
interface BuildInfo {
    commitHash: string;
    shortCommitHash: string;
    branchName: string;
    commitDate: string;
    buildTime: string;
}

// 嘗試導入 build 信息
let buildInfo: BuildInfo | null = null;
try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    buildInfo = require('@/build-info.json') as BuildInfo;
} catch {
    // 如果無法找到 build 信息文件，使用默認值
    console.warn('Build info not found, using defaults');
}

export default function Footer() {
    const socialLinks = [
        {
            href: "https://github.com/heavenmanysugar",
            icon: FaGithub,
            label: "heavenmanysugar",
            color: "hover:text-gray-400"
        },
        {
            href: "https://gitea.com/zre",
            icon: SiGitea,
            label: "zre",
            color: "hover:text-green-400"
        },
        {
            href: "https://linkedin.com/in/ruien-zhang",
            icon: FaLinkedin,
            label: "ruien-zhang",
            color: "hover:text-blue-400"
        },
        {
            href: "mailto:me@zre.tw",
            icon: MdEmail,
            label: "me@zre.tw",
            color: "hover:text-red-400"
        }
    ];

    return (
        <MotionWrapper
            type="footer"
            className="bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-black dark:to-gray-900 text-white py-16 relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            {/* 背景裝飾 */}
            <div className="absolute inset-0 overflow-hidden">
                <MotionWrapper
                    className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <MotionWrapper
                    className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center">
                    <MotionWrapper
                        type="h5"
                        className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        張睿恩 (Rui-En Zhang)
                    </MotionWrapper>

                    <MotionWrapper
                        type="p"
                        className="text-gray-300 mb-6 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        熱愛程式開發，喜歡學習新技術 ✨
                    </MotionWrapper>

                    <MotionWrapper
                        type="p"
                        className="text-gray-400 mb-8 text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        Passionate about coding and always learning something new 🚀
                    </MotionWrapper>

                    <MotionWrapper
                        className="flex justify-center space-x-8 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {socialLinks.map((link, index) => {
                            const IconComponent = link.icon;
                            return (
                                <MotionWrapper
                                    type="a"
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex flex-col items-center space-y-2 text-gray-400 ${link.color} transition-all duration-300 group`}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <MotionWrapper
                                        className="p-3 bg-gray-700/50 rounded-xl backdrop-blur-sm border border-gray-600/30 group-hover:bg-gray-600/50 transition-all duration-300"
                                        whileHover={{ rotate: [0, -5, 5, 0] }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <IconComponent className="w-6 h-6" />
                                    </MotionWrapper>
                                    <span className="text-sm group-hover:underline font-medium hidden sm:inline">
                                        {link.label}
                                    </span>
                                </MotionWrapper>
                            );
                        })}
                    </MotionWrapper>

                    <MotionWrapper
                        className="pt-8 border-t border-gray-700/50"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-400 text-sm mb-2">
                            Made with ❤️ by 張睿恩 (Rui-En Zhang) © 2025
                        </p>
                        {buildInfo && (
                            <MotionWrapper
                                type="div"
                                className="text-xs text-gray-500 space-y-1"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                                viewport={{ once: true }}
                            >
                                <p>
                                    Build: <span className="font-mono text-gray-400">{buildInfo.shortCommitHash}</span>
                                    {buildInfo.branchName !== 'unknown' && (
                                        <span className="ml-2">
                                            on <span className="font-mono text-gray-400">{buildInfo.branchName}</span>
                                        </span>
                                    )}
                                </p>
                                {buildInfo.buildTime && (
                                    <p>
                                        Built: <span className="text-gray-400">
                                            {new Date(buildInfo.buildTime).toLocaleString()}
                                        </span>
                                    </p>
                                )}
                            </MotionWrapper>
                        )}
                    </MotionWrapper>
                </div>
            </div>
        </MotionWrapper>
    );
}
