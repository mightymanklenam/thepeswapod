import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Peswa Podcast - African Business Leaders & Entrepreneurs",
  description: "Hear from Africa's most influential entrepreneurs, business leaders, and innovators. Real stories, actionable insights, and the mindset shifts that drive extraordinary success.",
  keywords: ["African entrepreneurs", "business podcast", "startup stories", "African business leaders", "entrepreneurship", "innovation", "success stories"],
  authors: [{ name: "The Peswa Podcast" }],
  creator: "The Peswa Podcast",
  publisher: "The Peswa Podcast",
  openGraph: {
    title: "The Peswa Podcast - African Business Leaders & Entrepreneurs",
    description: "Hear from Africa's most influential entrepreneurs, business leaders, and innovators. Real stories, actionable insights, and the mindset shifts that drive extraordinary success.",
    url: "https://thepeswa.com",
    siteName: "The Peswa Podcast",
    images: [
      {
        url: "/peswacover-dark.png",
        width: 1200,
        height: 630,
        alt: "The Peswa Podcast - African Business Leaders & Entrepreneurs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Peswa Podcast - African Business Leaders & Entrepreneurs",
    description: "Hear from Africa's most influential entrepreneurs, business leaders, and innovators. Real stories, actionable insights, and the mindset shifts that drive extraordinary success.",
    images: ["/peswacover-dark.png"],
    creator: "@thepeswa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="canonical" href="https://thepeswa.com" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/peswacover-dark.png" />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
