export type ResearchStatus = "published" | "under_review" | "ongoing";

export type ResearchProject = {
    id: number;
    slug: string;
    category: string;
    status: ResearchStatus;
    title: string;
    description: string;
    fullDescription: string;
    content: string[];
};

export const researchProjects: {
    en: ResearchProject[];
    vi: ResearchProject[];
} = {
    en: [
        {
            id: 1,
            slug: "advanced-neural-architecture-search",
            category: "Deep Learning",
            status: "ongoing",
            title: "Advanced Neural Architecture Search for Efficient Models",
            description:
                "Exploring advanced neural architecture search methods to design efficient and lightweight AI models.",
            fullDescription:
                "This research focuses on advanced neural architecture search methods for identifying efficient deep learning models with strong performance and reduced computational cost.",
            content: [
                "The study investigates automated model design strategies that improve efficiency while maintaining predictive accuracy.",
                "It emphasizes scalable deep learning solutions suitable for real-world deployment in resource-constrained environments.",
                "The research also contributes to optimization, robustness, and practical implementation of advanced deep learning systems.",
            ],
        },
        {
            id: 2,
            slug: "multilingual-language-understanding-systems",
            category: "NLP",
            status: "published",
            title: "Multilingual Language Understanding Systems",
            description:
                "Developing intelligent systems for multilingual language understanding and generation.",
            fullDescription:
                "This research develops multilingual natural language processing systems capable of understanding, generating, and interacting through human language across diverse linguistic settings.",
            content: [
                "The project studies multilingual representation learning, machine translation, question answering, and conversational AI.",
                "It supports language technologies for both global communication and localized applications, including Vietnamese language resources.",
                "The overall goal is to build robust and inclusive NLP systems for research, education, and public service applications.",
            ],
        },
        {
            id: 3,
            slug: "real-time-object-detection-in-complex-environments",
            category: "Computer Vision",
            status: "under_review",
            title: "Real-time Object Detection in Complex Environments",
            description:
                "Designing computer vision systems for real-time object detection in challenging environments.",
            fullDescription:
                "This research area focuses on robust object detection and visual understanding methods for dynamic, cluttered, and real-world environments.",
            content: [
                "The study addresses challenges such as occlusion, varying illumination, motion blur, and dense scenes.",
                "It develops efficient computer vision models for practical applications including surveillance, automation, and intelligent monitoring.",
                "The research aims to improve both the speed and reliability of real-time vision systems in complex operational settings.",
            ],
        },
    ],

    vi: [
        {
            id: 1,
            slug: "advanced-neural-architecture-search",
            category: "Học sâu",
            status: "ongoing",
            title: "Tìm kiếm kiến trúc mạng nơ-ron nâng cao cho các mô hình hiệu quả",
            description:
                "Nghiên cứu các phương pháp tìm kiếm kiến trúc mạng nơ-ron tiên tiến nhằm thiết kế các mô hình AI gọn nhẹ và hiệu quả.",
            fullDescription:
                "Hướng nghiên cứu này tập trung vào các phương pháp tìm kiếm kiến trúc mạng nơ-ron tiên tiến để xác định các mô hình học sâu có hiệu năng cao nhưng giảm chi phí tính toán.",
            content: [
                "Nghiên cứu khảo sát các chiến lược thiết kế mô hình tự động nhằm nâng cao hiệu quả trong khi vẫn duy trì độ chính xác dự đoán.",
                "Trọng tâm là phát triển các giải pháp học sâu có khả năng mở rộng và phù hợp với triển khai thực tế trong môi trường hạn chế tài nguyên.",
                "Đề tài cũng đóng góp vào các vấn đề tối ưu hóa, độ bền vững và triển khai thực tiễn của các hệ thống học sâu tiên tiến.",
            ],
        },
        {
            id: 2,
            slug: "multilingual-language-understanding-systems",
            category: "Xử lý ngôn ngữ tự nhiên",
            status: "published",
            title: "Hệ thống hiểu ngôn ngữ đa ngữ",
            description:
                "Phát triển các hệ thống thông minh phục vụ hiểu và sinh ngôn ngữ trong môi trường đa ngôn ngữ.",
            fullDescription:
                "Hướng nghiên cứu này phát triển các hệ thống xử lý ngôn ngữ tự nhiên đa ngữ có khả năng hiểu, sinh và tương tác thông qua ngôn ngữ con người trong nhiều bối cảnh ngôn ngữ khác nhau.",
            content: [
                "Đề tài nghiên cứu học biểu diễn đa ngữ, dịch máy, hỏi đáp và trí tuệ hội thoại.",
                "Nghiên cứu hỗ trợ các công nghệ ngôn ngữ cho cả giao tiếp toàn cầu lẫn các ứng dụng bản địa hóa, bao gồm tài nguyên tiếng Việt.",
                "Mục tiêu tổng thể là xây dựng các hệ thống NLP mạnh, toàn diện và có giá trị ứng dụng trong nghiên cứu, giáo dục và dịch vụ công.",
            ],
        },
        {
            id: 3,
            slug: "real-time-object-detection-in-complex-environments",
            category: "Thị giác máy tính",
            status: "under_review",
            title: "Phát hiện đối tượng thời gian thực trong môi trường phức tạp",
            description:
                "Thiết kế các hệ thống thị giác máy tính phục vụ phát hiện đối tượng thời gian thực trong điều kiện khó.",
            fullDescription:
                "Lĩnh vực này tập trung vào các phương pháp phát hiện đối tượng và hiểu hình ảnh có tính bền vững cao trong các môi trường động, phức tạp và gần với thực tế.",
            content: [
                "Nghiên cứu giải quyết các thách thức như che khuất, thay đổi ánh sáng, nhòe chuyển động và cảnh nhiều đối tượng.",
                "Nhóm phát triển các mô hình thị giác máy tính hiệu quả cho các ứng dụng thực tiễn như giám sát, tự động hóa và quan trắc thông minh.",
                "Mục tiêu là nâng cao đồng thời cả tốc độ và độ tin cậy của các hệ thống thị giác thời gian thực trong bối cảnh vận hành phức tạp.",
            ],
        },
    ],
};