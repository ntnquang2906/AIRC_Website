"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { navbarTranslations } from "@/data/translations/navbar";

export default function Navbar() {
    const pathname = usePathname();
    const { language, setLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const currentNavItems = navbarTranslations[language];

    const handleLanguageChange = (lang: "en" | "vi") => {
        setLanguage(lang);
        setIsMenuOpen(false);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-red-100 bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
                <div className="flex items-center justify-between gap-4">
                    <Link
                        href="/"
                        className="flex shrink-0 items-center"
                        onClick={handleCloseMenu}
                    >
                        <Image
                            src="/images/logo.png"
                            alt="AIRC Logo"
                            width={60}
                            height={60}
                            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                        />
                    </Link>

                    <nav className="hidden flex-1 items-center justify-center gap-3 md:flex">
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

                    <div className="flex shrink-0 items-center gap-2">
                        <div className="flex items-center rounded-full border border-red-200 bg-red-50 p-1">
                            <button
                                onClick={() => handleLanguageChange("en")}
                                className={`rounded-full px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:py-2 sm:text-sm ${language === "en"
                                    ? "bg-red-700 text-white"
                                    : "text-red-700 hover:bg-red-100"
                                    }`}
                            >
                                EN
                            </button>

                            <button
                                onClick={() => handleLanguageChange("vi")}
                                className={`rounded-full px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:py-2 sm:text-sm ${language === "vi"
                                    ? "bg-red-700 text-white"
                                    : "text-red-700 hover:bg-red-100"
                                    }`}
                            >
                                VI
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-red-200 bg-white text-red-700 transition hover:bg-red-50 md:hidden"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <nav className="mt-3 space-y-2 rounded-2xl border border-red-100 bg-white p-3 shadow-sm md:hidden">
                        {currentNavItems.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={handleCloseMenu}
                                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${isActive
                                        ? "bg-red-700 text-white"
                                        : "text-gray-700 hover:bg-red-50 hover:text-red-700"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                )}
            </div>
        </header>
    );
}