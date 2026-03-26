"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { products } from "@/data/products";
import { useLanguage } from "@/context/language-context";

const detailTranslations = {
    en: {
        back: "← Back to Products",
        title: "Detailed Information",
        overview: "Product Overview",
        productName: "Product Name",
        summary: "Summary",
    },
    vi: {
        back: "← Quay lại Sản phẩm",
        title: "Thông tin chi tiết",
        overview: "Tổng quan sản phẩm",
        productName: "Tên sản phẩm",
        summary: "Tóm tắt",
    },
};

export default function ProductDetailPage() {
    const params = useParams();
    const { language } = useLanguage();

    const slug = params.slug as string;
    const product = products[language].find((item) => item.slug === slug);
    const t = detailTranslations[language];

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* HERO */}
            <section className="bg-red-50">
                <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
                    <Link
                        href="/products"
                        className="inline-block rounded-full border border-red-200 bg-white px-3 py-1.5 text-xs font-medium text-red-700 transition hover:bg-red-100 sm:px-4 sm:py-2 sm:text-sm"
                    >
                        {t.back}
                    </Link>

                    {/* IMAGE / VIDEO */}
                    <div className="relative mt-6 w-full overflow-hidden rounded-2xl sm:mt-8 sm:rounded-3xl">
                        {product.video ? (
                            <video
                                className="h-48 w-full rounded-2xl object-cover sm:h-64 md:h-[420px] sm:rounded-3xl"
                                controls
                                playsInline
                                preload="metadata"
                                poster={product.image}
                            >
                                <source src={product.video} type="video/mp4" />
                            </video>
                        ) : (
                            <div className="relative h-48 w-full overflow-hidden rounded-2xl sm:h-64 md:h-[420px] sm:rounded-3xl">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>

                    {/* TITLE */}
                    <h1 className="mt-6 text-3xl font-semibold text-gray-950 sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">
                        {product.title}
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                        {product.fullDescription}
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="bg-white">
                <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
                    <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:gap-12">

                        {/* LEFT CONTENT */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-950 sm:text-3xl">
                                {t.title}
                            </h2>

                            <div className="mt-6 space-y-5 text-base leading-7 text-gray-700 sm:mt-8 sm:text-lg sm:leading-8">
                                {product.content.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR */}
                        <div className="rounded-2xl bg-red-50 p-5 sm:p-6 md:p-8">
                            <h3 className="text-xl font-semibold text-gray-950 sm:text-2xl">
                                {t.overview}
                            </h3>

                            <div className="mt-4 space-y-4 text-gray-700 sm:mt-6">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-red-700 sm:text-sm">
                                        {t.productName}
                                    </p>
                                    <p className="mt-1 text-base sm:text-lg">
                                        {product.title}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium uppercase tracking-wide text-red-700 sm:text-sm">
                                        {t.summary}
                                    </p>
                                    <p className="mt-1 text-base sm:text-lg">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}