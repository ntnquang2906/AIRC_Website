"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { homeTranslations } from "@/data/translations/home";

export default function HeroSection() {
    const { language } = useLanguage();
    const t = homeTranslations[language].hero;

    return (
        <section className="bg-gradient-to-b from-red-50 to-white">
            <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 md:py-28">
                <h1 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl md:text-6xl lg:text-7xl">
                    {t.title}
                </h1>

                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg md:text-xl">
                    {t.description}
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                    <Link
                        href="/about"
                        className="rounded-lg bg-red-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-800 sm:w-auto sm:text-base"
                    >
                        {t.learnMore}
                    </Link>

                    <Link
                        href="/contact"
                        className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-red-200 hover:text-red-700 sm:w-auto sm:text-base"
                    >
                        {t.contactUs}
                    </Link>
                </div>
            </div>
        </section>
    );
}