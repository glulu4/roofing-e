
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


export const metadata: Metadata = {

  title: {
    template: '%s | Paragon Exterior',
    default: 'Paragon Exterior | Best Roofing Company Near You',
  },

  keywords: "roof repair, Flat roofing, roofing companies, best roofing company near me, roofing company, company roofing, residential roofing, roofing contractor",
  applicationName: "Paragon Exterior | Roofing Company",
  description: "Paragon Exterior is the best roofing company near you offering expert roof repair, residential roofing, flat roofing, and licensed roofing contractor services throughout Pennsylvania.",
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
        alt: "Paragon Exterior",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    // Roofing Contractor Business Info
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "RoofingContractor",
      "name": "Paragon Exterior",
      "image": "https://www.paragonexterior.com/logo.png",
      "url": "https://www.paragonexterior.com",
      "telephone": "+1-555-123-4567",
      "email": "sales@paragonexterior.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1 Neshaminy Interplex Dr #103",
        "addressLocality": "Feasterville-Trevose",
        "addressRegion": "PA",
        "postalCode": "19053",
        "addressCountry": "US"
      },
      "description": "Paragon Exterior is the best roofing company near you offering expert roof repair, residential roofing, flat roofing, and licensed roofing contractor services throughout Pennsylvania.",
      // "areaServed": {
      //   "@type": "Place",
      //   "address": {
      //     "@type": "PostalAddress",
      //     "addressLocality": "Feasterville-Trevose",
      //     "addressRegion": "PA",
      //     "addressCountry": "US"
      //   }
      // },

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
        }
      ],
      "priceRange": "$$",
      "sameAs": [
        "https://facebook.com/paragonexterior",
        "https://instagram.com/paragonexterior"
      ]
    }),

    // SEO-Optimized FAQ Schema with Keywords
    "application/ld+json-faq": JSON.stringify({
      "@context": "https://schema.org",
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
            "text": "Our roofing company offer residential roofing, roof repairs, roof replacements, flat roofing, and new roof installations using top-rated materials."
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
        }
      ]
    })
  }

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
          attribute="class"
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
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
