"use client";

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface MotionWrapperProps {
    type?: keyof typeof motion;
    children?: React.ReactNode;
    [key: string]: unknown;
}

const MotionWrapper = forwardRef<HTMLDivElement, MotionWrapperProps>(({ type, children, ...props }, ref) => {
    const Component =
        type && typeof type === "string" && type in motion
            ? (motion as unknown as Record<string, React.ComponentType<React.HTMLAttributes<HTMLElement>>>)[type as string]
            : motion.div;

    return <Component ref={ref} {...props}>{children as React.ReactNode}</Component>;
});

MotionWrapper.displayName = "MotionWrapper";

export default MotionWrapper;