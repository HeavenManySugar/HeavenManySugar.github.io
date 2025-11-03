'use client';

import ProjectCard from './ProjectCard';
import MotionWrapper from './MotionWrapper';

interface ProjectSectionProps {
    title: string;
    projects: Array<{
        title: string;
        description: string;
        technologies: string[];
        projectUrl?: string;
        githubUrl: string;
        icon: string;
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
        <div className="container mx-auto px-6 lg:px-8 mb-12">
            {/* 標題區塊 */}
            <MotionWrapper
                className="mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                    staggerChildren: 0.12,
                    delayChildren: 0.2
                }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lxgw-wenkai-mono-tc-regular">
                    {size === 'large'
                        ? '以下是我精心製作的主要專案，展示了我在全端開發、移動應用和遊戲開發等領域的技能'
                        : '這些是我在學習過程中完成的小專案，涵蓋了多種技術和應用場景'
                    }
                </p>
            </MotionWrapper>

            {/* 專案網格 */}
            <MotionWrapper
                className={`grid md:grid-cols-2 ${gridCols} gap-6`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                    staggerChildren: 0.12,
                    delayChildren: 0.2
                }}
                viewport={{ once: true, margin: "-100px" }}
            >
                {projects.map((project) => (
                    <MotionWrapper
                        key={project.title}
                        variants={itemVariants}
                        whileHover={{ y: -4 }}
                    >
                        <ProjectCard
                            {...project}
                            size={size}
                        />
                    </MotionWrapper>
                ))}
            </MotionWrapper>
        </div>
    );
}
