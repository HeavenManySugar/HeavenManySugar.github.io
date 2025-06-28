import SkillsClient from "@/app/skills/clientPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "技能",
    description: "探索我的技能和專業領域，了解我在軟體開發、網頁設計和其他技術領域的能力。",
};

export default function Skills() {
    return (
        <SkillsClient />
    );
}
