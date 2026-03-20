"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { partners } from "@/data/partners";
import { useLanguage } from "@/context/language-context";

const detailTranslations = {
    en: {
        back: "← Back to Cooperation",
        title: "Detailed Information",
        overview: "Partnership Overview",
        name: "Partner Name",
        slug: "Slug",
        summary: "Summary",
    },
    vi: {
        back: "← Quay lại Hợp tác",
        title: "Thông tin chi tiết",
        overview: "Tổng quan đối tác",
        name: "Tên đối tác",
        slug: "Đường dẫn",
        summary: "Tóm tắt",
    },
};

export default function CooperationDetailPage() {
    const params = useParams();
    const { language } = useLanguage();

    const slug = params.slug as string;
    const partner = partners[language].find((item) => item.slug === slug);
    const t = detailTranslations[language];

    if (!partner) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="bg-red-50">
                <div className="mx-auto max-w-5xl px-6 py-20">
                    <Link
                        href="/cooperation"
                        className="inline-block rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100"
                    >
                        {t.back}
                    </Link>

                    <h1 className="mt-8 text-5xl font-semibold text-gray-950 md:text-6xl">
                        {partner.name}
                    </h1>

                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        {partner.fullDescription}
                    </p>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1.3fr_0.7fr]">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-950">
                            {t.title}
                        </h2>

                        <div className="mt-8 space-y-6 text-lg leading-8 text-gray-700">
                            {partner.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl bg-red-50 p-8">
                        <h3 className="text-2xl font-semibold text-gray-950">
                            {t.overview}
                        </h3>

                        <div className="mt-6 space-y-4 text-gray-700">
                            <div>
                                <p className="text-sm font-medium uppercase tracking-wide text-red-700">
                                    {t.name}
                                </p>
                                <p className="mt-1 text-lg">{partner.name}</p>
                            </div>

                            <div>
                                <p className="text-sm font-medium uppercase tracking-wide text-red-700">
                                    {t.slug}
                                </p>
                                <p className="mt-1 text-lg">{partner.slug}</p>
                            </div>

                            <div>
                                <p className="text-sm font-medium uppercase tracking-wide text-red-700">
                                    {t.summary}
                                </p>
                                <p className="mt-1 text-lg">{partner.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}