/**
 * 專業領域標籤組件
 * 展示擅長的技術領域
 */

import { getColorClasses, type ColorVariant } from "../utils/colorUtils";

interface ProfessionalArea {
    label: string;
    color: ColorVariant;
}

interface ProfessionalAreasCardProps {
    areas: readonly ProfessionalArea[];
}

export default function ProfessionalAreasCard({ areas }: ProfessionalAreasCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200/30 dark:border-gray-700/30 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mr-2"></span>
                專業領域
            </h3>
            <div className="flex flex-wrap gap-3">
                {areas.map((area, index) => (
                    <span
                        key={area.label}
                        className={`${getColorClasses.background(area.color)} ${getColorClasses.text(area.color)} px-4 py-2 rounded-full text-sm font-medium hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {area.label}
                    </span>
                ))}
            </div>
        </div>
    );
}

export type { ProfessionalArea, ColorVariant };
