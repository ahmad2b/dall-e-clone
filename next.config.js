/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    DATABASE_URL:
      "postgres://mahmadshoukat7:fZnq0kS9bjaF@ep-bold-wildflower-215811.ap-southeast-1.aws.neon.tech/neondb",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
