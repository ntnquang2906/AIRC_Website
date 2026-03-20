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
            <div className="mx-auto max-w-7xl px-6 py-20">
                <SectionHeading title={t.title} subtitle={t.subtitle} />

                <div className="mt-14 grid gap-6 md:grid-cols-4">
                    {partnerList.map((partner) => (
                        <PartnerCard
                            key={partner.id}
                            slug={partner.slug}
                            name={partner.name}
                            description={partner.description}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/cooperation"
                        className="inline-flex rounded-lg bg-red-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-800"
                    >
                        {t.viewMore}
                    </Link>
                </div>
            </div>
        </section>
    );
}