'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    projectUrl?: string;
    githubUrl: string;
    icon: string;
    gradientFrom: string;
    gradientTo: string;
    size?: 'large' | 'small';
}

// 技術標籤的顏色映射
const getTechColor = (tech: string) => {
    const colorMap: { [key: string]: string } = {
        'Next.js': 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200',
        'React': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
        'TypeScript': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
        'Tailwind CSS': 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
        'C#': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
        'MSSQL': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
        'C++': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
        'CMake': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
        'Git': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
        'Kotlin': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
        'Jetpack Compose': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
        'Firebase': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
        'daisyUI': 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200',
        'Python': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
        'LangChain': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
        'Ollama': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
        'SwiftUI': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
        'AI': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200'
    };
    return colorMap[tech] || 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
};

export default function ProjectCard({
    title,
    description,
    technologies,
    projectUrl,
    githubUrl,
    icon,
    gradientFrom,
    gradientTo,
    size = 'large'
}: ProjectCardProps) {
    const isLarge = size === 'large';

    // 動畫變體
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut" as const
            }
        }
    };

    const iconVariants = {
        hover: {
            scale: 1.1,
            rotate: 5,
            transition: {
                duration: 0.3,
                ease: "easeOut" as const
            }
        }
    };

    const techTagVariants = {
        hover: {
            scale: 1.05,
            y: -2,
            transition: {
                duration: 0.2,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <motion.div
            className={`bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg group cursor-pointer relative ${isLarge ? '' : 'shadow-md'}`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: isLarge
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    : "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
        >
            {/* 背景光暈效果 */}
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${gradientFrom.replace('from-', '').replace('-500', '')}20 0%, transparent 70%)`
                }}
            />

            <motion.div
                className={`${isLarge ? 'h-48' : 'h-32'} bg-gradient-to-r ${gradientFrom} ${gradientTo} flex items-center justify-center relative overflow-hidden`}
                whileHover={{
                    background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
                    transition: { duration: 0.3 }
                }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:from-white/20 transition-all duration-300"
                    whileHover={{
                        background: "linear-gradient(to bottom right, rgba(255,255,255,0.3), transparent)",
                        transition: { duration: 0.3 }
                    }}
                />

                {/* 動態背景圓圈 */}
                <motion.div
                    className="absolute w-32 h-32 rounded-full bg-white/5 -top-16 -right-16"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />

                <motion.span
                    className={`${isLarge ? 'text-4xl' : 'text-2xl'} text-white relative z-10`}
                    variants={iconVariants}
                    whileHover="hover"
                >
                    {icon}
                </motion.span>
            </motion.div>

            <div className={isLarge ? 'p-6' : 'p-4'}>
                <motion.h3
                    className={`${isLarge ? 'text-xl' : 'text-lg'} font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-300`}
                    whileHover={{
                        color: "#3B82F6",
                        transition: { duration: 0.2 }
                    }}
                >
                    {title}
                </motion.h3>

                <motion.p
                    className={`text-gray-600 dark:text-gray-300 mb-4 leading-relaxed ${isLarge ? '' : 'text-sm mb-3'}`}
                    initial={{ opacity: 0.8 }}
                    whileHover={{
                        opacity: 1,
                        transition: { duration: 0.2 }
                    }}
                >
                    {description}
                </motion.p>

                <motion.div
                    className={`flex flex-wrap gap-2 mb-4 ${isLarge ? '' : 'gap-1 mb-3'}`}
                    initial="visible"
                    whileHover="hover"
                >
                    {technologies.map((tech, index) => (
                        <motion.span
                            key={index}
                            className={`${getTechColor(tech)} px-2 py-1 rounded-full font-medium transition-all duration-200 cursor-pointer ${isLarge ? 'text-xs' : 'text-xs'}`}
                            variants={techTagVariants}
                            whileHover="hover"
                            whileTap={{ scale: 0.95 }}
                            custom={index}
                            animate={{
                                opacity: [0.7, 1, 0.7],
                                transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.2
                                }
                            }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div
                    className="flex gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, delay: 0.3 }
                    }}
                >
                    {projectUrl && (
                        <motion.a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium flex items-center gap-1 ${isLarge ? 'text-sm' : 'text-xs'}`}
                            whileHover={{
                                scale: 1.05,
                                x: 2,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            查看專案
                            <motion.svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                whileHover={{
                                    x: 2,
                                    y: -2,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </motion.svg>
                        </motion.a>
                    )}
                    <motion.a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 font-medium flex items-center gap-1 ${isLarge ? 'text-sm' : 'text-xs'}`}
                        whileHover={{
                            scale: 1.05,
                            x: 2,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        GitHub
                        <motion.svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            whileHover={{
                                rotate: 360,
                                transition: { duration: 0.5 }
                            }}
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </motion.svg>
                    </motion.a>
                </motion.div>
            </div>
        </motion.div>
    );
}
