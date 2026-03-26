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
                    <div className="xl:hidden">
                        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {partnerList.map((partner) => (
                                <div
                                    key={partner.id}
                                    className="w-full shrink-0 snap-center"
                                >
                                    <PartnerCard
                                        slug={partner.slug}
                                        name={partner.name}
                                        description={partner.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden gap-6 xl:grid xl:grid-cols-4">
                        {partnerList.map((partner) => (
                            <PartnerCard
                                key={partner.id}
                                slug={partner.slug}
                                name={partner.name}
                                description={partner.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}