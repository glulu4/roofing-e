/** @type {import('next').NextConfig} */
const nextConfig = {


  async rewrites() {
    return [
      {
        source: '/home-improvement-:slug',
        destination: '/home-improvement/:slug',
      },
    ];
  },

  images: {
    minimumCacheTTL: 2678400, // 31 days in seconds
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "app.gethearth.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
