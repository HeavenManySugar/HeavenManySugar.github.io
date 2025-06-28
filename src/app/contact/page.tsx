import ContactClient from '@/app/contact/clientPage';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "聯絡我",
    description: "歡迎與我聯絡！無論是技術交流、專案合作或任何想法分享，我都很期待聽到您的聲音",
};

export default function Contact() {
    return (
        <ContactClient />
    );
}
