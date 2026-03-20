"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
import ResearchCard from "@/components/cards/research-card";
import { researchProjects } from "@/data/research";
import { useLanguage } from "@/context/language-context";
import { homeTranslations } from "@/data/translations/home";

export default function ResearchPreview() {
    const { language } = useLanguage();
    const t = homeTranslations[language].research;
    const researchList = researchProjects[language];

    return (
        <section className="bg-[#fff8f8]">
            <div className="mx-auto max-w-7xl px-6 py-20">
                <SectionHeading title={t.title} subtitle={t.subtitle} />

                <div className="mt-14 grid gap-8 md:grid-cols-3">
                    {researchList.map((project) => (
                        <ResearchCard
                            key={project.id}
                            slug={project.slug}
                            title={project.title}
                            description={project.description}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/research"
                        className="inline-flex rounded-lg bg-red-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-800"
                    >
                        {t.viewMore}
                    </Link>
                </div>
            </div>
        </section>
    );
}