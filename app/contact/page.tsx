"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ContactForm from "@/components/forms/contact-form";
import { useLanguage } from "@/context/language-context";
import { contactTranslations } from "@/data/translations/contact";
import { FaFacebook } from "react-icons/fa";

export default function ContactPage() {
    const { language } = useLanguage();
    const t = contactTranslations[language];

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
                <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-950">
                            {t.infoTitle}
                        </h2>

                        <div className="mt-8 space-y-6 text-gray-600">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">
                                    {t.addressTitle}
                                </h3>
                                <p className="mt-2">{t.addressValue}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900">
                                    {t.emailTitle}
                                </h3>
                                <p className="mt-2">{t.emailValue}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-900">
                                    {t.phoneTitle}
                                </h3>
                                <p className="mt-2">{t.phoneValue}</p>
                            </div>
                            <div>

                                <a
                                    href="https://www.facebook.com/profile.php?id=61563435713112"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-flex items-center gap-2 text-blue-600 hover:underline"
                                >
                                    <FaFacebook className="text-xl" />
                                    <span>Facebook</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </section>

            <Footer />
        </main>
    );
}