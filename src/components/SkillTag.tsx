interface SkillTagProps {
    skill: string;
}

export default function SkillTag({ skill }: SkillTagProps) {
    return (
        <span className="inline-block px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
            {skill}
        </span>
    );
}
