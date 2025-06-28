import ProjectCard from './ProjectCard';

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
    return (
        <div className="mb-20">
            {/* 標題區塊 */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block">
                    {title}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
                    {size === 'large'
                        ? '以下是我精心製作的主要專案，展示了我在全端開發、移動應用和遊戲開發等領域的技能'
                        : '這些是我在學習過程中完成的小專案，涵蓋了多種技術和應用場景'
                    }
                </p>
            </div>

            {/* 專案網格 */}
            <div className={`max-w-6xl mx-auto grid md:grid-cols-2 ${gridCols} gap-8 ${size === 'small' ? 'gap-6' : ''}`}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="opacity-0 animate-fade-in-up"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            animationFillMode: 'forwards'
                        }}
                    >
                        <ProjectCard
                            {...project}
                            size={size}
                        />
                    </div>
                ))}
            </div>

            {/* 分隔線 */}
            {size === 'large' && (
                <div className="flex justify-center mt-16">
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
                </div>
            )}
        </div>
    );
}
