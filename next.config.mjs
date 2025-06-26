/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
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
