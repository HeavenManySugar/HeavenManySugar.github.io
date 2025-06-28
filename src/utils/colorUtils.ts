/**
 * 顏色相關的工具函數
 * 統一管理所有組件的顏色樣式
 */

export type ColorVariant =
    'blue'|'green'|'purple'|'orange'|'yellow'|'red'|'pink';

/** 取得顏色相關的 CSS 類名 */
export const getColorClasses = {
  background: (color: ColorVariant) => {
    const colorMap: Record<ColorVariant, string> = {
      blue: 'bg-blue-100 dark:bg-blue-900',
      green: 'bg-green-100 dark:bg-green-900',
      purple: 'bg-purple-100 dark:bg-purple-900',
      orange: 'bg-orange-100 dark:bg-orange-900',
      yellow: 'bg-yellow-100 dark:bg-yellow-900',
      red: 'bg-red-100 dark:bg-red-900',
      pink: 'bg-pink-100 dark:bg-pink-900'
    };
    return colorMap[color];
  },

  text: (color: ColorVariant) => {
    const colorMap: Record<ColorVariant, string> = {
      blue: 'text-blue-800 dark:text-blue-200',
      green: 'text-green-800 dark:text-green-200',
      purple: 'text-purple-800 dark:text-purple-200',
      orange: 'text-orange-800 dark:text-orange-200',
      yellow: 'text-yellow-800 dark:text-yellow-200',
      red: 'text-red-800 dark:text-red-200',
      pink: 'text-pink-800 dark:text-pink-200'
    };
    return colorMap[color];
  },

  border: (color: ColorVariant) => {
    const colorMap: Record<ColorVariant, string> = {
      blue: 'border-blue-500',
      green: 'border-green-500',
      purple: 'border-purple-500',
      orange: 'border-orange-500',
      yellow: 'border-yellow-500',
      red: 'border-red-500',
      pink: 'border-pink-500'
    };
    return colorMap[color];
  },

  highlight: (color: ColorVariant) => {
    const colorMap: Record<ColorVariant, string> = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200',
      green:
          'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200',
      purple:
          'bg-purple-50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200',
      orange:
          'bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200',
      yellow:
          'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200',
      red: 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200',
      pink: 'bg-pink-50 dark:bg-pink-900/20 text-pink-800 dark:text-pink-200'
    };
    return colorMap[color];
  },

  accent: (color: ColorVariant) => {
    const colorMap: Record<ColorVariant, string> = {
      blue: 'text-blue-600 dark:text-blue-400',
      green: 'text-green-600 dark:text-green-400',
      purple: 'text-purple-600 dark:text-purple-400',
      orange: 'text-orange-600 dark:text-orange-400',
      yellow: 'text-yellow-600 dark:text-yellow-400',
      red: 'text-red-600 dark:text-red-400',
      pink: 'text-pink-600 dark:text-pink-400'
    };
    return colorMap[color];
  }
};
