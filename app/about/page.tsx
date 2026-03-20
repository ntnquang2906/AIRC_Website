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
                <div className="mx-auto max-w-7xl px-6 py-20 text-center">
                    <h1 className="text-5xl font-semibold text-gray-950 md:text-6xl">
                        {t.pageTitle}
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                        {t.pageDescription}
                    </p>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
                    <div>
                        <h2 className="text-4xl font-semibold text-gray-950 md:text-5xl">
                            {t.missionTitle}
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {t.missionDescription}
                        </p>

                        <h2 className="mt-12 text-4xl font-semibold text-gray-950 md:text-5xl">
                            {t.visionTitle}
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {t.visionDescription}
                        </p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="relative h-[420px] w-full max-w-[500px] overflow-hidden rounded-3xl">
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