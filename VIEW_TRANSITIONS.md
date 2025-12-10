# View Transition API 實現文檔

## 概述
已正確實現 **Astro View Transitions API**，提供現代化、平滑的頁面過渡動畫效果。

## 實現詳情

### 1. **Astro 配置更新** (`astro.config.mjs`)
```javascript
vite: {
  plugins: [tailwindcss()],
  ssr: {
    noExternal: ['framer-motion']  // 確保 framer-motion 正確處理
  }
}
```
- 啟用 Astro 內置的 View Transitions 支持
- 配置 SSR 外部化以避免依賴問題

### 2. **Layout 主文件** (`src/layouts/Layout.astro`)
```astro
import { ViewTransitions } from 'astro:transitions';
```
- 導入 Astro 提供的 `ViewTransitions` 組件
- 在 `<head>` 中添加 `<ViewTransitions />` 標籤
- 導入視圖過渡事件監聽腳本

### 3. **CSS 過渡動畫** (`src/styles/globals.css`)
```css
@supports (view-transition-name: auto) {
  ::view-transition-old(root) {
    animation: slide-out-fade 0.4s ease-in-out forwards;
  }

  ::view-transition-new(root) {
    animation: slide-in-fade 0.4s ease-in-out forwards;
  }
}
```
- 定義舊頁面退出動畫：向上淡出
- 定義新頁面進入動畫：向下淡入
- 使用 `@supports` 確保向後兼容性

### 4. **過渡事件管理** (`src/scripts/viewTransitions.ts`)
提供客戶端 API 和事件監聽：
- `viewTransitionsApi.isSupported()` - 檢查瀏覽器支持
- `viewTransitionsApi.onBeforeNavigation()` - 導航前回調
- `viewTransitionsApi.onAfterNavigation()` - 導航後回調

自動初始化功能：
- 導航後自動滾動到頂部
- 監聽 `astro:before-swap` 事件
- 監聽 `astro:after-swap` 事件

### 5. **React 組件集成** (`src/components/PageTransition.tsx`)
- 配合 Framer Motion 提供額外的內容級動畫
- 動畫時長調整為 0.4s 以與 View Transitions 同步
- 使用 cubic-bezier 緩動函數保持流暢感

## 動畫效果

### 頁面過渡動畫時序
```
導航開始
  ↓
  舊頁面淡出並向上滑動 (0.4s)
  ↓
  新頁面淡入並向下滑動 (0.4s)
  ↓
  導航完成 → 滾動到頂部
```

## 瀏覽器支持

| 瀏覽器 | 支持情況 |
|--------|--------|
| Chrome | 111+ ✅ |
| Edge | 111+ ✅ |
| Firefox | 待支持 (實驗性) |
| Safari | 17.1+ ✅ |

## 特性

✅ **無縫頁面過渡** - 無需頁面重新加載
✅ **平滑動畫效果** - 0.4 秒進退動畫
✅ **自動滾動管理** - 導航後自動回到頂部
✅ **事件生命週期** - 完整的導航事件鉤子
✅ **降級支持** - 不支持的瀏覽器正常導航
✅ **Framer Motion 集成** - 內容級動畫支持

## 使用方式

### 在 Astro 頁面中
所有使用 `PageLayout` 的頁面都自動獲得過渡效果：
```astro
<PageLayout>
  {/* 內容 */}
</PageLayout>
```

### 客戶端控制
```typescript
import { viewTransitionsApi } from '../scripts/viewTransitions';

// 檢查支持
if (viewTransitionsApi.isSupported()) {
  // 執行支持 View Transitions 的操作
}

// 註冊導航回調
viewTransitionsApi.onAfterNavigation(() => {
  console.log('導航完成');
});
```

## 性能優化

1. **減少動畫複雜度** - 使用簡單的 2D 變換
2. **GPU 加速** - 使用 `transform` 和 `opacity` 屬性
3. **適當時長** - 0.4 秒平衡感受和性能
4. **條件動畫** - 使用 `@supports` 防止不支持的瀏覽器出現卡頓

## 故障排除

### 過渡不起作用
1. 確認瀏覽器版本支持 View Transitions
2. 檢查 `<ViewTransitions />` 已添加到 Layout.astro
3. 驗證 CSS 過渡規則已加載到 globals.css

### 動畫閃爍
1. 檢查 `view-transition-duration` 設置
2. 確保動畫時長與 Framer Motion 時長一致
3. 驗證沒有衝突的全局 CSS 動畫

### 滾動問題
1. 檢查 `viewTransitions.ts` 是否已導入
2. 驗證 `initViewTransitions()` 已執行
3. 檢查瀏覽器控制台是否有錯誤

## 參考資源

- [Astro View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- [View Transition API MDN](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- [CSS 過渡動畫指南](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
