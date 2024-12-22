import { ThemeProvider } from "@/components/theme-provider";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import { Crimson_Pro, Heebo, Raleway, Cabin } from "next/font/google";
import StickyButton from "@/components/StickyButton";

// const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontSans = Raleway({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '900'], // Specify all desired weights
  variable: '--font-raleway',
  display: 'swap',
});

// const heebo = Heebo({
//   subsets: ['latin'],
//   weight: ['200', '300', '400', '500', '700', '900'], // Specify all desired weights
//   variable: '--font-heebo',
//   display: 'swap',
// })

const fontCabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '700',], // Specify all desired weights
  variable: '--font-cabin',
  display: 'swap',
})



export const metadata: Metadata = {
  title: {
    absolute: config.blog.metadata.title.absolute,
    default: config.blog.metadata.title.default,
    template: config.blog.metadata.title.template,
  },
  description: config.blog.metadata.description,
  openGraph: {
    title: config.blog.metadata.title.default,
    description: config.blog.metadata.description,
    images: [
      signOgImageUrl({
        title: config.blog.name,
      }),
    ]
  }
};

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
