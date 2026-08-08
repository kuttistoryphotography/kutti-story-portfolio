import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageLoader from "@/components/PageLoader";
import "bootstrap/dist/css/bootstrap.min.css";


const heading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kuttistoryphotography.in"),

  title: {
    default: "Best Wedding Photographer in Madurai | Candid Wedding Photography | Kutti Story Photography",
    template: "%s | Kutti Story Photography",
  },

  description:
    "Looking for the best wedding photographer in Madurai? Kutti Story Photography specializes in candid wedding photography, cinematic wedding films, pre-wedding shoots, engagement photography, maternity, baby shoots, and event videography across Tamil Nadu.",
  
  category: "Photography",

  keywords: [
    "Best Wedding Photography in Madurai",
    "Wedding Photographer Madurai",
    "Candid Wedding Photography",
    "Wedding Videography",
    "Pre Wedding Photography",
    "Engagement Photography",
    "Maternity Photography",
    "Baby Shoot",
    "Event Photography",
    "Tamil Nadu Wedding Photographer",
    "Kutti Story Photography",
    "Best Wedding Photographer in Madurai",
    "Wedding Photography in Madurai",
    "Candid Wedding Photographer Madurai",
    "Wedding Videographer Madurai",
    "Wedding Photography Packages Madurai",
    "Pre Wedding Shoot Madurai",
    "Engagement Photography Madurai",
    "Marriage Photography Madurai",
    "Tamil Wedding Photographer",
    "Luxury Wedding Photographer Madurai",
  ],

  authors: [
    {
      name: "Kutti Story Photography",
      url: "https://kuttistoryphotography.in",
    },
  ],

  creator: "Kutti Story Photography",
  publisher: "Kutti Story Photography",

  alternates: {
    canonical: "https://kuttistoryphotography.in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kuttistoryphotography.in",
    siteName: "Kutti Story Photography",
    title: "Best Wedding Photographer in Madurai | Kutti Story Photography",
    description:
      "Luxury Wedding Photography & Cinematic Videography in Madurai and across Tamil Nadu.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kutti Story Photography",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Wedding Photographer in Madurai | Kutti Story Photography",
    description:
      "Luxury Wedding Photography in Madurai and Tamil Nadu.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${heading.variable} ${body.variable} antialiased bg-white text-neutral-900`}
      >
        <PageLoader>{children}</PageLoader>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}