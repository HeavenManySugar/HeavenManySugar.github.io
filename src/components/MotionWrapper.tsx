"use client";

import { motion } from 'framer-motion';
import { forwardRef, ReactNode } from 'react';

interface MotionWrapperProps {
    type?: string;
    children?: ReactNode;
    [key: string]: any;
}

const MotionWrapper = forwardRef<any, MotionWrapperProps>(({ type, children, ...props }, ref) => {
    const Component = type ? (motion as any)[type] : motion.div;

    return <Component ref={ref} {...props}>{children}</Component>;
});

export default MotionWrapper;