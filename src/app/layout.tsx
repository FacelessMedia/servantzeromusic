import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Servant Zero — Music for the Spiritually Wounded",
    template: "%s | Servant Zero",
  },
  description:
    "Faith-based Christian rap born from real struggle. Songs for the broken, the healing, and the still-fighting. Music, podcast, book, and more from Servant Zero.",
  metadataBase: new URL("https://servantzeromusic.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://servantzeromusic.com",
    siteName: "Servant Zero",
    title: "Servant Zero — Music for the Spiritually Wounded",
    description:
      "Faith-based Christian rap born from real struggle. Songs for the broken, the healing, and the still-fighting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servant Zero — Music for the Spiritually Wounded",
    description:
      "Faith-based Christian rap born from real struggle. Songs for the broken, the healing, and the still-fighting.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, playfair.variable)}>
      <head>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {/* Under Construction Banner */}
        <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground text-center text-xs sm:text-sm font-semibold py-1.5 px-4">
          🚧 This site is under construction — expect changes over the next couple weeks! 🚧
        </div>
        <Header />
        <main className="flex-1 pt-[calc(4rem+2rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
