/**
 * 技術發展階段卡片組件
 * 顯示技術學習歷程中的各個階段
 */

import { getColorClasses, type ColorVariant } from "@/utils/colorUtils";

interface TechStageItem {
    icon: string;
    bgColor: ColorVariant;
    borderColor: string;
    title: string;
    description: string;
    skills: readonly string[];
}

interface TechStageCardProps {
    stage: TechStageItem;
}

export default function TechStageCard({ stage }: TechStageCardProps) {
    return (
        <div className={`bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl border-l-4 border-${stage.borderColor} hover:scale-105 transition-all duration-300 ease-out group relative overflow-hidden`}>
            {/* 背景裝飾圖案 */}
            <div className={`absolute top-0 right-0 w-40 h-40 ${getColorClasses.background(stage.bgColor)} opacity-5 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-500`}></div>
            
            <div className="flex items-start relative z-10">
                <div className={`w-16 h-16 ${getColorClasses.background(stage.bgColor)} rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <span className="text-3xl group-hover:animate-pulse">{stage.icon}</span>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {stage.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {stage.description}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {stage.skills.map((skill, index) => (
                            <span
                                key={skill}
                                className={`${getColorClasses.background(stage.bgColor)} ${getColorClasses.text(stage.bgColor)} px-4 py-2 rounded-lg text-xs text-center font-medium hover:scale-105 transition-all duration-200 cursor-default shadow-sm hover:shadow-md`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* 底部進度條 */}
            <div className={`mt-6 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden`}>
                <div className={`h-full ${getColorClasses.background(stage.bgColor)} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>
            </div>
        </div>
    );
}

export type { TechStageItem, ColorVariant };
