/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ],
  },
  // redirects: async () => {
  //   return [
  //     {
  //       // source: "/:path*", // Redirect all pages
  //       source: "/((?!dvd$).*)", // Match everything EXCEPT "/dvd"

  //       destination: "/dvd", // Redirect to a notice page
  //       permanent: false,
  //     },
  //   ];
  // },
};

export default nextConfig;
