"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { researchProjects } from "@/data/research";
import { useLanguage } from "@/context/language-context";

const detailTranslations = {
    en: {
        back: "← Back to Research",
        title: "Detailed Information",
        overview: "Research Overview",
        name: "Research Title",
        category: "Category",
        status: "Status",
        slug: "Slug",
        summary: "Summary",
    },
    vi: {
        back: "← Quay lại Nghiên cứu",
        title: "Thông tin chi tiết",
        overview: "Tổng quan nghiên cứu",
        name: "Tên nghiên cứu",
        category: "Chủ đề",
        status: "Tiến độ",
        slug: "Đường dẫn",
        summary: "Tóm tắt",
    },
};

export default function ResearchDetailPage() {
    const params = useParams();
    const { language } = useLanguage();

    const slug = params.slug as string;
    const research = researchProjects[language].find((item) => item.slug === slug);
    const t = detailTranslations[language];

    const statusLabel = {
        en: {
            published: "Published",
            under_review: "Under Review",
            ongoing: "Ongoing",
        },
        vi: {
            published: "Đã công bố",
            under_review: "Đang review",
            ongoing: "Đang nghiên cứu",
        },
    };

    if (!research) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* HERO */}
            <section className="bg-red-50">
                <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">

                    <Link
                        href="/research"
                        className="inline-block rounded-full border border-red-200 bg-white px-3 py-1.5 text-xs font-medium text-red-700 transition hover:bg-red-100 sm:px-4 sm:py-2 sm:text-sm"
                    >
                        {t.back}
                    </Link>

                    {/* TAG + STATUS */}
                    <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-3">
                        <span className="rounded-full bg-red-700 px-3 py-1 text-xs font-semibold text-white sm:px-4 sm:py-1.5 sm:text-sm">
                            {research.category}
                        </span>
                        <span className="text-xs font-medium text-gray-600 sm:text-sm">
                            {statusLabel[language][research.status]}
                        </span>
                    </div>

                    {/* TITLE */}
                    <h1 className="mt-5 text-3xl font-semibold text-gray-950 sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
                        {research.title}
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                        {research.fullDescription}
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="bg-white">
                <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">

                    <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:gap-12">

                        {/* LEFT */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-950 sm:text-3xl">
                                {t.title}
                            </h2>

                            <div className="mt-6 space-y-5 text-base leading-7 text-gray-700 sm:mt-8 sm:text-lg sm:leading-8">
                                {research.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="rounded-2xl bg-red-50 p-5 sm:p-6 md:p-8">
                            <h3 className="text-xl font-semibold text-gray-950 sm:text-2xl">
                                {t.overview}
                            </h3>

                            <div className="mt-4 space-y-4 text-gray-700 sm:mt-6">

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-red-700 sm:text-sm">
                                        {t.name}
                                    </p>
                                    <p className="mt-1 text-base sm:text-lg">
                                        {research.title}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-red-700 sm:text-sm">
                                        {t.category}
                                    </p>
                                    <p className="mt-1 text-base sm:text-lg">
                                        {research.category}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-red-700 sm:text-sm">
                                        {t.status}
                                    </p>
                                    <p className="mt-1 text-base sm:text-lg">
                                        {statusLabel[language][research.status]}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-red-700 sm:text-sm">
                                        {t.slug}
                                    </p>
                                    <p className="mt-1 text-base sm:text-lg">
                                        {research.slug}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-red-700 sm:text-sm">
                                        {t.summary}
                                    </p>
                                    <p className="mt-1 text-base sm:text-lg">
                                        {research.description}
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}