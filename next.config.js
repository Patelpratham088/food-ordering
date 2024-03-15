/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "dawid-food-ordering.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "spce-food-ordering.s3.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
