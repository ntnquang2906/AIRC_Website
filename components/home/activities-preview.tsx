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
    const activityList = activities[language];

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <SectionHeading title={t.title} subtitle={t.subtitle} />

                <div className="mt-14 grid gap-8 md:grid-cols-3">
                    {activityList.map((activity) => (
                        <ActivityCard
                            key={activity.id}
                            slug={activity.slug}
                            title={activity.title}
                            description={activity.description}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/activities"
                        className="inline-flex rounded-lg bg-red-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-800"
                    >
                        {t.viewMore}
                    </Link>
                </div>
            </div>
        </section>
    );
}