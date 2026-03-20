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
        <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-md">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-2xl text-red-700">
                ◆
            </div>

            <h3 className="mt-6 text-2xl font-medium text-gray-950">
                {name}
            </h3>

            <p className="mt-5 flex-1 text-lg leading-8 text-gray-600">
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