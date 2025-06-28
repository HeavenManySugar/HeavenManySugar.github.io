import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiGitea } from 'react-icons/si';

export default function Footer() {
    return (
        <footer className="bg-gray-800 dark:bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h5 className="text-2xl font-bold mb-4">張睿恩 (Rui-En Zhang)</h5>
                    <p className="text-gray-400 mb-6">
                        熱愛程式開發，喜歡學習新技術 ✨
                    </p>
                    <p className="text-gray-400 mb-6">
                        Passionate about coding and always learning something new 🚀
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://github.com/heavenmanysugar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                        >
                            <FaGithub className="w-5 h-5" />
                            <span className="group-hover:underline">heavenmanysugar</span>
                        </a>
                        <a
                            href="https://gitea.com/zre"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                        >
                            <SiGitea className="w-5 h-5" />
                            <span className="group-hover:underline">zre</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/ruien-zhang"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                        >
                            <FaLinkedin className="w-5 h-5" />
                            <span className="group-hover:underline">ruien-zhang</span>
                        </a>
                        <a
                            href="mailto:me@zre.tw"
                            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                        >
                            <MdEmail className="w-5 h-5" />
                            <span className="group-hover:underline">me@zre.tw</span>
                        </a>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700">
                        <p className="text-gray-400 text-sm">
                            Made with ❤️ by 張睿恩 (Rui-En Zhang) © 2025
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
