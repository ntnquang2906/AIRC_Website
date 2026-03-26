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

            {/* HEADER */}
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

            {/* MAIN */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">

                    {/* GRID */}
                    <div className="grid gap-12 md:grid-cols-2">

                        {/* LEFT - INFO */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-950 sm:text-3xl">
                                {t.infoTitle}
                            </h2>

                            <div className="mt-6 space-y-6 text-gray-600 sm:mt-8">

                                {/* EMAIL + PHONE */}
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
                                    <div>
                                        <h3 className="text-xs font-medium uppercase tracking-wide text-red-700 sm:text-sm">
                                            {t.emailTitle}
                                        </h3>
                                        <p className="mt-1 text-gray-900 text-sm sm:text-base">
                                            <a href={`mailto:${t.emailValue}`} className="hover:underline">
                                                {t.emailValue}
                                            </a>
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-medium uppercase tracking-wide text-red-700 sm:text-sm">
                                            {t.phoneTitle}
                                        </h3>
                                        <p className="mt-1 text-gray-900 text-sm sm:text-base">
                                            <a href={`tel:${t.phoneValue}`} className="hover:underline">
                                                {t.phoneValue}
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* WORKING HOURS */}
                                <div>
                                    <h3 className="text-xs font-medium uppercase tracking-wide text-red-700 sm:text-sm">
                                        {t.workingHoursTitle}
                                    </h3>
                                    <p className="mt-1 text-gray-900 text-sm sm:text-base">
                                        {t.workingHoursValue}
                                    </p>
                                </div>

                                {/* ADDRESS */}
                                <div>
                                    <h3 className="text-xs font-medium uppercase tracking-wide text-red-700 sm:text-sm">
                                        {t.addressTitle}
                                    </h3>
                                    <p className="mt-1 text-gray-900 text-sm sm:text-base">
                                        {t.addressValue}
                                    </p>
                                </div>

                                {/* FACEBOOK */}
                                <div>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61563435713112"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline sm:text-base"
                                    >
                                        <FaFacebook className="text-lg sm:text-xl" />
                                        <span>Facebook</span>
                                    </a>
                                </div>
                            </div>

                            {/* MAP */}
                            <div className="mt-10">
                                <h3 className="text-xl font-semibold text-gray-950 sm:text-2xl">
                                    {language === "vi" ? "Vị trí trung tâm" : "Our Location"}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600 sm:mt-3 sm:text-base">
                                    {language === "vi"
                                        ? "Xem vị trí của trung tâm trên bản đồ"
                                        : "Find our center on the map"}
                                </p>

                                <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 shadow-sm sm:mt-6">
                                    <iframe
                                        src="https://www.google.com/maps?q=21.03829671954189,105.78273862905816&z=17&output=embed"
                                        width="100%"
                                        height="240"
                                        className="sm:h-[280px]"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                    />
                                </div>

                                <div className="mt-4">
                                    <a
                                        href="https://maps.app.goo.gl/Hqpb4reToHNniKgDA"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800 sm:px-5 sm:py-2.5"
                                    >
                                        {language === "vi"
                                            ? "Xem trên Google Maps"
                                            : "View on Google Maps"}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT - FORM */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-950 sm:text-3xl">
                                {language === "vi" ? "Gửi liên hệ" : "Send Message"}
                            </h2>

                            <p className="mt-2 text-sm text-gray-600 sm:mt-3 sm:text-base">
                                {language === "vi"
                                    ? "Hãy gửi thông tin và thắc mắc của bạn, chúng tôi sẽ phản hồi sớm nhất."
                                    : "Send us your information and inquiries, and we will respond as soon as possible."}
                            </p>

                            <div className="mt-6 sm:mt-8">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}