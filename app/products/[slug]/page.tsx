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

            <section className="bg-red-50">
                <div className="mx-auto max-w-5xl px-6 py-20">
                    <Link
                        href="/products"
                        className="inline-block rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100"
                    >
                        {t.back}
                    </Link>

                    <div className="relative mt-8 h-72 w-full overflow-hidden rounded-3xl md:h-[420px]">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    <h1 className="mt-8 text-5xl font-semibold text-gray-950 md:text-6xl">
                        {product.title}
                    </h1>

                    <p className="mt-6 text-xl leading-8 text-gray-600">
                        {product.fullDescription}
                    </p>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1.3fr_0.7fr] items-start">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-950">
                            {t.title}
                        </h2>

                        <div className="mt-8 space-y-6 text-lg leading-8 text-gray-700">
                            {product.content.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl bg-red-50 p-8">
                        <h3 className="text-2xl font-semibold text-gray-950">
                            {t.overview}
                        </h3>

                        <div className="mt-6 space-y-4 text-gray-700">
                            <div>
                                <p className="text-sm font-medium uppercase tracking-wide text-red-700">
                                    {t.productName}
                                </p>
                                <p className="mt-1 text-lg">{product.title}</p>
                            </div>

                            <div>
                                <p className="text-sm font-medium uppercase tracking-wide text-red-700">
                                    {t.summary}
                                </p>
                                <p className="mt-1 text-lg">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}