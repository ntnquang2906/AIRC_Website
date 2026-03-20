type NavItem = {
    label: string;
    href: string;
};

export const navbarTranslations: Record<"en" | "vi", NavItem[]> = {
    en: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Products", href: "/products" },
        { label: "Research", href: "/research" },
        { label: "Activities", href: "/activities" },
        { label: "Cooperation", href: "/cooperation" },
        { label: "Contact", href: "/contact" },
    ],
    vi: [
        { label: "Trang chủ", href: "/" },
        { label: "Giới thiệu", href: "/about" },
        { label: "Sản phẩm", href: "/products" },
        { label: "Nghiên cứu", href: "/research" },
        { label: "Hoạt động", href: "/activities" },
        { label: "Hợp tác", href: "/cooperation" },
        { label: "Liên hệ", href: "/contact" },
    ],
};