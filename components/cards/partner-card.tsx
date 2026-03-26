import Link from "next/link";

type PartnerCardProps = {
    slug?: string;
    name: string;
    description: string;
};

export default function PartnerCard({
    slug,
    name,
    description,
}: PartnerCardProps) {
    const cardContent = (
        <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-md sm:p-6 lg:p-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-xl text-red-700 sm:h-16 sm:w-16 sm:text-2xl">
                ◆
            </div>

            <h3 className="mt-4 text-lg font-medium text-gray-950 sm:mt-5 sm:text-xl lg:mt-6 lg:text-2xl">
                {name}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7 lg:mt-5 lg:text-lg lg:leading-8">
                {description}
            </p>
        </div>
    );

    if (slug) {
        return (
            <Link href={`/cooperation/${slug}`} className="block h-full">
                {cardContent}
            </Link>
        );
    }

    return <div className="h-full">{cardContent}</div>;
}