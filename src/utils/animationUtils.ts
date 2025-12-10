/**
 * 動畫工具函數
 * 提供統一的動畫效果和延遲管理
 */

/**
 * 生成淡入動畫類別
 * @param direction 動畫方向 'up' | 'down' | 'left' | 'right'
 * @param delay 延遲時間（毫秒）
 * @returns Tailwind CSS 類別字串
 */
export function getFadeInAnimation(
    direction: 'up' | 'down' | 'left' | 'right' = 'up',
    delay: number = 0
): string {
    const baseClass = `animate-in slide-in-from-${direction === 'up' ? 'bottom' : direction === 'down' ? 'top' : direction}-8 duration-700 ease-out`;
    const delayClass = delay > 0 ? `animation-delay-${delay}ms` : '';
    return `${baseClass} ${delayClass}`.trim();
}

/**
 * 生成錯落動畫延遲
 * @param index 索引
 * @param baseDelay 基礎延遲時間（毫秒）
 * @returns 延遲類別
 */
export function getStaggerDelay(index: number, baseDelay: number = 200): string {
    return `animation-delay-${index * baseDelay}ms`;
}

/**
 * 懸浮效果類別組合
 */
export const hoverEffects = {
    lift: 'hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-out',
    glow: 'hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300',
    bounce: 'hover:animate-bounce',
    rotate: 'hover:rotate-6 transition-transform duration-300',
    scale: 'hover:scale-110 transition-transform duration-200',
} as const;

/**
 * 漸變背景類別
 */
export const gradientBackgrounds = {
    primary: 'bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500',
    secondary: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
    accent: 'bg-gradient-to-r from-blue-600 to-purple-600',
    subtle: 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50',
    dark: 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900',
} as const;

/**
 * 現代化卡片效果
 */
export const cardEffects = {
    glass: 'bg-white/10 backdrop-blur-lg border border-white/20',
    modern: 'modern-card hover:modern-card',
    interactive: 'interactive-hover magnetic',
    floating: 'hover-lift animate-float',
} as const;

/**
 * 文字效果
 */
export const textEffects = {
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
    glow: 'text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]',
    shine: 'animate-shimmer',
} as const;

/**
 * 組合動畫效果
 * @param effects 效果數組
 * @returns 組合的類別字串
 */
export function combineEffects(...effects: string[]): string {
    return effects.filter(Boolean).join(' ');
}

export type AnimationDirection = 'up' | 'down' | 'left' | 'right';
export type HoverEffect = keyof typeof hoverEffects;
export type GradientBackground = keyof typeof gradientBackgrounds;
export type CardEffect = keyof typeof cardEffects;
export type TextEffect = keyof typeof textEffects;
