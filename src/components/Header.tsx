'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="container mx-auto px-6 py-8">
            <nav className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    張睿恩 (Rui-En Zhang)
                </Link>
                <div className="hidden md:flex space-x-8">
                    <Link
                        href="/about"
                        className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${pathname === '/about' ? 'text-blue-600 dark:text-blue-400' : ''
                            }`}
                    >
                        關於我
                    </Link>
                    <Link
                        href="/skills"
                        className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${pathname === '/skills' ? 'text-blue-600 dark:text-blue-400' : ''
                            }`}
                    >
                        技能
                    </Link>
                    <Link
                        href="/projects"
                        className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${pathname === '/projects' ? 'text-blue-600 dark:text-blue-400' : ''
                            }`}
                    >
                        專案
                    </Link>
                    <Link
                        href="/contact"
                        className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${pathname === '/contact' ? 'text-blue-600 dark:text-blue-400' : ''
                            }`}
                    >
                        聯絡我
                    </Link>
                </div>
            </nav>
        </header>
    );
}
