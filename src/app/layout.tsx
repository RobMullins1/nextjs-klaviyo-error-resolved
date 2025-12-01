import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const klaviyoCompanyId =
  process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID ?? "W3c567";

export const metadata: Metadata = {
  title: "Store",
  description: "Shopify Headless Storefront",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Script
          id="klaviyo-script"
          src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${klaviyoCompanyId}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
