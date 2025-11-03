'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-300 transform-gpu z-[9999] shadow-lg pointer-events-none"
            style={{ scaleX, transformOrigin: "0%" }}
        />
    );
}
