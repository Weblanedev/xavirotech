/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // avoids sharp dependency when not installed
    remotePatterns: [
      { protocol: "https", hostname: "i.dummyjson.com" },
      { protocol: "https", hostname: "dummyjson.com" },
      { protocol: "https", hostname: "cdn.dummyjson.com" },
    ],
  },
  async rewrites() {
    return [
      // Fix dev 404: Next.js sometimes requests this path; global styles are in globals.scss
      {
        source: "/_next/static/css/app/layout.css",
        destination: "/api/layout-css",
      },
    ];
  },
};

module.exports = nextConfig;
