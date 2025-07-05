'use client';

import { useEffect, useState } from 'react';
import MotionWrapper from '@/components/MotionWrapper';
import type { BuildInfo } from '@/types/build-info';

interface BuildInfoProps {
    buildTime: BuildInfo['buildTime'];
    shortCommitHash: BuildInfo['shortCommitHash'];
    branchName: BuildInfo['branchName'];
}

export default function ClientOnlyBuildInfo({ buildTime, shortCommitHash, branchName }: BuildInfoProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Don't render anything during SSR to avoid hydration mismatch
    if (!isMounted) {
        return (
            <MotionWrapper
                type="div"
                className="text-xs text-gray-500 space-y-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
            >
                <p>                Build: <span className="font-mono text-gray-400">{shortCommitHash}</span>
                    {branchName !== 'unknown' && branchName !== 'dev' && (
                        <span className="ml-2">
                            on <a
                                href={`https://github.com/HeavenManySugar/HeavenManySugar.github.io/tree/${branchName}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-gray-400 hover:text-blue-400 hover:underline transition-colors"
                            >
                                {branchName}
                            </a>
                        </span>
                    )}
                </p>
                <p>
                    Built: <span className="text-gray-400">Loading...</span>
                </p>
            </MotionWrapper>
        );
    }

    return (
        <MotionWrapper
            type="div"
            className="text-xs text-gray-500 space-y-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
        >
            <p>
                Build: <span className="font-mono text-gray-400">{shortCommitHash}</span>
                {branchName !== 'unknown' && branchName !== 'dev' && (
                    <span className="ml-2">
                        on <a
                            href={`https://github.com/HeavenManySugar/HeavenManySugar.github.io/tree/${branchName}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-gray-400 hover:text-blue-400 hover:underline transition-colors"
                        >
                            {branchName}
                        </a>
                    </span>
                )}
            </p>
            {buildTime && buildTime !== 'unknown' && (
                <p>
                    Built: <span className="text-gray-400">
                        {new Date(buildTime).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            timeZone: 'UTC'
                        })} UTC
                    </span>
                </p>
            )}
        </MotionWrapper>
    );
}
