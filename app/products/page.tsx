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
                <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-16 md:py-20">
                    <h1 className="text-3xl font-semibold text-gray-950 sm:text-4xl md:text-5xl lg:text-6xl">
                        {t.pageTitle}
                    </h1>
                    <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                        {t.pageDescription}
                    </p>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
                    <SectionHeading
                        title={t.sectionTitle}
                        subtitle={t.sectionSubtitle}
                    />

                    <div className="mt-10 xl:hidden">
                        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {productList.map((product) => (
                                <div
                                    key={product.id}
                                    className="w-full shrink-0 snap-center"
                                >
                                    <ProductCard
                                        slug={product.slug}
                                        title={product.title}
                                        description={product.description}
                                        image={product.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-14 hidden gap-8 xl:grid xl:grid-cols-4">
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