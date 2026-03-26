"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
import ActivityCard from "@/components/cards/activity-card";
import { activities } from "@/data/activities";
import { useLanguage } from "@/context/language-context";
import { homeTranslations } from "@/data/translations/home";

export default function ActivitiesPreview() {
    const { language } = useLanguage();
    const t = homeTranslations[language].activities;
    const activityList = activities[language].slice(0, 4);

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
                <SectionHeading title={t.title} subtitle={t.subtitle} />

                <div className="mt-10 xl:hidden">
                    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {activityList.map((activity) => (
                            <div
                                key={activity.id}
                                className="w-full shrink-0 snap-center"
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

                <div className="mt-14 hidden gap-8 xl:grid xl:grid-cols-4">
                    {activityList.map((activity) => (
                        <ActivityCard
                            key={activity.id}
                            slug={activity.slug}
                            title={activity.title}
                            description={activity.description}
                            image={activity.image}
                        />
                    ))}
                </div>

                <div className="mt-10 text-center sm:mt-12">
                    <Link
                        href="/activities"
                        className="inline-flex rounded-lg bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800 sm:px-6 sm:text-base"
                    >
                        {t.viewMore}
                    </Link>
                </div>
            </div>
        </section>
    );
}