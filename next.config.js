/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/experiences/research-lead": { page: "/experiences/research-lead" },
      "/experiences/garmin-intern": { page: "/experiences/garmin-intern" },
    };
  },
  trailingSlash: true,
};

module.exports = nextConfig;
