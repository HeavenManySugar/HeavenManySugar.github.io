'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import MotionWrapper from '@/components/MotionWrapper';

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: '/about', label: '關於我' },
        { href: '/skills', label: '技能' },
        { href: '/projects', label: '專案' },
        { href: '/contact', label: '聯絡我' }
    ];

    return (
        <MotionWrapper
            type="header"
            className="container mx-auto px-6 py-8 relative z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <nav className="flex justify-between items-center">
                <MotionWrapper
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/"
                        className="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                    >
                        張睿恩 (Rui-En Zhang)
                    </Link>
                </MotionWrapper>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, index) => (
                        <MotionWrapper
                            key={item.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -2 }}
                        >
                            <Link
                                href={item.href}
                                className={`relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium ${pathname === item.href ? 'text-gray-900 dark:text-white font-semibold' : ''
                                    }`}
                            >
                                {item.label}
                                {pathname === item.href && (
                                    <MotionWrapper
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-800 dark:bg-white rounded-full"
                                        layoutId="activeTab"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </Link>
                        </MotionWrapper>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <MotionWrapper
                    type="button"
                    className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" />
                    )}
                </MotionWrapper>
            </nav>

            {/* Mobile Navigation */}
            <MotionWrapper
                className={`md:hidden mt-4 ${isMenuOpen ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                    {navItems.map((item, index) => (
                        <MotionWrapper
                            key={item.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                className={`block py-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium ${pathname === item.href ? 'text-gray-900 dark:text-white font-semibold' : ''
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </MotionWrapper>
                    ))}
                </div>
            </MotionWrapper>
        </MotionWrapper>
    );
}
