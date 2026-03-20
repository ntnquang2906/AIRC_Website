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
            <div className="mx-auto max-w-7xl px-6 py-20">
                <SectionHeading title={t.title} subtitle={t.subtitle} />

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

                <div className="mt-12 text-center">
                    <Link
                        href="/products"
                        className="inline-flex rounded-lg bg-red-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-red-800"
                    >
                        {t.viewMore}
                    </Link>
                </div>
            </div>
        </section>
    );
}