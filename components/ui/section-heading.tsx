type SectionHeadingProps = {
    title: string;
    subtitle?: string;
    centered?: boolean;
};

export default function SectionHeading({
    title,
    subtitle,
    centered = true,
}: SectionHeadingProps) {
    return (
        <div className={centered ? "text-center" : "text-left"}>
            <h2 className="text-4xl font-semibold text-gray-950 md:text-5xl">
                {title}
            </h2>

            {subtitle ? (
                <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
                    {subtitle}
                </p>
            ) : null}
        </div>
    );
}