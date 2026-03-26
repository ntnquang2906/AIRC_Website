"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { useLanguage } from "@/context/language-context";
import { aboutTranslations } from "@/data/translations/about";
import Image from "next/image";

export default function AboutPage() {
    const { language } = useLanguage();
    const t = aboutTranslations[language];

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
                <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-2 md:items-center md:gap-12 md:py-20">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-950 sm:text-4xl md:text-5xl">
                            {t.missionTitle}
                        </h2>
                        <p className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                            {t.missionDescription}
                        </p>

                        <h2 className="mt-10 text-3xl font-semibold text-gray-950 sm:mt-12 sm:text-4xl md:text-5xl">
                            {t.visionTitle}
                        </h2>
                        <p className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                            {t.visionDescription}
                        </p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="relative h-[260px] w-full max-w-[500px] overflow-hidden rounded-2xl sm:h-[320px] md:h-[420px] md:rounded-3xl">
                            <Image
                                src="/images/lab_pic.jpg"
                                alt="AIRC About"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}