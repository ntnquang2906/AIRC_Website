"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { homeTranslations } from "@/data/translations/home";

export default function HeroSection() {
    const { language } = useLanguage();
    const t = homeTranslations[language].hero;

    return (
        <section className="bg-gradient-to-b from-red-50 to-white">
            <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
                <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight text-gray-950 md:text-7xl">
                    {t.title}
                </h1>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-2xl">
                    {t.description}
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/about"
                        className="rounded-lg bg-red-700 px-7 py-3 text-base font-semibold text-white transition hover:bg-red-800"
                    >
                        {t.learnMore}
                    </Link>

                    <Link
                        href="/contact"
                        className="rounded-lg border border-gray-300 bg-white px-7 py-3 text-base font-semibold text-gray-900 transition hover:border-red-200 hover:text-red-700"
                    >
                        {t.contactUs}
                    </Link>
                </div>
            </div>
        </section>
    );
}