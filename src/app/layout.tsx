
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import { Raleway, Cabin } from "next/font/google";
import StickyButton from "@/components/StickyButton";


const fontSans = Raleway({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'], // Specify all desired weights
  variable: '--font-raleway',
  display: 'swap',
});


const fontCabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '700',], // Specify all desired weights
  variable: '--font-cabin',
  display: 'swap',
})


/** ------------------------------------------------------------------
 *  Consolidated JSON‑LD (RoofingContractor + FAQPage)
 * ------------------------------------------------------------------*/
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "RoofingContractor",
      "name": "Paragon Exterior",
      "image": "https://www.paragonexterior.com/logo.png",
      "url": "https://www.paragonexterior.com",
      "telephone": "+1-267-497-3183",
      "email": "sales@paragonexterior.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1 Neshaminy Interplex Dr #103",
        "addressLocality": "Feasterville-Trevose",
        "addressRegion": "PA",
        "postalCode": "19053",
        "addressCountry": "US"
      },
      "description":
        "Paragon Exterior is the best roofing company near you offering expert roof repair, residential roofing, flat roofing, and licensed roofing contractor services throughout Pennsylvania.",
      "areaServed": [
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Feasterville-Trevose",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Philadelphia",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Germantown",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Southampton",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bensalem",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Langhorne",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Yardley",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Levittown",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bristol",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Newtown",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Richboro",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Montgomeryville",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Doylestown",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        },
        {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Willow Grove",
            "addressRegion": "PA",
            "addressCountry": "US"
          }
        },



      ],
      "priceRange": "$$",
      "sameAs": [
        "https://facebook.com/paragonexterior",
        "https://instagram.com/paragonexterior"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where can I find roof repair near me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paragon Exterior provides expert roof repair all over PA and surrounding areas. Our licensed roofing contractors handle everything from leaks to full replacements."
          }
        },
        {
          "@type": "Question",
          "name": "What services do your roofing contractors offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our roofing company offer residential roofing, free estimates, roof repairs, roof replacements, tile roof repair, flat roofing, and new roof installations using top-rated materials."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose Paragon Exterior as your roofing company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We’re known as one of the best roofing companies near you, offering affordable pricing, fast response times, and high-quality roof work backed by years of experience."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with residential roofing clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in residential roofing services, including roof repair, roof replacement, and custom roofing solutions tailored to your home’s needs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer free estimates for roofing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide free estimates for all our roofing services. Contact us to schedule a consultation."
          }
        },
        {
          "@type": "Question",
          "name": "What areas do you serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve a wide range of areas in Pennsylvania, including Feasterville-Trevose, Philadelphia, Germantown, Southampton, Bensalem, Langhorne, Yardley, Levittown, Bristol, Newtown, Richboro, Montgomeryville, Doylestown, and Willow Grove."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Paragon Exterior for roofing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact us via phone at +1-267-497-3183 or email at sales@paragonexterior.com."
          }
        },
        {
          "@type": "Question",
          "name": "What types of roofing materials do you use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use a variety of high-quality roofing materials, including asphalt shingles, metal roofing, tile roofs, and flat roofing systems."
          }
        },

      ]
    }
  ]
};



export const metadata: Metadata = {
  title: {
    absolute: "Paragon Exterior",
    template: '%s | Paragon Exterior',
    default: 'Paragon Exterior | Roofing Company Near You',
  },

  keywords: [
    "roof repair",
    "tile roof repair",
    "Flat roofing",
    "roofing contractors",
    "roofing contractor",
    "roofing companies",
    "best roofing company near me",
    "roofing company",
    "company roofing",
    "residential roofing",
    "roofing contractor",
    "roofing services",
    "roof repair near me",
    "roof replacement",
    "roof installation",
    "roofing services near me",
    "roofing company near me",
  ],
  applicationName: "Paragon Exterior | Roofing Company",
  description: "Paragon Exterior is the best roofing company near you offering expert roof repair, tile roof repair, residential roofing, flat roofing, and licensed roofing contractor services throughout Pennsylvania.",
  openGraph: {
    title: "Paragon Exterior | Best Roofing Company Near You",
    description: "Paragon Exterior is the best roofing company near you offering expert roof repair, residential roofing, flat roofing, and licensed roofing contractor services throughout Pennsylvania.",
    url: "https://www.paragonexterior.com",
    siteName: "Paragon Exterior",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Paragon Exterior | Best Roofing Company Near You",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    site: "@ParagonExterior",
    title: "Paragon Exterior | Best Roofing Company Near You",
    description:
      "Paragon Exterior offers expert roof repair, replacement and flat roofing across Pennsylvania.",
    images: ["/opengraph-image.png"],
  },

  // ——— Viewport ———
  viewport: "width=device-width, initial-scale=1",

  // ——— Robots ———
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  other: {
    "application/ld+json": JSON.stringify(structuredData),
  },

  // ——— Homepage canonical (dynamic pages should supply their own) ———
  alternates: {
    canonical: "https://www.paragonexterior.com/",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased m-auto",
          fontSans.variable, 
          fontCabin.variable
          // heebo.variable
        )}
      >
        <ThemeProvider
          // attribute="class"
          defaultTheme="light"
          // enableSystem
          // disableTransitionOnChange
        >
          <main>
            <Header />
            {children}
            <Footer />
            <StickyButton/>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
// import {ThemeProvider} from "@/components/theme-provider";
// import {cn} from "@/lib/utils";
// import type {Metadata} from "next";
// import "./globals.css";
// import {Header} from "@/components/Header";
// import {Footer} from "@/components/Footer";
// import {Raleway, Cabin} from "next/font/google";
// import StickyButton from "@/components/StickyButton";

// /** ------------------------------------------------------------------
//  *  Local Google Fonts
//  * ------------------------------------------------------------------*/
// const fontSans = Raleway({
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "700", "900"],
//   variable: "--font-raleway",
//   display: "swap",
// });

// const fontCabin = Cabin({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-cabin",
//   display: "swap",
// });

// /** ------------------------------------------------------------------
//  *  Consolidated JSON‑LD (RoofingContractor + FAQPage)
//  * ------------------------------------------------------------------*/
// const structuredData = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "RoofingContractor",
//       "name": "Paragon Exterior",
//       "image": "https://www.paragonexterior.com/logo.png",
//       "url": "https://www.paragonexterior.com",
//       "telephone": "+1-555-123-4567",
//       "email": "sales@paragonexterior.com",
//       "address": {
//         "@type": "PostalAddress",
//         "streetAddress": "1 Neshaminy Interplex Dr #103",
//         "addressLocality": "Feasterville-Trevose",
//         "addressRegion": "PA",
//         "postalCode": "19053",
//         "addressCountry": "US"
//       },
//       "description":
//         "Paragon Exterior is the best roofing company near you offering expert roof repair, residential roofing, flat roofing, and licensed roofing contractor services throughout Pennsylvania.",
//       "areaServed": [
//         {
//           "@type": "Place",
//           "address": {
//             "@type": "PostalAddress",
//             "addressLocality": "Feasterville-Trevose",
//             "addressRegion": "PA",
//             "addressCountry": "US"
//           }
//         },
//         {
//           "@type": "Place",
//           "address": {
//             "@type": "PostalAddress",
//             "addressLocality": "Philadelphia",
//             "addressRegion": "PA",
//             "addressCountry": "US"
//           }
//         },
//         {
//           "@type": "Place",
//           "address": {
//             "@type": "PostalAddress",
//             "addressLocality": "Germantown",
//             "addressRegion": "PA",
//             "addressCountry": "US"
//           }
//         },
//         {
//           "@type": "Place",
//           "address": {
//             "@type": "PostalAddress",
//             "addressLocality": "Southampton",
//             "addressRegion": "PA",
//             "addressCountry": "US"
//           }
//         },
//         {
//           "@type": "Place",
//           "address": {
//             "@type": "PostalAddress",
//             "addressLocality": "Bensalem",
//             "addressRegion": "PA",
//             "addressCountry": "US"
//           }
//         },
//         {
//           "@type": "Place",
//           "address": {
//             "@type": "PostalAddress",
//             "addressLocality": "Langhorne",
//             "addressRegion": "PA",
//             "addressCountry": "US"
//           }
//         },
//         {
//           "@type": "Place",
//           "address": {
//             "@type": "PostalAddress",
//             "addressLocality": "Yardley",
//             "addressRegion": "PA",
//             "addressCountry": "US"
//           }
//         },
//         {
//           "@type": "Place",
//           "address": {
//             "@type": "PostalAddress",
//             "addressLocality": "Levittown",
//             "addressRegion": "PA",
//             "addressCountry": "US"
//           }
//         },
//         {
//           "@type": "Place",
//           "address": {
//             "@type": "PostalAddress",
//             "addressLocality": "Bristol",
//             "addressRegion": "PA",
//             "addressCountry": "US"
//           }
//         },
//         {
//           "@type": "Place",
//           "address": {
//             "@type": "PostalAddress",
//             "addressLocality": "Newtown",
//             "addressRegion": "PA",
//             "addressCountry": "US"
//           }
//         },
//         {
//           "@type": "Place",
//           "address": {
//             "@type": "PostalAddress",
//             "addressLocality": "Richboro",
//             "addressRegion": "PA",
//             "addressCountry": "US"
//           }
//         },
//         {
//           "@type": "Place",
//           "address": {
//             "@type": "PostalAddress",
//             "addressLocality": "Montgomeryville",
//             "addressRegion": "PA",
//             "addressCountry": "US"
//           }
//         }
//       ],
//       "priceRange": "$$",
//       "sameAs": [
//         "https://facebook.com/paragonexterior",
//         "https://instagram.com/paragonexterior"
//       ]
//     },
//     {
//       "@type": "FAQPage",
//       "mainEntity": [
//         {
//           "@type": "Question",
//           "name": "Where can I find roof repair near me?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Paragon Exterior provides expert roof repair all over PA and surrounding areas. Our licensed roofing contractors handle everything from leaks to full replacements."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "What services do your roofing contractors offer?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Our roofing company offer residential roofing, roof repairs, roof replacements, flat roofing, and new roof installations using top-rated materials."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Why choose Paragon Exterior as your roofing company?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "We’re known as one of the best roofing companies near you, offering affordable pricing, fast response times, and high-quality roof work backed by years of experience."
//           }
//         },
//         {
//           "@type": "Question",
//           "name": "Do you work with residential roofing clients?",
//           "acceptedAnswer": {
//             "@type": "Answer",
//             "text": "Yes, we specialize in residential roofing services, including roof repair, roof replacement, and custom roofing solutions tailored to your home’s needs."
//           }
//         }
//       ]
//     }
//   ]
// };

// /** ------------------------------------------------------------------
//  *  Global <head> metadata (Next.js App Router)
//  * ------------------------------------------------------------------*/
// export const metadata: Metadata = {
//   // ——— Titles & Description ———
//   title: {
//     absolute: "Paragon Exterior",
//     template: "%s | Paragon Exterior",
//     default: "Paragon Exterior | Best Roofing Company Near You",
//   },
//   description:
//     "Paragon Exterior is the best roofing company near you offering expert roof repair, residential roofing, flat roofing, and licensed roofing contractor services throughout Pennsylvania.",
//   keywords:
//     "roof repair, Flat roofing, roofing companies, best roofing company near me, roofing company, company roofing, residential roofing, roofing contractor",
//   applicationName: "Paragon Exterior | Roofing Company",

//   // ——— Open Graph ———
//   openGraph: {
//     title: "Paragon Exterior | Best Roofing Company Near You",
//     description:
//       "Paragon Exterior is the best roofing company near you offering expert roof repair, residential roofing, flat roofing, and licensed roofing contractor services throughout Pennsylvania.",
//     url: "https://www.paragonexterior.com",
//     siteName: "Paragon Exterior",
//     images: [
//       {
//         url: "/opengraph-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Paragon Exterior",
//         type: "image/png",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   // ——— Twitter Cards ———
  // twitter: {
  //   card: "summary_large_image",
  //   site: "@ParagonExterior",
  //   title: "Paragon Exterior | Best Roofing Company Near You",
  //   description:
  //     "Paragon Exterior offers expert roof repair, replacement and flat roofing across Pennsylvania.",
  //   images: ["/opengraph-image.png"],
  // },

  // // ——— Viewport ———
  // viewport: "width=device-width, initial-scale=1",

  // // ——— Robots ———
  // robots: {
  //   index: true,
  //   follow: true,
  //   nocache: false,
  // },

//   // ——— Icons & Manifest ———
//   icons: {
//     icon: [
//       {url: "/favicon-32x32.png", sizes: "32x32", type: "image/png"},
//       {url: "/favicon-16x16.png", sizes: "16x16", type: "image/png"},
//     ],
//     apple: "/apple-touch-icon.png",
//   },
//   manifest: "/site.webmanifest",

//   // ——— Structured Data (single script) ———
  // other: {
  //   "application/ld+json": JSON.stringify(structuredData),
  // },

  // // ——— Homepage canonical (dynamic pages should supply their own) ———
  // alternates: {
  //   canonical: "https://www.paragonexterior.com/",
  // },
// };

// /** ------------------------------------------------------------------
//  *  Root Layout
//  * ------------------------------------------------------------------*/
// export default function RootLayout({
//   children,
// }: Readonly<{children: React.ReactNode}>) {
//   return (
//     <html lang="en">
//       {/* Preload critical assets for better CWV */}
//       <head>
//         <link
//           rel="preload"
//           href="/fonts/raleway-var.woff2"
//           as="font"
//           type="font/woff2"
//           crossOrigin="anonymous"
//         />
//         <link rel="preload" href="/images/hero-roof.jpg" as="image" />
//       </head>
//       <body
//         className={cn(
//           "min-h-screen bg-background font-sans antialiased m-auto",
//           fontSans.variable,
//           fontCabin.variable
//         )}
//       >
//         <ThemeProvider defaultTheme="light">
//           <main>
//             <Header />
//             {children}
//             <Footer />
//             <StickyButton />
//           </main>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
