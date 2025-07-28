import Image from "next/image"
import {FunctionComponent} from "react"
import SecondaryHeader from "./SecondaryHeader"
import {FaFacebookF, FaInstagram, FaTiktok, FaYoutube, } from "react-icons/fa";
import {BsTwitterX} from "react-icons/bs";
import clsx from "clsx";


const navigation = {
  services: [
    {name: "Roofing", href: "/roofing"},
    {name: "Siding", href: "/siding"},
    {name: "Windows", href: "/windows"},
    {name: "Gutters", href: "/gutters"},
    {name: "Commercial", href: "/commercial-roofing"},
  ],
  support: [
    {name: 'Submit ticket', href: '#'},
    {name: 'Documentation', href: '#'},
    {name: 'Guides', href: '#'},
  ],
  company: [
    {name: 'About', href: '/about'},
    {name: 'Blog', href: '/blog'},
    {name: 'Free Estimate', href: "/estimate"},
    {name: 'Financing', href: '/financing'},
    {name: 'Gallery', href: '/gallery'},
    {name: 'Roof Pitch Calculator', href: '/roof-pitch-calculator'},

  ],
  service: [
    {name: 'All Areas we Serve', href: "/areas-we-serve"},
    {name: 'Philadelphia', href: '/areas/pennsylvania/trusted-roofing-contractor-philadelphia'},
    {name: 'Bensalem', href: '#'},
    {name: 'Levittown', href: '#'},
    {name: 'Langhorne', href: '#'},
    {name: 'Feasterville', href: '#'},
    {name: 'Doylestown', href: '#'},
    {name: 'Newtown', href: '#'},

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
              src="/images/header.png"
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
                <SecondaryHeader className="text-md/6 font-semibold text-gray-900">Service Areas</SecondaryHeader>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.service.map((item) => (
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
