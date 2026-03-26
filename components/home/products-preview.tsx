"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
import ProductCard from "@/components/cards/product-card";
import { products } from "@/data/products";
import { useLanguage } from "@/context/language-context";
import { homeTranslations } from "@/data/translations/home";

export default function ProductsPreview() {
    const { language } = useLanguage();
    const t = homeTranslations[language].products;
    const productList = products[language];

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 md:py-20">
                <SectionHeading title={t.title} subtitle={t.subtitle} />

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

                <div className="mt-10 text-center sm:mt-12">
                    <Link
                        href="/products"
                        className="inline-flex rounded-lg bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-800 sm:px-6 sm:text-base"
                    >
                        {t.viewMore}
                    </Link>
                </div>
            </div>
        </section>
    );
}