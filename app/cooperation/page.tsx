"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import PartnerCard from "@/components/cards/partner-card";
import { partners } from "@/data/partners";
import { useLanguage } from "@/context/language-context";
import { cooperationPageTranslations } from "@/data/translations/cooperation";

export default function CooperationPage() {
    const { language } = useLanguage();
    const t = cooperationPageTranslations[language];
    const partnerList = partners[language];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="bg-red-50">
                <div className="mx-auto max-w-7xl px-6 py-20 text-center">
                    <h1 className="text-5xl font-semibold text-gray-950 md:text-6xl">
                        {t.pageTitle}
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                        {t.pageDescription}
                    </p>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-4">
                {partnerList.map((partner) => (
                    <PartnerCard
                        key={partner.id}
                        slug={partner.slug}
                        name={partner.name}
                        description={partner.description}
                    />
                ))}
            </section>

            <Footer />
        </main>
    );
}