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
            <div className="mx-auto flex h-full max-w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-md">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-gray-50">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="text-center text-lg font-semibold text-gray-950 sm:text-xl">
                        {title}
                    </h3>

                    <p className="mt-3 flex-1 text-center text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
}