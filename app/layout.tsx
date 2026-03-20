import "./globals.css";
import { LanguageProvider } from "@/context/language-context";

export const metadata = {
  title: "AIRC Website",
  description: "Artificial Intelligence Research Center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}