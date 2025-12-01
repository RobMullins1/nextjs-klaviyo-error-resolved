import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/services/login_with_shop/authorize",
        destination:
          "https://www.klaviyo.com/services/login_with_shop/authorize",
      },
      {
        source: "/login",
        destination: "https://www.klaviyo.com/login",
      },
    ];
  },
};

export default nextConfig;
