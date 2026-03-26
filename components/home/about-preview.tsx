"use client";

import { useLanguage } from "@/context/language-context";
import { homeTranslations } from "@/data/translations/home";
import Image from "next/image";

export default function AboutPreview() {
    const { language } = useLanguage();
    const t = homeTranslations[language].about;

    return (
        <section className="bg-[#fff8f8]">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-2 md:items-center md:gap-12 md:py-20">
                <div>
                    <h2 className="text-3xl font-semibold text-gray-950 sm:text-4xl md:text-5xl">
                        {t.title}
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                        {t.paragraph1}
                    </p>

                    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8">
                        {t.paragraph2}
                    </p>

                    <div className="mt-8 grid grid-cols-3 gap-2 text-center sm:mt-10 sm:gap-6">
                        <div className="flex flex-col pr-1">
                            <p className="text-xl font-bold text-red-700 sm:text-3xl">100+</p>
                            <p className="mt-1 text-xs leading-5 text-gray-500 sm:mt-2 sm:text-sm sm:leading-6">
                                {t.stats.members}
                            </p>
                        </div>

                        <div className="flex flex-col pr-1">
                            <p className="text-xl font-bold text-red-700 sm:text-3xl">10+</p>
                            <p className="mt-1 text-xs leading-5 text-gray-500 sm:mt-2 sm:text-sm sm:leading-6">
                                {t.stats.projects}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-xl font-bold text-red-700 sm:text-3xl">3+</p>
                            <p className="mt-1 text-xs leading-5 text-gray-500 sm:mt-2 sm:text-sm sm:leading-6">
                                {t.stats.experience}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="relative h-[260px] w-full max-w-[500px] overflow-hidden rounded-2xl sm:h-[320px] md:h-[420px] md:rounded-3xl">
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