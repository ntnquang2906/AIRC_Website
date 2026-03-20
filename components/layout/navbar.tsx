"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/language-context";
import { navbarTranslations } from "@/data/translations/navbar";

export default function Navbar() {
    const pathname = usePathname();
    const { language, setLanguage } = useLanguage();

    const currentNavItems = navbarTranslations[language];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-red-100 bg-white/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/images/logo.jpg"
                        alt="AIRC Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    <span className="text-xl font-semibold text-gray-900">AIRC</span>
                </Link>

                <nav className="hidden items-center gap-3 md:flex">
                    {currentNavItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`rounded-full px-4 py-2 text-sm font-medium transition ${isActive
                                    ? "bg-red-700 text-white"
                                    : "text-gray-700 hover:bg-red-50 hover:text-red-700"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center rounded-full border border-red-200 bg-red-50 p-1">
                    <button
                        onClick={() => setLanguage("en")}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition ${language === "en"
                            ? "bg-red-700 text-white"
                            : "text-red-700 hover:bg-red-100"
                            }`}
                    >
                        EN
                    </button>

                    <button
                        onClick={() => setLanguage("vi")}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition ${language === "vi"
                            ? "bg-red-700 text-white"
                            : "text-red-700 hover:bg-red-100"
                            }`}
                    >
                        VI
                    </button>
                </div>
            </div>
        </header>
    );
}