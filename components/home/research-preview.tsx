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
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
                <SectionHeading title={t.title} subtitle={t.subtitle} />

                <div className="mt-10 lg:hidden">
                    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {researchList.map((project) => (
                            <div
                                key={project.id}
                                className="w-full shrink-0 snap-center"
                            >
                                <ResearchCard
                                    slug={project.slug}
                                    title={project.title}
                                    description={project.description}
                                    category={project.category}
                                    status={project.status}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-14 hidden gap-8 lg:grid lg:grid-cols-3">
                    {researchList.map((project) => (
                        <ResearchCard
                            key={project.id}
                            slug={project.slug}
                            title={project.title}
                            description={project.description}
                            category={project.category}
                            status={project.status}
                        />
                    ))}
                </div>

                <div className="mt-10 text-center sm:mt-12">
                    <Link
                        href="/research"
                        className="inline-flex rounded-lg bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800 sm:px-6 sm:text-base"
                    >
                        {t.viewMore}
                    </Link>
                </div>
            </div>
        </section>
    );
}