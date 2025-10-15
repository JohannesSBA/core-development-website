import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "CORE Development | Climate Resilience & Sustainable Development in Africa",
  description:
    "Empowering African communities through climate-resilient solutions, sustainable development programs, and strategic partnerships. Explore our initiatives in climate-smart agriculture, clean energy, and community empowerment.",
  keywords: [
    "African development",
    "climate resilience",
    "sustainable communities",
    "clean energy Africa",
    "community empowerment",
    "climate-smart agriculture",
    "sustainable development goals",
  ],
  icons: {
    icon: [
      { url: "/fFavico.jpg", sizes: "16x16" },
      { url: "/fFavico.jpg", sizes: "32x32" },
      { url: "/fFavico.jpg", sizes: "48x48" },
      { url: "/fFavico.jpg", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/fFavico.jpg", sizes: "180x180" }],
  },
  openGraph: {
    title: "CORE Development | Sustainable Solutions for Africa",
    description:
      "Leading Africa's transition to climate-resilient development through innovation and community engagement",
    url: "https://coredevelopment.africa",
    siteName: "CORE Development",
    images: [
      {
        url: "https://coredevelopment.africa/fFavico.jpg",
        width: 1200,
        height: 630,
        alt: "CORE Development sustainable initiatives in Africa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CORE Development | Building Climate Resilience in Africa",
    description:
      "Pioneering sustainable development solutions across African communities through innovation and partnership",
    images: ["https://coredevelopment.africa/fFavico.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="CORE Development | Climate Resilience & Sustainable Development in Africa"
        />
        <meta
          name="keywords"
          content="African development, climate resilience, sustainable communities, clean energy Africa, community empowerment, climate-smart agriculture, sustainable development goals"
        />
        <meta name="author" content="CORE Development" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://coredevelopment.org" />
        <link rel="icon" type="image/x-icon" href="/CoreLogo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
