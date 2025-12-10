import MotionWrapper from "./MotionWrapper";
import SkillTag from "./SkillTag";

interface SkillSectionProps {
    icon: string;
    title: string;
    description: string;
    skills: string[];
    centered?: boolean;
}

export default function SkillSection({ 
    icon, 
    title, 
    description, 
    skills, 
    centered = false 
}: SkillSectionProps) {
    return (
        <MotionWrapper
            className={`p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900 ${
                centered ? 'md:col-span-2 lg:col-span-3 mx-auto max-w-2xl' : ''
            }`}
            variants={{
                hidden: { y: 12, opacity: 0 },
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94] as const
                    }
                }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className={`flex items-start gap-4 mb-6 ${centered ? 'flex-col text-center items-center' : ''}`}>
                <div className="text-4xl shrink-0 flex items-center justify-center h-12">
                    {icon}
                </div>
                <div className={centered ? 'w-full' : ''}>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
            <div className={`flex flex-wrap gap-2 ${centered ? 'justify-center' : ''}`}>
                {skills.map((skill) => (
                    <SkillTag key={skill} skill={skill} />
                ))}
            </div>
        </MotionWrapper>
    );
}
