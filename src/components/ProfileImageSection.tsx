/**
 * 個人頭像區域組件
 * 顯示個人形象與基本身份資訊
 */

interface ProfileImageSectionProps {
    name: string;
    englishName: string;
}

export default function ProfileImageSection({ name, englishName }: ProfileImageSectionProps) {
    return (
        <div className="relative group">
            <div className="w-full h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center relative transform hover:scale-105 transition-all duration-500 ease-out">
                {/* 動態背景效果 */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-xy"></div>
                
                {/* 浮動裝飾元素 */}
                <div className="absolute top-6 left-6 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
                <div className="absolute top-12 right-8 w-3 h-3 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-8 left-12 w-2 h-2 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                
                <div className="text-white text-center relative z-10">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg border border-white/30">
                        <span className="text-6xl group-hover:animate-pulse">👨‍💻</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">{name}</h3>
                    <p className="text-white/90 text-lg font-medium tracking-wide">{englishName}</p>
                    
                    {/* 裝飾性下劃線 */}
                    <div className="mt-4 w-16 h-1 bg-white/50 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
                </div>
                
                {/* 邊框發光效果 */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
            </div>
            
            {/* 陰影效果 */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10 transform scale-95"></div>
        </div>
    );
}
