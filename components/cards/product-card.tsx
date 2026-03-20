import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
    slug: string;
    title: string;
    description: string;
    image: string;
};

export default function ProductCard({
    slug,
    title,
    description,
    image,
}: ProductCardProps) {
    return (
        <Link href={`/products/${slug}`} className="block h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-md">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl bg-gray-50 flex items-center justify-center">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain"
                    />
                </div>

                <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-center text-xl font-semibold text-gray-950">
                        {title}
                    </h3>

                    <p className="mt-4 flex-1 text-center text-base leading-7 text-gray-600">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
}