/**
 * 自傳段落組件
 * 逐段顯示個人經歷與背景
 */

interface BiographySectionProps {
    paragraphs: readonly string[];
}

export default function BiographySection({ paragraphs }: BiographySectionProps) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mr-2"></span>
                自傳
            </h3>
            <div className="space-y-4">
                {paragraphs.map((paragraph, index) => (
                    <p 
                        key={index} 
                        className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                        style={{ animationDelay: `${index * 200}ms` }}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}
