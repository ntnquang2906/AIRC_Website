"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SectionHeading from "@/components/ui/section-heading";
import ProductCard from "@/components/cards/product-card";
import { products } from "@/data/products";
import { useLanguage } from "@/context/language-context";
import { productsPageTranslations } from "@/data/translations/products";

export default function ProductsPage() {
    const { language } = useLanguage();
    const t = productsPageTranslations[language];
    const productList = products[language];

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
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <SectionHeading
                        title={t.sectionTitle}
                        subtitle={t.sectionSubtitle}
                    />

                    <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                        {productList.map((product) => (
                            <ProductCard
                                key={product.id}
                                slug={product.slug}
                                title={product.title}
                                description={product.description}
                                image={product.image}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}