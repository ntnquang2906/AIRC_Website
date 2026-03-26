import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import type { ResearchStatus } from "@/data/research";

type ResearchCardProps = {
    slug?: string;
    title: string;
    description: string;
    category: string;
    status: ResearchStatus;
};

export default function ResearchCard({
    slug,
    title,
    description,
    category,
    status,
}: ResearchCardProps) {
    const { language } = useLanguage();

    const statusLabel = {
        en: {
            published: "Published",
            under_review: "Under Review",
            ongoing: "Ongoing",
        },
        vi: {
            published: "Đã công bố",
            under_review: "Đang review",
            ongoing: "Đang nghiên cứu",
        },
    };

    const cardContent = (
        <div className="group flex h-full min-h-[220px] flex-col rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-md sm:min-h-[240px] sm:p-6">
            <div className="mb-4 flex items-start justify-between gap-3 sm:mb-5">
                <span className="rounded-full bg-red-800 px-3 py-1 text-[11px] font-semibold text-white sm:text-xs">
                    {category}
                </span>

                <span className="shrink-0 text-xs text-gray-500 sm:text-sm">
                    {statusLabel[language][status]}
                </span>
            </div>

            <h3 className="text-lg font-medium leading-snug text-gray-900 transition-colors duration-300 group-hover:text-red-800 sm:text-xl">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600 line-clamp-3 sm:mt-4">
                {description}
            </p>
        </div>
    );

    if (slug) {
        return (
            <Link href={`/research/${slug}`} className="block h-full">
                {cardContent}
            </Link>
        );
    }

    return <div className="h-full">{cardContent}</div>;
}