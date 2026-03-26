import Image from "next/image";
import Link from "next/link";

type ActivityCardProps = {
    slug?: string;
    title: string;
    description: string;
    image?: string;
};

export default function ActivityCard({
    slug,
    title,
    description,
    image,
}: ActivityCardProps) {
    const cardContent = (
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-md">

            {/* IMAGE */}
            {image && (
                <div className="relative h-40 w-full overflow-hidden sm:h-44 md:h-48">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition duration-300 hover:scale-105"
                    />
                </div>
            )}

            {/* CONTENT */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-center text-base font-semibold text-gray-950 line-clamp-2 sm:text-lg md:text-xl">
                    {title}
                </h3>

                <p className="mt-2 text-center text-sm leading-6 text-gray-600 line-clamp-3 sm:mt-3 md:text-base">
                    {description}
                </p>
            </div>
        </div>
    );

    if (slug) {
        return (
            <Link href={`/activities/${slug}`} className="block h-full">
                {cardContent}
            </Link>
        );
    }

    return <div className="h-full">{cardContent}</div>;
}