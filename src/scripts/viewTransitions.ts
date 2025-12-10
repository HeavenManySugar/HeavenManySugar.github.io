/**
 * View Transitions API 事件處理
 * 管理頁面過渡時的各種事件和回調
 */

interface ViewTransitionsApi {
  isSupported: () => boolean;
  onBeforeNavigation: (callback: () => void) => void;
  onAfterNavigation: (callback: () => void) => void;
}

declare global {
  interface Window {
    navigation?: {
      addEventListener: (event: string, handler: EventListener) => void;
      removeEventListener: (event: string, handler: EventListener) => void;
    };
  }
}

export const viewTransitionsApi: ViewTransitionsApi = {
  /**
   * 檢查瀏覽器是否支持 View Transitions API
   */
  isSupported: () => {
    return 'startViewTransition' in document;
  },

  /**
   * 在導航開始前執行回調
   * 用於狀態清理、分析追蹤等
   */
  onBeforeNavigation: (callback: () => void) => {
    if (!viewTransitionsApi.isSupported() || !window.navigation) {
      return;
    }

    const handler = () => {
      callback();
    };

    window.navigation?.addEventListener('navigate', handler);
  },

  /**
   * 在導航完成後執行回調
   * 用於滾動位置恢復、分析上報等
   */
  onAfterNavigation: (callback: () => void) => {
    // 使用 'astro:after-swap' 事件（Astro 4.0+）
    if ('astro:after-swap' in document) {
      document.addEventListener(
        'astro:after-swap' as any,
        () => {
          callback();
        },
        { once: false }
      );
    }

    // 備選方案：使用 ViewTransitionEvent
    if (viewTransitionsApi.isSupported()) {
      document.addEventListener('viewtransitionend', () => {
        callback();
      });
    }
  },
};

/**
 * 初始化 View Transitions 監聽
 */
export function initViewTransitions() {
  if (!viewTransitionsApi.isSupported()) {
    console.debug('View Transitions API 不支持');
    return;
  }

  // 在導航後滾動到頂部
  viewTransitionsApi.onAfterNavigation(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  });

  // 監聽過渡開始
  document.addEventListener('astro:before-swap' as any, () => {
    // 可用於隱藏彈出窗口、關閉菜單等
  });

  // 監聽過渡完成
  document.addEventListener('astro:after-swap' as any, () => {
    // 頁面加載完成
  });

  console.debug('View Transitions 已初始化');
}

// 自動初始化
if (typeof window !== 'undefined') {
  initViewTransitions();
}
