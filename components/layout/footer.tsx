"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { footerTranslations } from "@/data/translations/footer";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    const { language } = useLanguage();
    const t = footerTranslations[language];

    return (
        <footer className="bg-red-900 text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-3 lg:items-start lg:gap-12 lg:py-16">

                {/* COLUMN 1: LOGO + DESCRIPTION */}
                <div className="flex h-full items-start lg:justify-center">
                    <div className="flex w-full max-w-[420px] flex-col items-center rounded-2xl bg-white/95 px-6 py-6 text-center shadow-sm sm:px-8">

                        <Image
                            src="/images/logo_1.png"
                            alt="AIRC Logo"
                            width={560}
                            height={240}
                            className="h-44 w-auto object-contain sm:h-48 lg:h-52"
                        />

                        <p className="mt-5 text-sm leading-8 text-gray-700">
                            {t.brandDescription}
                        </p>
                    </div>
                </div>

                {/* COLUMN 2: ABOUT + EXPLORE */}
                <div className="flex h-full flex-col lg:px-6">
                    <div>
                        <h4 className="text-base font-semibold sm:text-lg">{t.aboutTitle}</h4>
                        <div className="mt-3 space-y-2 text-sm text-red-100 sm:mt-4 sm:space-y-3">
                            <Link href="/about" className="block hover:text-white">
                                {t.mission}
                            </Link>
                            <Link href="/about" className="block hover:text-white">
                                {t.vision}
                            </Link>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h4 className="text-base font-semibold sm:text-lg">{t.exploreTitle}</h4>
                        <div className="mt-3 space-y-2 text-sm text-red-100 sm:mt-4 sm:space-y-3">
                            <Link href="/products" className="block hover:text-white">
                                {t.products}
                            </Link>
                            <Link href="/research" className="block hover:text-white">
                                {t.research}
                            </Link>
                            <Link href="/activities" className="block hover:text-white">
                                {t.activities}
                            </Link>
                            <Link href="/cooperation" className="block hover:text-white">
                                {t.cooperation}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* COLUMN 3: CONTACT */}
                <div className="flex h-full flex-col lg:px-6">
                    <h4 className="text-base font-semibold sm:text-lg">{t.contactTitle}</h4>
                    <div className="mt-3 space-y-2 text-sm leading-7 text-red-100 sm:mt-4 sm:space-y-3">
                        <p>{t.email}</p>
                        <p>{t.phone}</p>

                        <div>
                            <p className="font-medium text-white">{t.workingHoursTitle}</p>
                            <p>{t.workingHours}</p>
                        </div>

                        <p>{t.addressLine1}</p>
                        <p>{t.addressLine2}</p>

                        <a
                            href="https://www.facebook.com/profile.php?id=61563435713112"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 pt-1 hover:text-white"
                        >
                            <FaFacebook className="text-lg sm:text-xl" />
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-red-800">
                <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-red-100 sm:px-6 sm:py-6 sm:text-sm">
                    {t.copyright}
                </div>
            </div>
        </footer>
    );
}