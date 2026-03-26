"use client";

import { useRef } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SectionHeading from "@/components/ui/section-heading";
import ActivityCard from "@/components/cards/activity-card";
import { activities } from "@/data/activities";
import { useLanguage } from "@/context/language-context";
import { activitiesPageTranslations } from "@/data/translations/activities";

export default function ActivitiesPage() {
    const { language } = useLanguage();
    const t = activitiesPageTranslations[language];
    const activityList = activities[language];
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollNext = () => {
        if (!sliderRef.current) return;

        const firstCard = sliderRef.current.querySelector("[data-activity-card]") as HTMLElement | null;
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const gap = 32;

        sliderRef.current.scrollBy({
            left: cardWidth + gap,
            behavior: "smooth",
        });
    };

    const scrollPrev = () => {
        if (!sliderRef.current) return;

        const firstCard = sliderRef.current.querySelector("[data-activity-card]") as HTMLElement | null;
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const gap = 32;

        sliderRef.current.scrollBy({
            left: -(cardWidth + gap),
            behavior: "smooth",
        });
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="bg-red-50">
                <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-16 md:py-20">
                    <h1 className="text-3xl font-semibold text-gray-950 sm:text-4xl md:text-5xl lg:text-6xl">
                        {t.pageTitle}
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                        {t.pageDescription}
                    </p>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
                    <SectionHeading title={t.sectionTitle} />

                    <div className="mt-10 hidden items-center justify-between gap-4 xl:flex">
                        <button
                            type="button"
                            onClick={scrollPrev}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-red-200 bg-white text-2xl text-red-700 shadow-sm transition hover:bg-red-50"
                            aria-label="Previous activity"
                        >
                            ←
                        </button>

                        <button
                            type="button"
                            onClick={scrollNext}
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-red-200 bg-white text-2xl text-red-700 shadow-sm transition hover:bg-red-50"
                            aria-label="Next activity"
                        >
                            →
                        </button>
                    </div>

                    <div
                        ref={sliderRef}
                        className="mt-8 flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:gap-8 xl:overflow-hidden xl:pb-4"
                    >
                        {activityList.map((activity) => (
                            <div
                                key={activity.id}
                                data-activity-card
                                className="w-full shrink-0 snap-center xl:w-[calc((100%-6rem)/4)]"
                            >
                                <ActivityCard
                                    slug={activity.slug}
                                    title={activity.title}
                                    description={activity.description}
                                    image={activity.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}