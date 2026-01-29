import type { Metadata } from "next";
import "./globals.scss";
import { Providers } from "@/redux/provider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://xaviro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Xaviro Limited — High-end tech, low-end pricing",
    template: "%s | Xaviro Limited",
  },
  description:
    "Quality laptops, computers, and tech accessories at fair prices. Xaviro Limited brings reliable technology and support within reach for everyone.",
  keywords: [
    "laptops",
    "computers",
    "tech accessories",
    "Nigeria",
    "Xaviro",
    "affordable tech",
  ],
  authors: [{ name: "Xaviro Limited" }],
  creator: "Xaviro Limited",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Xaviro Limited",
    title: "Xaviro Limited — High-end tech, low-end pricing",
    description:
      "Quality laptops, computers, and tech accessories at fair prices. Xaviro Limited brings reliable technology and support within reach for everyone.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xaviro Limited — High-end tech, low-end pricing",
    description:
      "Quality laptops, computers, and tech accessories at fair prices. Reliable tech and support within reach.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
