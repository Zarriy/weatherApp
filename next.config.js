/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "openweathermap.org",
      },
      { protocol: "http", hostname: "openweathermap.org" },
    ],
  },
};

module.exports = nextConfig;
