"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
import PartnerCard from "@/components/cards/partner-card";
import { partners } from "@/data/partners";
import { useLanguage } from "@/context/language-context";
import { homeTranslations } from "@/data/translations/home";

export default function CooperationPreview() {
    const { language } = useLanguage();
    const t = homeTranslations[language].cooperation;
    const partnerList = partners[language];

    return (
        <section className="bg-[#fff8f8]">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
                <SectionHeading title={t.title} subtitle={t.subtitle} />

                <div className="mt-10 xl:hidden">
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

                <div className="mt-14 hidden gap-6 xl:grid xl:grid-cols-4">
                    {partnerList.map((partner) => (
                        <PartnerCard
                            key={partner.id}
                            slug={partner.slug}
                            name={partner.name}
                            description={partner.description}
                        />
                    ))}
                </div>

                <div className="mt-10 text-center sm:mt-12">
                    <Link
                        href="/cooperation"
                        className="inline-flex rounded-lg bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800 sm:px-6 sm:text-base"
                    >
                        {t.viewMore}
                    </Link>
                </div>
            </div>
        </section>
    );
}