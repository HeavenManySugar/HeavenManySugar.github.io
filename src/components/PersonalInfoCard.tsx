/**
 * 個人基本資料卡片組件
 * 顯示姓名、學校、科系等基本資訊
 */

interface PersonalInfo {
    name: string;
    englishName: string;
    school: string;
    department: string;
    grade: string;
}

interface PersonalInfoCardProps {
    personalInfo: PersonalInfo;
}

export default function PersonalInfoCard({ personalInfo }: PersonalInfoCardProps) {
    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-600/50 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mr-2"></span>
                基本資料
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                    <span className="text-blue-500">👤</span>
                    <span><strong>姓名：</strong>{personalInfo.name} ({personalInfo.englishName})</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-green-500">🏫</span>
                    <span><strong>學校：</strong>{personalInfo.school}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-purple-500">📚</span>
                    <span><strong>科系：</strong>{personalInfo.department}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-orange-500">🎓</span>
                    <span><strong>年級：</strong>{personalInfo.grade}</span>
                </div>
            </div>
        </div>
    );
}

export type { PersonalInfo };
