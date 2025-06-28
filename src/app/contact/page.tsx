import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiGitea } from 'react-icons/si';

export const metadata: Metadata = {
    title: "聯絡我 - 張睿恩 (Rui-En Zhang)",
    description: "與張睿恩聯絡 - 歡迎討論技術交流或任何開發相關話題",
};

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900">
            <Header />

            {/* Contact Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
                        聯絡我
                    </h1>
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="space-y-8">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-6">
                                        <MdEmail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-gray-800 dark:text-white">電子郵件</h3>
                                        <a
                                            href="mailto:me@zre.tw"
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            me@zre.tw
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-6">
                                        <FaGithub className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-gray-800 dark:text-white">GitHub</h3>
                                        <a
                                            href="https://github.com/heavenmanysugar"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            github.com/heavenmanysugar
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-6">
                                        <SiGitea className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-gray-800 dark:text-white">Gitea</h3>
                                        <a
                                            href="https://gitea.com/zre"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            gitea.com/zre
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-6">
                                        <FaLinkedin className="w-6 h-6 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h3>
                                        <a
                                            href="https://linkedin.com/in/ruien-zhang"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            linkedin.com/in/ruien-zhang
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
