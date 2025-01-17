
"use client";

import {FunctionComponent} from "react";
import {FaFacebookF, FaInstagram, FaTiktok, FaYoutube, } from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";

const navigation = {
  main: [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Roofing", href: "/roofing"},
    {name: "Siding", href: "/siding"},

    {name: "Solar", href: "/solar"},
    {name: "Contact", href: "/contact"},
    {name: "Free Estimate", href: "/estimate"},
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/Paragon-Exterior/61572385371262/?mibextid=wwXIfr&rdid=mHnxYd4df9TcOHxK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F158Gz9PZBG%2F%3Fmibextid%3DwwXIfr",
      icon: FaFacebookF,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/paragonexterior/",
      icon: FaInstagram,
    },
    {
      name:"X",
      href:"https://x.com/ParagonEXTR",
      icon: BsTwitterX,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@ParagonExterior",
      icon: FaTiktok,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@ParagonExterior",
      icon: FaYoutube,
    },
  ],
};


export const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-primaryblue">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          {navigation.main.map((item) => (
            <a key={item.name} href={item.href} className="text-neutral-50 text-lg">
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-neutral-50 hover:text-blue-400 text-xl">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-10" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-sm/6 text-neutral-50">&copy; {new Date().getFullYear()} Paragon Exterior.  All rights reserved.</p>
      </div>
    </footer>
  )
}
