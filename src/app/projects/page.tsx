import ProjectsClient from "@/app/projects/clientPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "專案作品",
    description: "探索我的專案作品，了解我在軟體開發、網頁設計和其他技術領域的實際應用。",
};
export default function Projects() {
    return (
        <ProjectsClient />
    );
}