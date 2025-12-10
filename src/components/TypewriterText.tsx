import React, { useState, useEffect } from 'react';
import MotionWrapper from './MotionWrapper';

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  showStaticText?: boolean;
  className?: string;
  variants?: any;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetweenTexts = 2000,
  showStaticText = true,
  className = '',
  variants,
}) => {
  // SEO 改善：初始顯示第一段完整文本，確保爬蟲能讀到內容
  const [displayedText, setDisplayedText] = useState(showStaticText ? texts[0] : '');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAnimating, setIsAnimating] = useState(!showStaticText);

  useEffect(() => {
    // SEO 改善：初始加載時顯示完整文本，延遲一段時間後再開始動畫
    if (showStaticText && isAnimating === false) {
      const startDelay = setTimeout(() => {
        setIsAnimating(true);
      }, delayBetweenTexts);
      return () => clearTimeout(startDelay);
    }

    const currentText = texts[textIndex];
    let timer: NodeJS.Timeout;

    if (!isAnimating) return;

    if (!isDeleting) {
      // 正在輸入
      if (displayedText.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // 輸入完成，等待後開始刪除
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenTexts);
      }
    } else {
      // 正在刪除
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        // 刪除完成，切換到下一個文本
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delayBetweenTexts, isAnimating, showStaticText]);

  return (
    <MotionWrapper
      type="p"
      className={className}
      variants={variants}
    >
      {displayedText}
      <span className="animate-pulse">▌</span>
    </MotionWrapper>
  );
};

export default TypewriterText;
