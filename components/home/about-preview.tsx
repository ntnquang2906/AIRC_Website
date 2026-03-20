"use client";

import { useLanguage } from "@/context/language-context";
import { homeTranslations } from "@/data/translations/home";
import Image from "next/image";

export default function AboutPreview() {
    const { language } = useLanguage();
    const t = homeTranslations[language].about;

    return (
        <section className="bg-[#fff8f8]">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
                <div>
                    <h2 className="text-4xl font-semibold text-gray-950 md:text-5xl">
                        {t.title}
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-gray-600">
                        {t.paragraph1}
                    </p>

                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {t.paragraph2}
                    </p>

                    <div className="mt-10 grid grid-cols-3 gap-6">
                        <div>
                            <p className="text-3xl font-bold text-red-700">100+</p>
                            <p className="mt-2 text-sm text-gray-500">{t.stats.members}</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-red-700">10+</p>
                            <p className="mt-2 text-sm text-gray-500">{t.stats.projects}</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-red-700">3+</p>
                            <p className="mt-2 text-sm text-gray-500">{t.stats.experience}</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="relative h-[420px] w-full max-w-[500px] overflow-hidden rounded-3xl">
                        <Image
                            src="/images/lab_pic.jpg"
                            alt="AIRC Lab"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}