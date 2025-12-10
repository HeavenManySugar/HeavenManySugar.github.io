/**
 * 獲獎卡片組件
 * 顯示競賽或比賽獲獎記錄
 */

import { getColorClasses, type ColorVariant } from "../utils/colorUtils";

interface AwardItem {
    emoji: string;
    title: string;
    subtitle: string;
    award: string;
    ranking: string;
    description: string;
    borderColor: ColorVariant;
}

interface AwardCardProps {
    award: AwardItem;
    showRanking?: boolean;
}

export default function AwardCard({ award, showRanking = true }: AwardCardProps) {
    return (
        <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl border-l-4 ${getColorClasses.border(award.borderColor)} hover:scale-105 transition-all duration-300 ease-out group relative overflow-hidden`}>
            {/* 背景裝飾 */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${getColorClasses.background(award.borderColor)} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
            
            <div className="flex items-start relative z-10">
                <span className="text-3xl mr-4 group-hover:scale-125 group-hover:animate-bounce transition-all duration-300">{award.emoji}</span>
                <div className="flex-1">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                        {award.title}
                    </h5>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        {award.subtitle} - <span className={`font-bold text-lg ${getColorClasses.accent(award.borderColor)}`}>{award.award}</span>
                    </p>
                    {showRanking && (
                        <div className={`${getColorClasses.highlight(award.borderColor)} p-4 rounded-lg mb-3 border ${getColorClasses.border(award.borderColor)} border-opacity-20 hover:border-opacity-40 transition-all duration-200`}>
                            <p className="text-sm font-medium flex items-center">
                                <span className="text-lg mr-2">🏅</span>
                                排名: <span className="ml-1 font-bold">{award.ranking}</span>
                            </p>
                        </div>
                    )}
                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                        {award.description}
                    </p>
                </div>
            </div>
            
            {/* 底部裝飾線 */}
            <div className={`mt-4 h-1 ${getColorClasses.background(award.borderColor)} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
        </div>
    );
}

export type { AwardItem, ColorVariant };
