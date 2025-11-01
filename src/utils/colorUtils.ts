/**
 * 顏色相關的工具函數
 * 統一管理所有組件的顏色樣式
 */

export type ColorVariant =
    'green'|'orange'|'yellow'|'red'|'gray'|'brown';

/** 取得顏色相關的 CSS 類名 */
export const getColorClasses = {
  background: (color: ColorVariant) => {
    const colorMap: Record<ColorVariant, string> = {
      green: 'bg-green-100 dark:bg-green-900',
      orange: 'bg-orange-100 dark:bg-orange-900',
      yellow: 'bg-yellow-100 dark:bg-yellow-900',
      red: 'bg-red-100 dark:bg-red-900',
      gray: 'bg-gray-100 dark:bg-gray-800',
      brown: 'bg-amber-100 dark:bg-amber-900'
    };
    return colorMap[color];
  },

  text: (color: ColorVariant) => {
    const colorMap: Record<ColorVariant, string> = {
      green: 'text-green-800 dark:text-green-200',
      orange: 'text-orange-800 dark:text-orange-200',
      yellow: 'text-yellow-800 dark:text-yellow-200',
      red: 'text-red-800 dark:text-red-200',
      gray: 'text-gray-800 dark:text-gray-200',
      brown: 'text-amber-800 dark:text-amber-200'
    };
    return colorMap[color];
  },

  border: (color: ColorVariant) => {
    const colorMap: Record<ColorVariant, string> = {
      green: 'border-green-500',
      orange: 'border-orange-500',
      yellow: 'border-yellow-500',
      red: 'border-red-500',
      gray: 'border-gray-500',
      brown: 'border-amber-600'
    };
    return colorMap[color];
  },

  highlight: (color: ColorVariant) => {
    const colorMap: Record<ColorVariant, string> = {
      green: 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200',
      orange:
          'bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200',
      yellow:
          'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200',
      red: 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200',
      gray: 'bg-gray-50 dark:bg-gray-900/20 text-gray-800 dark:text-gray-200',
      brown: 'bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200'
    };
    return colorMap[color];
  },

  accent: (color: ColorVariant) => {
    const colorMap: Record<ColorVariant, string> = {
      green: 'text-green-600 dark:text-green-400',
      orange: 'text-orange-600 dark:text-orange-400',
      yellow: 'text-yellow-600 dark:text-yellow-400',
      red: 'text-red-600 dark:text-red-400',
      gray: 'text-gray-600 dark:text-gray-400',
      brown: 'text-amber-600 dark:text-amber-400'
    };
    return colorMap[color];
  }
};
