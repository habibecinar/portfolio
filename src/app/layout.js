import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const poppins = localFont({
  src: [
    { path: "../fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Habibe Çınar | Full Stack Developer",
  description:
    "Habibe Çınar — React, Next.js, Node.js ve ASP.NET MVC ile web uygulamaları geliştiren Full Stack Developer.",
  openGraph: {
    title: "Habibe Çınar | Full Stack Developer",
    description: "Full Stack Developer portfolio — projects, skills and contact.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${poppins.variable} antialiased`}>
      <body className="min-h-screen font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
