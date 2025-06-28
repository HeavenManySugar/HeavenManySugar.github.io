/**
 * 自傳段落組件
 * 逐段顯示個人經歷與背景
 */

interface BiographySectionProps {
    paragraphs: readonly string[];
}

export default function BiographySection({ paragraphs }: BiographySectionProps) {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200/30 dark:border-blue-700/30 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
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
