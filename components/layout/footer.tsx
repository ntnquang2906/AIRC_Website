"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { footerTranslations } from "@/data/translations/footer";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    const { language } = useLanguage();
    const t = footerTranslations[language];

    return (
        <footer className="bg-red-900 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
                <div>
                    <h3 className="text-2xl font-semibold">AIRC</h3>
                    <p className="mt-4 text-sm leading-7 text-red-100">
                        {t.brandDescription}
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold">{t.aboutTitle}</h4>
                    <div className="mt-4 space-y-3 text-sm text-red-100">
                        <Link href="/about" className="block hover:text-white">
                            {t.mission}
                        </Link>
                        <Link href="/about" className="block hover:text-white">
                            {t.vision}
                        </Link>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold">{t.exploreTitle}</h4>
                    <div className="mt-4 space-y-3 text-sm text-red-100">
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

                <div>
                    <h4 className="text-lg font-semibold">{t.contactTitle}</h4>
                    <div className="mt-4 space-y-3 text-sm leading-7 text-red-100">
                        <p>{t.addressLine1}</p>
                        <p>{t.addressLine2}</p>
                        <p>{t.email}</p>
                        <p>{t.phone}</p>
                        <a
                            href="https://www.facebook.com/profile.php?id=61563435713112"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 hover:text-white"
                        >
                            <FaFacebook className="text-xl" />
                            <span className="hidden sm:inline">Facebook</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-red-800">
                <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-red-100">
                    {t.copyright}
                </div>
            </div>
        </footer>
    );
}