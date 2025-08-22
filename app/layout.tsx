import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

// Define a constant for your site's URL
const siteUrl = "https://www.your-domain.com"; // Replace with your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MOSBytes - Practical Tech & AI",
  description:
    "Helping you start, grow, and thrive with practical tech tips, AI tools, and strategies.",
  keywords: [
    "AI",
    "Web Development",
    "Tech Tips",
    "Programming",
    "MOSBytes",
    "Learn AI",
    "Developer Growth",
  ],
  openGraph: {
    title: "MOSBytes - Practical Tech & AI",
    description: "Practical guides and strategies for AI and web development.",
    url: siteUrl,
    siteName: "MOSBytes",
    images: [
      {
        url: "/og-image.png", // Place your Open Graph image in the `public` folder
        width: 1200,
        height: 630,
        alt: "MOSBytes - Practical Tech & AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOSBytes - Practical Tech & AI",
    description: "Practical guides and strategies for AI and web development.",
    images: ["/og-image.png"], // Must be an absolute URL, `metadataBase` will handle this
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-transparent text-gray-900 flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "MOSBytes",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
