"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { homeTranslations } from "@/data/translations/home";

export default function ContactPreview() {
    const { language } = useLanguage();
    const t = homeTranslations[language].contact;

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-20 text-center">
                <h2 className="text-4xl font-semibold text-gray-950 md:text-5xl">
                    {t.title}
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                    {t.subtitle}
                </p>

                <div className="mt-10">
                    <Link
                        href="/contact"
                        className="inline-flex rounded-lg bg-red-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-800"
                    >
                        {t.button}
                    </Link>
                </div>
            </div>
        </section>
    );
}