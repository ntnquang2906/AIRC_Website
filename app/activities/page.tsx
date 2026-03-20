"use client";

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

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="bg-red-50">
                <div className="mx-auto max-w-7xl px-6 py-20 text-center">
                    <h1 className="text-5xl font-semibold text-gray-950 md:text-6xl">
                        {t.pageTitle}
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
                        {t.pageDescription}
                    </p>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <SectionHeading title={t.sectionTitle} />

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
                </div>
            </section>

            <Footer />
        </main>
    );
}