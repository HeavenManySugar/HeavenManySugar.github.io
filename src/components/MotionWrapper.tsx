"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { forwardRef, useEffect, useState } from 'react';

interface MotionWrapperProps {
    type?: keyof typeof motion;
    children?: React.ReactNode;
    fallback?: React.ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const MotionWrapper = forwardRef<HTMLElement, MotionWrapperProps>(({ type, children, fallback, ...props }, ref) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // 直接從 motion 對象中獲取組件，預設為 div
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Component = (type && (motion as any)[type]) ? (motion as any)[type] : motion.div;

    // 提取非motion屬性，並確保包含 style 屬性
    const staticProps = Object.fromEntries(
        Object.entries(props).filter(([key]) =>
            !['initial', 'animate', 'exit', 'transition', 'variants', 'whileHover', 'whileTap', 'whileInView', 'viewport', 'onAnimationComplete', 'layoutId'].includes(key)
        )
    );

    // 如果在服務端渲染或JavaScript未載入，顯示靜態版本
    if (!isClient) {
        // 確保靜態版本是完全可見的，覆蓋任何可能隱藏元素的 CSS
        const staticStyle = {
            ...props.style,
            opacity: 1,
            transform: 'none',
            visibility: 'visible'
        };

        return React.createElement(
            type || 'div',
            { ...staticProps, style: staticStyle, ref },
            fallback || children
        );
    }

    return (
        <>
            <Component
                ref={ref}
                {...props}
            >
                {children}
            </Component>
            <noscript>
                {React.createElement(
                    type || 'div',
                    {
                        ...staticProps,
                        style: {
                            ...staticProps.style,
                            opacity: 1,
                            transform: 'none',
                            visibility: 'visible'
                        }
                    },
                    fallback || children
                )}
            </noscript>
        </>
    );
});

MotionWrapper.displayName = "MotionWrapper";

export default MotionWrapper;