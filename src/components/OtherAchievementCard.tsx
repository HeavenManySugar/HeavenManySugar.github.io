/**
 * 其他成就卡片組件
 * 顯示除競賽外的其他重要成就
 */

import { getColorClasses, type ColorVariant } from "@/utils/colorUtils";

interface AchievementItem {
    emoji: string;
    title: string;
    subtitle: string;
    description: string;
    borderColor: ColorVariant;
}

interface OtherAchievementCardProps {
    achievement: AchievementItem;
}

export default function OtherAchievementCard({ achievement }: OtherAchievementCardProps) {
    return (
        <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl border-l-4 ${getColorClasses.border(achievement.borderColor)} hover:scale-105 transition-all duration-300 ease-out group relative overflow-hidden`}>
            {/* 背景裝飾 */}
            <div className={`absolute top-0 right-0 w-24 h-24 ${getColorClasses.background(achievement.borderColor)} opacity-10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500`}></div>
            
            <div className="flex items-start relative z-10">
                <span className="text-3xl mr-4 group-hover:scale-125 group-hover:animate-bounce transition-all duration-300">{achievement.emoji}</span>
                <div className="flex-1">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {achievement.title}
                    </h5>
                    <p className={`text-sm mb-3 font-medium ${getColorClasses.accent(achievement.borderColor)}`}>
                        {achievement.subtitle}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                        {achievement.description}
                    </p>
                </div>
            </div>
            
            {/* 底部裝飾線 */}
            <div className={`mt-4 h-1 ${getColorClasses.background(achievement.borderColor)} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
        </div>
    );
}

export type { AchievementItem, ColorVariant };
