'use client';

import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

interface ProjectSectionProps {
    title: string;
    projects: Array<{
        title: string;
        description: string;
        technologies: string[];
        projectUrl?: string;
        githubUrl: string;
        icon: string;
        gradientFrom: string;
        gradientTo: string;
    }>;
    size?: 'large' | 'small';
    gridCols?: string;
}

export default function ProjectSection({
    title,
    projects,
    size = 'large',
    gridCols = 'lg:grid-cols-3'
}: ProjectSectionProps) {
    // 動畫變體
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const
            }
        }
    };

    const projectVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    const separatorVariants = {
        hidden: { scaleX: 0, opacity: 0 },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut" as const,
                delay: projects.length * 0.1 + 0.3
            }
        }
    };

    return (
        <motion.div
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* 標題區塊 */}
            <motion.div
                className="text-center mb-12"
                variants={titleVariants}
            >
                <motion.h2
                    className="text-3xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    {title}
                    <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    />
                </motion.h2>
                <motion.p
                    className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {size === 'large'
                        ? '以下是我精心製作的主要專案，展示了我在全端開發、移動應用和遊戲開發等領域的技能'
                        : '這些是我在學習過程中完成的小專案，涵蓋了多種技術和應用場景'
                    }
                </motion.p>
            </motion.div>

            {/* 專案網格 */}
            <motion.div
                className={`max-w-6xl mx-auto grid md:grid-cols-2 ${gridCols} gap-8 ${size === 'small' ? 'gap-6' : ''}`}
                variants={containerVariants}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={projectVariants}
                        whileHover={{
                            y: -8,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <ProjectCard
                            {...project}
                            size={size}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* 分隔線 */}
            {size === 'large' && (
                <motion.div
                    className="flex justify-center mt-16"
                    variants={separatorVariants}
                >
                    <motion.div
                        className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"
                        style={{ originX: 0.5 }}
                    />
                </motion.div>
            )}
        </motion.div>
    );
}
