import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KIMERIS MADEN | Kurumsal Web Sitesi",
    template: "%s | KIMERIS MADEN",
  },
  description:
    "KIMERIS MADEN hakkında bilgi edinin. Faaliyetlerimizi, projelerimizi ve kurumsal duyurularımızı inceleyin.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-dvh bg-paper font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2.5 focus:font-display focus:text-sm focus:font-bold focus:text-paper"
        >
          İçeriğe geç
        </a>
        {children}
      </body>
    </html>
  );
}
