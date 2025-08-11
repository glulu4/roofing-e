
// "use client";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import {cn} from "@/lib/utils";
// import {Menu, ChevronDown, Phone, Mail, MapPin, X} from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import {usePathname} from "next/navigation";
// import {FunctionComponent, useState, useEffect, useRef} from "react";
// import {isMobile} from "react-device-detect";
// import Marquee from "react-fast-marquee";   

// interface MenuItem {
//   name: string;
//   href: string;
//   openInNewTab?: boolean;
// }

// interface DropdownItem {
//   name: string;
//   items: MenuItem[];
// }

// // Define the services dropdown
// const servicesDropdown: DropdownItem = {
//   name: "Services",
//   items: [
//     {name: "Roofing", href: "/roofing"},
//     {name: "Siding", href: "/siding"},
//     {name: "Windows", href: "/windows"},
//     {name: "Gutters", href: "/gutters"},
//     {name: "Commercial", href: "/commercial-roofing"},
//     // { name: "Solar", href: "/solar" },
//   ]
// };

// // Define the navigation items in the order we want them
// const navigationItems: (MenuItem | string)[] = [
//   {name: "Home", href: "/"},
//   {name: "About", href: "/about"},
//   "SERVICES_DROPDOWN", // Placeholder that we'll replace with the dropdown
//   // {name: "Contact", href: "/contact"},
//   {name: "Financing", href: "/financing"},

//   {name: "Gallery", href: "/gallery"},

//   {name: "Blog", href: "/blog"},
//   {name: "Free Estimate", href: "/estimate"},
// ];

// export const Navigation: FunctionComponent = () => {
//   const pathname = usePathname();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const [isSheetOpen, setIsSheetOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="z-50">
//       {/* Desktop Navigation */}
//       <div className="hidden lg:flex items-center space-x-8">
//         {navigationItems.map((item, index) => {
//           // If this is our services dropdown placeholder
//           if (item === "SERVICES_DROPDOWN") {
//             return (
//               <div key="services-dropdown" className="relative" ref={dropdownRef}>
//                 <button
//                   className={cn(
//                     "flex items-center hover:text-primaryblue text-2xl font-normal transition-colors duration-200",
//                     "focus:outline-none focus:text-blue-600"
//                   )}
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                   onKeyDown={(e) => {
//                     if (e.key === 'Enter' || e.key === ' ') {
//                       setDropdownOpen(!dropdownOpen);
//                     }
//                   }}
//                 >
//                   {servicesDropdown.name}
//                   <ChevronDown
//                     className={cn(
//                       "ml-1 h-4 w-4 transition-transform duration-200",
//                       dropdownOpen && "rotate-180"
//                     )}
//                   />
//                 </button>

//                 {/* Dropdown Menu */}
//                 <div className={cn(
//                   "absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg py-2 min-w-48 border border-gray-100",
//                   "transform transition-all duration-200 origin-top",
//                   dropdownOpen
//                     ? "opacity-100 scale-100 translate-y-0"
//                     : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
//                 )}>
//                   {servicesDropdown.items.map((subItem) => (
//                     <Link
//                       key={subItem.href}
//                       href={subItem.href}
//                       className={cn(
//                         "block px-6 py-3 hover:bg-blue-50 text-2xl transition-colors duration-150",
//                         "hover:text-primarybl",
//                         pathname === subItem.href && "font-semibold text-primaryblue bg-blue-50"
//                       )}
//                       onClick={() => setDropdownOpen(false)}
//                     >
//                       {subItem.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             );
//           }

//           // For normal menu items
//           const menuItem = item as MenuItem;
//           return (
//             <div key={menuItem.href}>
//               <Link
//                 href={menuItem.href}
//                 target={menuItem.openInNewTab ? "_blank" : "_self"}
//                 className={cn(
//                   "hover:text-primaryblue transition-colors text-2xl duration-200 font-normal",
//                   pathname === menuItem.href && "font-semibold text-primaryblue",
//                   menuItem.name === "Free Estimate" &&
//                   "bg-amber-500 hover:bg-amber-600 text-primaryblue px-6 py-4 text-2xl  font-normal shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
//                 )}
//               >
//                 {menuItem.name}
//               </Link>
//             </div>
//           );
//         })}
//       </div>

//       {/* Mobile Navigation */}
//       <div className="lg:hidden">
//         <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
//           <SheetTrigger asChild>
//             <button
//               className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
//               aria-label="Open menu"
//             >
//               <Menu size="24" />
//             </button>
//           </SheetTrigger>
//           <SheetContent
//             side="right"
            
            
//             className="[&>button]:hidden bg-primaryblue overflow-y-auto text-white border-none shadow-2xl w-full sm:w-80"
//           >
//             <SheetHeader className="text-left border-b border-white/20 pb-6 mb-6">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-2xl font-bold">Menu</h2>
//                 <button
//                   onClick={() => setIsSheetOpen(false)}
//                   className="p-2 hover:bg-white/20 rounded-md transition-colors duration-200"
//                   aria-label="Close menu"
//                 >
//                   <X size="20" />
//                 </button>
//               </div>
//             </SheetHeader>

//             <SheetDescription asChild>
//               <nav className="space-y-2 text-white">
//                 {/* Home */}

//                 {navigationItems.map((item, index) => {

//                   if (item === "SERVICES_DROPDOWN"){
//                     return (
//                       <div className="py-2" key={index}>
//                         <button
//                           onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                           className={cn(
//                             "flex items-center justify-between w-full py-3 px-4 rounded-lg text-lg transition-all duration-200",
//                             "hover:bg-white/20",
//                             mobileServicesOpen && "bg-white/20"
//                           )}
//                         >
//                           <span>Services</span>
//                           <ChevronDown
//                             className={cn(
//                               "h-4 w-4 transition-transform duration-200",
//                               mobileServicesOpen && "rotate-180"
//                             )}
//                           />
//                         </button>

//                         <div className={cn(
//                           "overflow-scroll transition-all duration-300 ease-in-out",
//                           mobileServicesOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
//                         )}>
//                           <div className="pl-6 pt-2 space-y-1">
//                             {servicesDropdown.items.map((item) => (
//                               <Link
//                                 key={item.href}
//                                 href={item.href}
//                                 className={cn(
//                                   "block py-2 px-4 rounded-md text-base transition-all duration-200",
//                                   "hover:bg-white/10 hover:translate-x-1",
//                                   pathname === item.href && "font-semibold bg-white/10"
//                                 )}
//                                 onClick={() => setIsSheetOpen(false)}
//                               >
//                                 {item.name}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     )
//                   }
//                   else{
                    

//                     const menuItem = item as MenuItem;


//                     if (menuItem.name === "Free Estimate") {
//                       return (
//                         <div className="pt-4" key={index}>
//                           <Link
//                             href="/estimate"
//                             className={cn(
//                               "block py-4 px-6 rounded-lg text-lg font-semibold transition-all duration-200",
//                               "bg-amber-500 hover:bg-amber-400 text-center",
//                               "hover:scale-105 shadow-lg",
//                               pathname === "/estimate" && "bg-amber-400"
//                             )}
//                             onClick={() => setIsSheetOpen(false)}
//                           >
//                             Free Estimate
//                           </Link>
//                         </div>
//                       )
//                     }

//                     return (
//                       <div className="pt-2" key={index}>
//                       <Link
//                         key={menuItem.href}
//                         href={menuItem.href}
//                         target={menuItem.openInNewTab ? "_blank" : "_self"}
//                         className={cn(
//                           "block py-3 px-4 rounded-lg text-lg transition-all duration-200",
//                           "hover:bg-white/20 hover:translate-x-2",
//                           pathname === menuItem.href && "font-semibold bg-white/20"
//                         )}
//                         onClick={() => setIsSheetOpen(false)}
//                       >
//                         {menuItem.name}
//                       </Link>
//                       </div>
//                     );
//                   }
//                 })}

//                 {/* Contact Info Section */}
//                 <div className="pt-8 mt-8 border-t border-white/20">
//                   <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
//                   <div className="space-y-3">
//                     <a
//                       href="tel:+12157997663"
//                       className="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
//                     >
//                       <Phone size="18" />
//                       <span>(215) 799-7663</span>
//                     </a>
//                     <a
//                       href="mailto:info@paragonexterior.com"
//                       className="flex items-center space-x-3 py-2 px-4 rounded-lg hover:bg-white/10 transition-colors duration-200"
//                     >
//                       <Mail size="18" />
//                       <span>info@paragonexterior.com</span>
//                     </a>
//                     <div className="flex items-center space-x-3 py-2 px-4">
//                       <MapPin size="18" />
//                       <span>Feasterville-Trevose, PA</span>
//                     </div>
//                   </div>
//                 </div>
//               </nav>
//             </SheetDescription>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </nav>
//   );
// };

// export const Header: FunctionComponent = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={cn(
//       "sticky top-0 z-50 transition-all duration-300",
//       isScrolled
//         ? "bg-white backdrop-blur-md shadow-lg"
//         : "bg-white"
//     )}>
//       <PromoBanner />
//       <div className="flex items-center justify-between py-4 md:py-6  w-full px-8">
//         <meta name="theme-color" content="#152D47" />
        
//         <Link
//           href="/"
//           className="transform hover:scale-105 transition-transform duration-200"
//         >
//           <Image
//             src="/images/header.png"
//             alt="Company Logo"
//             width={150}
//             height={75}
//             className="object-contain w-32 sm:w-32"
//             priority
//           />
//         </Link>
//         <Navigation />
//       </div>
//     </header>
//   );
// };




// function PromoBanner() {
//   return (
//     <div className="w-full bg-primaryblue h-8 sm:h-12 flex items-center">
// =
//     {isMobile ? (
//         <Marquee
//           className="block sm:hidden w-full"
//           speed={20}           // tweak to taste
//           pauseOnHover
//           gradient={false}     // no fade on the edges
//         >
//           <span className="mx-4 text-white text-sm">
//             Get 10% off your full roof or siding replacement you mention this banner!
//           </span>
//           <span className="mx-4 text-white font-medium text-sm">
//             Free Estimates Available — Call or Text&nbsp;
//             <a href="tel:+12157997663" className="underline">+1 (215) 799-7663</a>
//           </span>
//         </Marquee>
//     ) : (
//           <div className="w-full bg-primaryblue h-8 sm:h-12 flex flex-row items-center justify-around">

//             <p className="text-white text-center text-sm md:text-lg">
//               Get 10% off your full roof or siding replacement you mention this banner!
//             </p>

//             <p className="text-white font-medium text-center text-sm md:text-lg">
//               Free Estimates Available Call or Text <a href="tel:+12157997663" className="underline">+1 (215) 799-7663</a>
//             </p>

//           </div>
//     )}
//     </div>
//   );
// }

"use client";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {cn} from "@/lib/utils";
import {Menu, ChevronDown, X} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FunctionComponent, useState, useEffect, useRef} from "react";
import {isMobile} from "react-device-detect";
import Marquee from "react-fast-marquee";

interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}

interface DropdownItem {
  name: string;
  items: MenuItem[];
}

const servicesDropdown: DropdownItem = {
  name: "Services",
  items: [
    {name: "Roofing", href: "/roofing"},
    {name: "Siding", href: "/siding"},
    {name: "Windows", href: "/windows"},
    {name: "Gutters", href: "/gutters"},
    {name: "Commercial", href: "/commercial-roofing"},
  ]
};

const navigationItems: (MenuItem | string)[] = [
  {name: "Home", href: "/"},
  {name: "About", href: "/about"},
  "SERVICES_DROPDOWN",
  {name: "Financing", href: "/financing"},
  {name: "Gallery", href: "/gallery"},
  {name: "Blog", href: "/blog"},
  {name: "Free Estimate", href: "/estimate"},
];

const Navigation: FunctionComponent = () => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="z-50">
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center space-x-8 list-none">
        {navigationItems.map((item, index) => {
          if (item === "SERVICES_DROPDOWN") {
            return (
              <li key="services-dropdown" className="relative" ref={dropdownRef}>
                <button
                  className={cn(
                    "flex items-center hover:text-primaryblue text-2xl font-normal transition-colors duration-200",
                    "focus:outline-none focus:text-blue-600"
                  )}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {servicesDropdown.name}
                  <ChevronDown
                    className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-200",
                      dropdownOpen && "rotate-180"
                    )}
                  />
                </button>

                {dropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg py-2 min-w-48 border border-gray-100">
                    {servicesDropdown.items.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className={cn(
                            "block px-6 py-3 hover:bg-blue-50 text-2xl transition-colors duration-150",
                            pathname === subItem.href && "font-semibold text-primaryblue bg-blue-50"
                          )}
                          onClick={() => setDropdownOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          }

          const menuItem = item as MenuItem;
          return (
            <li key={menuItem.href}>
              <Link
                href={menuItem.href}
                target={menuItem.openInNewTab ? "_blank" : "_self"}
                className={cn(
                  "hover:text-primaryblue transition-colors text-2xl duration-200 font-normal",
                  pathname === menuItem.href && "font-semibold text-primaryblue",
                  menuItem.name === "Free Estimate" &&
                  "bg-amber-500 hover:bg-amber-600 text-primaryblue px-6 py-4 text-2xl font-normal shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                )}
              >
                {menuItem.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Navigation - Simplified */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
            aria-label="Open menu"
          >
            <Menu size="24" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          
          className="[&>button]:hidden bg-primaryblue text-white overflow-y-auto border-none shadow-2xl w-full sm:w-80"
        >
          <header className="flex items-center justify-between pb-6 mb-6 border-b border-white/20">
            <h2 className="text-2xl font-bold">Menu</h2>
            <button
              onClick={() => setIsSheetOpen(false)}
              className="p-2 hover:bg-white/20 rounded-md transition-colors duration-200"
              aria-label="Close menu"
            >
              <X size="20" />
            </button>
          </header>

          <nav>
            <ul className="space-y-2 text-white list-none">
              {navigationItems.map((item, index) => {
                if (item === "SERVICES_DROPDOWN") {
                  return (
                    <li key={index}>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className={cn(
                          "flex items-center justify-between w-full py-3 px-4 rounded-lg text-lg transition-all duration-200",
                          "hover:bg-white/20",
                          mobileServicesOpen && "bg-white/20"
                        )}
                        aria-expanded={mobileServicesOpen}
                      >
                        <span>Services</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            mobileServicesOpen && "rotate-180"
                          )}
                        />
                      </button>

                      {mobileServicesOpen && (
                        <ul className="pl-6 pt-2 space-y-1">
                          {servicesDropdown.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className={cn(
                                  "block py-2 px-4 rounded-md text-base transition-all duration-200",
                                  "hover:bg-white/10 hover:translate-x-1",
                                  pathname === item.href && "font-semibold bg-white/10"
                                )}
                                onClick={() => setIsSheetOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                const menuItem = item as MenuItem;
                return (
                  <li key={index} className={menuItem.name === "Free Estimate" ? "pt-4" : "pt-2"}>
                    <Link
                      href={menuItem.href}
                      target={menuItem.openInNewTab ? "_blank" : "_self"}
                      className={cn(
                        menuItem.name === "Free Estimate"
                          ? "block py-4 px-6 rounded-lg text-lg font-semibold bg-amber-500 hover:bg-amber-400 text-center hover:scale-105 shadow-lg transition-all duration-200"
                          : "block py-3 px-4 rounded-lg text-lg transition-all duration-200 hover:bg-white/20 hover:translate-x-2",
                        pathname === menuItem.href && "font-semibold bg-white/20"
                      )}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {menuItem.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Contact Info - Simplified */}
            <address className="pt-8 mt-8 border-t border-white/20 not-italic">
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <a href="tel:+12157997663" className="block py-2 hover:underline">(215) 799-7663</a>
              <a href="mailto:info@paragonexterior.com" className="block py-2 hover:underline">info@paragonexterior.com</a>
              <p className="py-2">Feasterville-Trevose, PA</p>
            </address>
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

function PromoBanner() {
  const promoText = "Get 10% off your full roof or siding replacement when you mention this banner!";
  const contactText = "Free Estimates Available — Call or Text ";

  return (
    <aside className="w-full bg-primaryblue h-8 sm:h-12 flex items-center text-white">
      {isMobile ? (
        <Marquee speed={20} pauseOnHover gradient={false}>
          <span className="mx-4 text-sm">{promoText}</span>
          <span className="mx-4 text-sm font-medium">
            {contactText}
            <a href="tel:+12157997663" className="underline">+1 (215) 799-7663</a>
          </span>
        </Marquee>
      ) : (
        <>
          <p className="flex-1 text-center text-sm md:text-lg">{promoText}</p>
          <p className="flex-1 text-center text-sm md:text-lg font-medium">
            {contactText}
            <a href="tel:+12157997663" className="underline">+1 (215) 799-7663</a>
          </p>
        </>
      )}
    </aside>
  );
}

export const Header: FunctionComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300 bg-white",
      isScrolled && "backdrop-blur-md shadow-lg"
    )}>
      <PromoBanner />
      <div className="flex items-center justify-between py-4 md:py-6 px-8">
        <Link href="/" className="transform hover:scale-105 transition-transform duration-200">
          <Image
            src="/images/header.png"
            alt="Paragon Exterior"
            width={150}
            height={75}
            className="object-contain w-32 sm:w-32"
            priority
          />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};