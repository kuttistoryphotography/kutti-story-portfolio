import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageLoader from "@/components/PageLoader";
import "bootstrap/dist/css/bootstrap.min.css";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Kutti Story Photography",
  description: "Luxury Photography Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>
        <PageLoader>{children}</PageLoader>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}