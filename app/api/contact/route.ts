import { NextResponse } from "next/server";
import { contactTranslations } from "@/data/translations/contact";

export async function POST(req: Request) {
    try {
        const languageHeader = req.headers.get("x-language");
        const language = languageHeader === "vi" ? "vi" : "en";

        const apiText = contactTranslations[language].api;

        const body = await req.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { message: apiText.required },
                { status: 400 }
            );
        }

        const emailPattern = /\S+@\S+\.\S+/;

        if (!emailPattern.test(email)) {
            return NextResponse.json(
                { message: apiText.invalidEmail },
                { status: 400 }
            );
        }

        console.log("New contact message:", {
            name,
            email,
            subject,
            message,
            submittedAt: new Date().toISOString(),
            language,
        });

        return NextResponse.json(
            { message: apiText.received },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { message: contactTranslations.en.api.failed },
            { status: 500 }
        );
    }
}