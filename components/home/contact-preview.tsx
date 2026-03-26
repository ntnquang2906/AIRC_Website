"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { homeTranslations } from "@/data/translations/home";

export default function ContactPreview() {
    const { language } = useLanguage();
    const t = homeTranslations[language].contact;

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-16 md:py-20">
                <h2 className="text-3xl font-semibold text-gray-950 sm:text-4xl md:text-5xl">
                    {t.title}
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                    {t.subtitle}
                </p>

                <div className="mt-8 sm:mt-10">
                    <Link
                        href="/contact"
                        className="inline-flex rounded-lg bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800 sm:px-6 sm:text-base"
                    >
                        {t.button}
                    </Link>
                </div>
            </div>
        </section>
    );
}