"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { activities } from "@/data/activities";
import { useLanguage } from "@/context/language-context";

const detailTranslations = {
    en: {
        back: "← Back to Activities",
        title: "Detailed Information",
        overview: "Activity Overview",
        name: "Activity Name",
        dateTime: "Date and Time",
        summary: "Summary",
    },
    vi: {
        back: "← Quay lại Hoạt động",
        title: "Thông tin chi tiết",
        overview: "Tổng quan hoạt động",
        name: "Tên hoạt động",
        dateTime: "Ngày và thời gian",
        summary: "Tóm tắt",
    },
};

export default function ActivityDetailPage() {
    const params = useParams();
    const { language } = useLanguage();

    const slug = params.slug as string;
    const activity = activities[language].find((item) => item.slug === slug);
    const t = detailTranslations[language];

    if (!activity) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="bg-red-50">
                <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
                    <Link
                        href="/activities"
                        className="inline-block rounded-full border border-red-200 bg-white px-3 py-1.5 text-xs font-medium text-red-700 transition hover:bg-red-100 sm:px-4 sm:py-2 sm:text-sm"
                    >
                        {t.back}
                    </Link>

                    {activity.image && (
                        <div className="relative mt-6 h-48 w-full overflow-hidden rounded-2xl sm:mt-8 sm:h-64 sm:rounded-3xl md:h-[420px]">
                            <Image
                                src={activity.image}
                                alt={activity.title}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    )}

                    <h1 className="mt-6 text-3xl font-semibold text-gray-950 sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">
                        {activity.title}
                    </h1>

                    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                        {activity.fullDescription}
                    </p>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
                    <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-start md:gap-12">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-950 sm:text-3xl">
                                {t.title}
                            </h2>

                            <div className="mt-6 space-y-5 text-base leading-7 text-gray-700 sm:mt-8 sm:text-lg sm:leading-8">
                                {activity.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="self-start rounded-2xl bg-red-50 p-5 sm:p-6 md:p-8">
                            <h3 className="text-xl font-semibold text-gray-950 sm:text-2xl">
                                {t.overview}
                            </h3>

                            <div className="mt-4 space-y-4 text-gray-700 sm:mt-6">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-red-700 sm:text-sm">
                                        {t.name}
                                    </p>
                                    <p className="mt-1 text-base sm:text-lg">{activity.title}</p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-red-700 sm:text-sm">
                                        {t.dateTime}
                                    </p>
                                    <p className="mt-1 text-base sm:text-lg">{activity.dateTime}</p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-red-700 sm:text-sm">
                                        {t.summary}
                                    </p>
                                    <p className="mt-1 text-base sm:text-lg">{activity.description}</p>
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