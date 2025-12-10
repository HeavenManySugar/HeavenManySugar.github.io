import React from 'react';
import { motion } from 'framer-motion';
import { forwardRef, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface MotionWrapperProps {
    type?: keyof typeof motion;
    children?: ReactNode;
    fallback?: ReactNode;
    variants?: any;
    initial?: string | boolean;
    animate?: string | boolean;
    exit?: string | boolean;
    whileHover?: any;
    whileTap?: any;
    whileInView?: string | boolean;
    viewport?: any;
    transition?: any;
    layoutId?: string;
    onAnimationComplete?: (definition?: any) => void;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
}

const MotionWrapper = forwardRef<HTMLElement, MotionWrapperProps>(
    (
        {
            type,
            children,
            fallback,
            variants,
            initial,
            animate,
            exit,
            whileHover,
            whileTap,
            whileInView,
            viewport,
            transition,
            layoutId,
            onAnimationComplete,
            ...props
        },
        ref
    ) => {
        const [isClient, setIsClient] = useState(false);

        useEffect(() => {
            setIsClient(true);
        }, []);

        // 直接從 motion 對象中獲取組件，預設為 div
        const Component = (type && (motion as any)[type])
            ? (motion as any)[type]
            : motion.div;

        // 提取非motion屬性
        const staticProps = {
            ...props,
        };

        // 如果在服務端渲染，顯示靜態版本（完全可見）
        if (!isClient) {
            const staticStyle = {
                ...props.style,
                opacity: 0,
                transform: 'none',
                visibility: 'visible' as const,
            };

            return React.createElement(
                type || 'div',
                {
                    ...staticProps,
                    ref,
                    style: staticStyle,
                },
                fallback || children
            );
        }

        // 構建motion屬性
        const motionProps: any = {
            ref,
            ...staticProps,
        };

        // 只有在有 whileInView 時才使用 whileInView，否則使用標準的 initial/animate
        if (whileInView !== undefined) {
            motionProps.initial = initial ?? 'hidden';
            motionProps.whileInView = whileInView;
            motionProps.viewport = viewport;
            motionProps.transition = transition;
        } else {
            motionProps.initial = initial ?? 'hidden';
            motionProps.animate = animate ?? 'visible';
            motionProps.transition = transition;
        }

        // 添加其他motion屬性
        if (variants) motionProps.variants = variants;
        if (whileHover) motionProps.whileHover = whileHover;
        if (whileTap) motionProps.whileTap = whileTap;
        if (exit) motionProps.exit = exit;
        if (layoutId) motionProps.layoutId = layoutId;
        if (onAnimationComplete) motionProps.onAnimationComplete = onAnimationComplete;

        return (
            <>
                <Component {...motionProps}>{children}</Component>
                <noscript>
                    {React.createElement(
                        type || 'div',
                        {
                            ...staticProps,
                            style: {
                                ...props.style,
                                opacity: 1,
                                transform: 'none',
                                visibility: 'visible',
                            },
                        },
                        fallback || children
                    )}
                </noscript>
            </>
        );
    }
);

MotionWrapper.displayName = "MotionWrapper";

export default MotionWrapper;