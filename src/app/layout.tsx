"use client"

import { ThemeProvider } from "@/components/theme-provider";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import { Crimson_Pro, Heebo, Raleway, Cabin } from "next/font/google";
import StickyButton from "@/components/StickyButton";
import ogImage from "./opengraph-image.png"
import {Router} from "next/router";
import {redirect, usePathname} from "next/navigation";
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





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathName = usePathname();
  console.log("pathName: ", pathName);
  
  // redirect('/dvd')

  if (pathName === '/dvd') {
    return (
      <html lang="en">
        <body
        className="bg-black"
        >

            <main>
              {children}
            </main>
        </body>
      </html>
    )
  }
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
