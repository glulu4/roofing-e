import Image from "next/image"
import {FunctionComponent} from "react"
import SecondaryHeader from "./SecondaryHeader"
import {FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaYoutube, } from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";
import clsx from "clsx";


const navigation = {
  services: [
    {name: "Roofing", href: "/roofing"},
    {name: "Siding", href: "/siding"},
    {name: "Windows", href: "/windows"},
    {name: "Gutters", href: "/gutters"},
    {name: "Commercial Roofing", href: "/commercial-roofing"},
  ],
  resources: [
    {name: "Roof Pitch Calculator", href: "/roof-pitch-calculator"},
    {name: "Financing", href: "/financing"},
    {name: "Gallery", href: "/gallery"},
    {name: "Blog", href: "/blog"},
  ],
  company: [
    {name: "About", href: "/about"},
    {name: "Free Estimate", href: "/estimate"},
    {name: "All Areas We Serve", href: "/areas-we-serve"},
    {name: "Sitemap", href: "/sitemap.xml"}, // optional if you want to show it
  ],
}




const socials = [
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
    name: "X",
    href: "https://x.com/ParagonEXTR",
    icon: BsTwitterX,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/paragon-exterior",
    icon: FaLinkedin, // Replace with actual LinkedIn icon if available
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
]
export const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-white border-t-2 w-5/6 mx-auto">
      <div className=" px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              width={200}
              height={500}
              alt="Paragon Exterior Logo"
              src="/images/footer-icon.webp"
              className="object-cover"
            />
            <p className="text-balance text-md/6 text-primaryblue">
              Trusted roofing and siding contractors serving Pennsylvania, New Jersey, and Delaware.
            </p>

            <div className="flex gap-x-6">
              {socials.map((item) => (
                <a key={item.name} href={item.href} className={clsx(
                  "",
                  item.name === "Facebook" && "text-blue-600 hover:text-blue-800",
                  item.name === "Instagram" && "text-pink-600 hover:text-pink-800",
                  item.name === "X" && "text-black hover:text-gray-800",
                  item.name === "TikTok" && "text-black hover:text-gray-800",
                  item.name === "YouTube" && "text-red-600 hover:text-red-800"  
                )}>
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </div>

            <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:col-span-2 xl:mt-0">
              <div>
                <SecondaryHeader className=" font-semibold text-primaryblue">Services</SecondaryHeader>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-md/6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <SecondaryHeader className="font-semibold text-primaryblue">Company</SecondaryHeader>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-md/6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <SecondaryHeader className="text-md/6 font-semibold text-gray-900">Resources</SecondaryHeader>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-md/6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              

            </div>
       
        </div>
      </div>
    </footer>
  )
}
