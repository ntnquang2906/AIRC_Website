"use client";

import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { contactTranslations } from "@/data/translations/contact";

export default function ContactForm() {
    const { language } = useLanguage();
    const t = contactTranslations[language].form;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-language": language,
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                setStatus(result.message || t.serverError);
            } else {
                setStatus(result.message || t.success);
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            }
        } catch {
            setStatus(t.serverError);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        >
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        {t.nameLabel}
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-400"
                        placeholder={t.namePlaceholder}
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        {t.emailLabel}
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-400"
                        placeholder={t.emailPlaceholder}
                    />
                </div>
            </div>

            <div className="mt-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                    {t.subjectLabel}
                </label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-400"
                    placeholder={t.subjectPlaceholder}
                />
            </div>

            <div className="mt-6">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                    {t.messageLabel}
                </label>
                <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-red-400"
                    placeholder={t.messagePlaceholder}
                />
            </div>

            <div className="mt-6">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-lg bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800 disabled:opacity-60"
                >
                    {isSubmitting ? t.sending : t.submit}
                </button>
            </div>

            {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
        </form>
    );
}