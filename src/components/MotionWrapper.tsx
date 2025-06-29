"use client";

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface MotionWrapperProps {
    type?: keyof typeof motion;
    children?: React.ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const MotionWrapper = forwardRef<HTMLElement, MotionWrapperProps>(({ type, children, ...props }, ref) => {
    // 直接從 motion 對象中獲取組件，預設為 div
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Component = (type && (motion as any)[type]) ? (motion as any)[type] : motion.div;

    return (
        <Component
            ref={ref}
            {...props}
        >
            {children}
        </Component>
    );
});

MotionWrapper.displayName = "MotionWrapper";

export default MotionWrapper;