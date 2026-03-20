import Link from "next/link";

type ActivityCardProps = {
    slug?: string;
    title: string;
    description: string;
};

export default function ActivityCard({
    slug,
    title,
    description,
}: ActivityCardProps) {
    const cardContent = (
        <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-md">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-2xl text-red-700">
                ●
            </div>

            <h3 className="mt-6 text-center text-2xl font-medium text-gray-950">
                {title}
            </h3>

            <p className="mt-5 flex-1 text-center text-lg leading-8 text-gray-600">
                {description}
            </p>
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