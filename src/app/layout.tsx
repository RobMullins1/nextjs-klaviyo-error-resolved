import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Store",
  description: "Shopify Headless Storefront",
};


export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script
          async type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/W3c567/klaviyo.js"
        />
      </body>
    </html>
  );
}
