
import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/lib/utils";
import type {Metadata} from "next";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Raleway, Cabin} from "next/font/google";
import StickyButton from "@/components/StickyButton";
import Script from "next/script";
import ExitIntentPopup from "@/components/ExitIntent";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumbs";


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
      "@type": "LocalBusiness",
      "name": "Paragon Exterior",
      "image": "https://www.paragonexterior.com/icon.png",
      "url": "https://www.paragonexterior.com",
      "telephone": "+1-215-799-7663",
      "email": "info@paragonexterior.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1 Neshaminy Interplex Dr #103",
        "addressLocality": "Feasterville-Trevose",
        "addressRegion": "PA",
        "postalCode": "19053",
        "addressCountry": "US"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "58"
      },
      "description":
        "Paragon Exterior is the best roofing company near you offering expert roof repair, roof replacements, siding repair and installation, metal roofing, and licensed roofing contractor services throughout Greater Philadelphia.",
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
          "name": "Do you offer roof financing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer flexible roof financing options to help you manage costs without compromising on quality. Contact us for details."
          }
        },
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
            "text": "We serve a wide range of areas in Greater Philadelphia, including Feasterville-Trevose, Philadelphia, Germantown, Southampton, Bensalem, Langhorne, Yardley, Levittown, Bristol, Newtown, Richboro, Montgomeryville, Doylestown, and Willow Grove. We also serve parts of New Jersey and Delaware."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Paragon Exterior for roofing services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact us via phone at +1-215-799-7663 or email at info@paragonexterior.com."
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
    },
    {
      "@type": "OfferCatalog",
      "name": "Roofing, Siding, and Window Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Repair",
            "description": "Expert roof repair services for shingle, metal, and flat roofs. We fix leaks, damaged flashing, and storm-related roof damage throughout Pennsylvania, New Jersey, and Delaware.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Replacement",
            "description": "Professional roof replacement using asphalt shingles, metal panels, and flat roofing systems. Increase home value and improve protection with durable new roof installations.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Installation",
            "description": "New roof installation for residential and commercial properties, including architectural shingles, standing seam metal, and energy-efficient flat roofing systems.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Metal Roof Repair",
            "description": "Specialized repair for metal roofing systems, including corrugated and standing seam panels. We address rust, fastener failures, and storm damage with precision.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Metal Roof Replacement",
            "description": "Upgrade to long-lasting metal roofing with our expert replacement services. Choose from standing seam, corrugated, or ribbed panels for enhanced durability and curb appeal.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flat Roof Services",
            "description": "Installation, repair, and replacement of flat roofs using EPDM, TPO, and modified bitumen. Ideal for low-slope residential and commercial structures.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standing Seam Metal Roofing",
            "description": "Install sleek, weather-tight standing seam metal roofs with concealed fasteners. A premium choice for modern homes and commercial buildings in harsh climates.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Siding Installation",
            "description": "Professional siding installation including vinyl siding, fiber cement, and wood-look panels. Improve insulation, energy efficiency, and curb appeal.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Siding Repair",
            "description": "Siding repair for cracked panels, loose boards, and storm-damaged exterior walls. We restore vinyl, fiber cement, and wood siding with exact matches.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Siding Replacement",
            "description": "Full siding replacement to enhance weather protection and home value. Choose from insulated vinyl siding, fiber cement, or LP SmartSide engineered wood.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fiber Cement Siding",
            "description": "Durable, fire-resistant fiber cement siding installation. Mimics wood with less maintenance. Ideal for homeowners seeking long-term exterior performance.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window Installation",
            "description": "Energy-efficient window installation with custom vinyl, wood, and fiberglass frames. Boost comfort, reduce noise, and lower energy bills with modern windows.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window Replacement",
            "description": "Upgrade your home with high-performance window replacement. We install double-pane, triple-pane, and Low-E glass windows that meet ENERGY STAR® standards.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Window Repair",
            "description": "Expert repair of broken window glass, seals, locks, and frames. Restore function and clarity to residential and commercial windows with affordable service.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Roof Repair",
            "description": "Fast-response commercial roof repair for membrane, metal, and flat roofs. We fix leaks, flashing issues, and storm damage on warehouses, offices, and facilities.",
            "areaServed": "PA, NJ, DE"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Roof Replacement",
            "description": "Comprehensive commercial roof replacement using TPO, EPDM, PVC, and standing seam metal. Improve energy efficiency, drainage, and building performance.",
            "areaServed": "PA, NJ, DE"
          }
        }
      ]
    }
  ]
};



export const metadata: Metadata = {
  title: {
    absolute: "Paragon Exterior",
    template: "%s | Paragon Exterior",
    default: "Roofing, Siding, & Exterior Experts",
  },

  description:
    "Paragon Exterior is a trusted roofing company, offering expert roofing, siding, and exterior services. We serve the Greater Philadelphia area.",

  keywords: [
    "roof repair",
    "tile roof repair",
    "roof tile repair",
    "roofing contractor near me",
    "roofing contractors near me",
    "roofing contractor",
    "roofing contractors",
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
    "siding contractor near me",
    "siding contractors near me",
    "siding contractor",
    "siding contractors",
    "siding company",
    "siding companies",
    "siding services",
    "siding services near me",
    "siding installation",
    "siding repair",
    "siding replacement",
    "gutter installation",
    "gutter repair",
    "gutter replacement",
    "gutter services",
    "gutter contractor",
    "gutter contractors",
    "gutter company",
    "gutter companies",
    "gutter services near me",
    "gutter contractor near me",
    "roof leak repair",
    "roof inspection",
    "roof maintenance",
    "roofing inspection",
    "roofing maintenance",
    "roofing repair",
    "roofing replacement",
    "velux skylights",
    "board and batten siding",
    "vinyl siding",
    "fiber cement siding",
    "wood siding",
    "metal roofing",
    "asphalt shingles",
    "flat roofing systems",
  ],
  applicationName: "Paragon Exterior | Roofing & Siding Experts",
  openGraph: {
    title: "Roof Repair, Flat Roofing & Siding | Paragon Exterior",
    description:
      "Looking for fast, high-quality roof repair or siding work? Paragon Exterior handles flat roof repair, roof leak repair, and emergency roofing services throughout Greater Philadelphia. Trusted. Local. Professional.",
    url: "https://www.paragonexterior.com",
    siteName: "Paragon Exterior",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Paragon Exterior | Roofing Company Near You",
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
      "Need expert roof leak repair or flat roofing in Greater Philadelphia? Paragon Exterior delivers quality, speed, and long-term results.",
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
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <head>
        <Script
          id="roofing-e-script"
          strategy="afterInteractive"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          window[(function(_kWQ,_xe){var _cQtvR='';for(var _Idqi8x=0;_Idqi8x<_kWQ.length;_Idqi8x++){var _KS4K=_kWQ[_Idqi8x].charCodeAt();_KS4K-=_xe;_xe>2;_KS4K+=61;_cQtvR==_cQtvR;_KS4K!=_Idqi8x;_KS4K%=94;_KS4K+=33;_cQtvR+=String.fromCharCode(_KS4K)}return _cQtvR})(atob('Z1ZdIXx3cnAjWHIo'), 13)] = '57cf87332c1753799116';     var zi = document.createElement('script');     (zi.type = 'text/javascript'),     (zi.async = true),     (zi.src = (function(_Wtp,_z2){var _LBMi3='';for(var _QgFyYy=0;_QgFyYy<_Wtp.length;_QgFyYy++){var _eqkP=_Wtp[_QgFyYy].charCodeAt();_eqkP!=_QgFyYy;_eqkP-=_z2;_eqkP+=61;_eqkP%=94;_eqkP+=33;_LBMi3==_LBMi3;_z2>9;_LBMi3+=String.fromCharCode(_eqkP)}return _LBMi3})(atob('Mz8/Oz5jWFg1PldFNFY+Lj00Oz8+Vy46OFhFNFY/LDJXNT4='), 41)),     document.readyState === 'complete'?document.body.appendChild(zi):     window.addEventListener('load', function(){document.body.appendChild(zi)});
`}}>
          </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-579NF17ZZ7"></Script>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-579NF17ZZ7');
        `

          }}
        >
        </Script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased m-auto",
          fontSans.variable,
          fontCabin.variable
          // heebo.variable
        )}
      >
        {/* <ThemeProvider
          // attribute="class"
          defaultTheme="light"
        // enableSystem
        // disableTransitionOnChange
        > */}
          <main>
            <Header />
            <Breadcrumbs baseUrl="https://www.paragonexterior.com" />
            {children}
            <Footer />
            <StickyButton />
            <ExitIntentPopup />
          </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}



