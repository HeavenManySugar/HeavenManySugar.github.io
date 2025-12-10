/**
 * 教育背景卡片組件
 * 顯示單一教育經歷
 */

import { getColorClasses, type ColorVariant } from "../utils/colorUtils";

interface EducationItem {
    id: string;
    icon: string;
    bgColor: ColorVariant;
    institution: string;
    department: string;
    period: string;
    description: string;
}

interface EducationCardProps {
    education: EducationItem;
}

export default function EducationCard({ education }: EducationCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 ease-out hover:scale-105 group">
            <div className="flex items-center mb-4">
                <div className={`w-14 h-14 ${getColorClasses.background(education.bgColor)} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl group-hover:animate-bounce">{education.icon}</span>
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                        {education.institution}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {education.department} | <span className="font-medium text-blue-600 dark:text-blue-400">{education.period}</span>
                    </p>
                </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {education.description}
            </p>
            
            {/* 裝飾性底部條 */}
            <div className={`mt-4 h-1 ${getColorClasses.background(education.bgColor)} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
        </div>
    );
}

export type { EducationItem, ColorVariant };
