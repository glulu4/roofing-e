// // "use client";
// // import {
// //   Sheet,
// //   SheetContent,
// //   SheetDescription,
// //   SheetHeader,
// //   SheetTrigger,
// // } from "@/components/ui/sheet";
// // import { cn } from "@/lib/utils";
// // import { Menu } from "lucide-react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { FunctionComponent } from "react";
// // interface MenuItem {
// //   name: string;
// //   href: string;
// //   openInNewTab?: boolean;
// // }
// // const menuItems: MenuItem[] = [
  
// //   { name: "Home", href: "/" },
// //   { name: "About", href: "/about" },

// //   // want these to be under services dropdown
// //   {name: "Roofing", href: "/roofing"},
// //   {name: "Siding", href: "/siding"},
// //   {name: "Solar", href: "/solar"},

// //   {name: "Contact", href: "/contact"},
// //   {name: "Free Estimate", href: "/estimate"},

// // ];
// // export const Navigation: FunctionComponent = () => {
// //   const pathname = usePathname();

// //   return (
// //     <nav className="z-50">
// //       <div className="hidden md:flex items-center px-8">
// //         {menuItems.map((item) => (
// //           <div key={item.href} className="ml-4 md:ml-8">
// //             <a
// //               href={item.href}
// //               target={item.openInNewTab ? "_blank" : "_self"}
// //               className={cn(
// //                 "hover:text-gray-900",
// //                 "text-2xl",
// //                 pathname === item.href && "font-semibold",
// //                 item.name === "Free Estimate" && "bg-amber-500 p-4",
// //               )}
// //             >
// //               {item.name}
// //             </a>
// //           </div>
// //         ))}
// //       </div>
// //       {/* mobile */}
// //       <div className="md:hidden">
// //         <Sheet >
// //           <SheetTrigger>
// //             <Menu size="24" />
// //           </SheetTrigger>
// //           <SheetContent className="bg-primaryblue text-white border-white/30 shadow-sm pt-10">
// //             <SheetHeader>
// //               <SheetDescription>
// //                 {menuItems.map((item) => (
// //                   <a
// //                     key={item.href}
// //                     href={item.href}
// //                     target={item.openInNewTab ? "_blank" : "_self"}
// //                     className={cn(
// //                       "block py-2",
// //                       "text-xl text-white",
// //                       pathname === item.href && "font-semibold",
                      
// //                     )}
// //                   >
// //                     {item.name}
// //                   </a>
// //                 ))}
// //               </SheetDescription>
// //             </SheetHeader>
// //           </SheetContent>
// //         </Sheet>
// //       </div>
// //     </nav>
// //   );
// // };

// // export const Header: FunctionComponent = () => {
// //   return (
// //     <section className="flex items-center justify-between mt-8 md:my-6 mb-8 px-4 sm:px-6 md:px-10 z-50">
// //       <Link href="/">
// //         <Image
// //           src="/images/header.png"
// //           alt="Roofing Icon"
// //           objectFit="contain"
// //           width={150}
// //           height={75}
// //           // className="object-contain"
// //         />
// //       </Link>
// //       <Navigation />
// //     </section>
// //   );
// // };

// "use client";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import {cn} from "@/lib/utils";
// import {Menu, ChevronDown} from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import {usePathname} from "next/navigation";
// import {FunctionComponent, useState} from "react";

// interface MenuItem {
//   name: string;
//   href: string;
//   openInNewTab?: boolean;
// }

// interface DropdownItem {
//   name: string;
//   items: MenuItem[];
  
// }

// const navigationItems = [
//   {name: "Home", href: "/"},
//   {name: "About", href: "/about"},
//   {name: "Contact", href: "/contact"},
//   {name: "Free Estimate", href: "/estimate"},
// ];

// const servicesDropdown: DropdownItem = {
//   name: "Services",
//   items: [
//     {name: "Roofing", href: "/roofing"},
//     {name: "Siding", href: "/siding"},
//     {name: "Solar", href: "/solar"},
//   ]
// };

// export const Navigation: FunctionComponent = () => {
//   const pathname = usePathname();
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="z-50">
//       <div className="hidden md:flex items-center px-8">
//         {navigationItems.map((item) => (
//           <div key={item.href} className="ml-4 md:ml-8">
//             <a
//               href={item.href}
//               target={item.openInNewTab ? "_blank" : "_self"}
//               className={cn(
//                 "hover:text-gray-900",
//                 "text-2xl",
//                 pathname === item.href && "font-semibold",
//                 item.name === "Free Estimate" && "bg-amber-500 p-4",
//               )}
//             >
//               {item.name}
//             </a>
//           </div>
//         ))}

//         {/* Services Dropdown */}
//         <div className="ml-4 md:ml-8 relative">
//           <button
//             className="flex items-center hover:text-gray-900 text-2xl"
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
//           >
//             {servicesDropdown.name}
//             <ChevronDown className="ml-1 h-4 w-4" />
//           </button>

//           {dropdownOpen && (
//             <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-40">
//               {servicesDropdown.items.map((item) => (
//                 <a
//                   key={item.href}
//                   href={item.href}
//                   className={cn(
//                     "block px-4 py-2 hover:bg-gray-100",
//                     pathname === item.href && "font-semibold"
//                   )}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* mobile */}
//       <div className="md:hidden">
//         <Sheet>
//           <SheetTrigger>
//             <Menu size="24" />
//           </SheetTrigger>
//           <SheetContent className="bg-primaryblue text-white border-white/30 shadow-sm pt-10">
//             <SheetHeader>
//               <SheetDescription>
//                 {navigationItems.map((item) => (
//                   <a
//                     key={item.href}
//                     href={item.href}
//                     target={item.openInNewTab ? "_blank" : "_self"}
//                     className={cn(
//                       "block py-2",
//                       "text-xl text-white",
//                       pathname === item.href && "font-semibold",
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}

//                 {/* Services section in mobile menu */}
//                 <div className="py-2">
//                   <p className="text-xl text-white mb-1">{servicesDropdown.name}</p>
//                   <div className="pl-4">
//                     {servicesDropdown.items.map((item) => (
//                       <a
//                         key={item.href}
//                         href={item.href}
//                         className={cn(
//                           "block py-1",
//                           "text-lg text-white",
//                           pathname === item.href && "font-semibold",
//                         )}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </SheetDescription>
//             </SheetHeader>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </nav>
//   );
// };

// export const Header: FunctionComponent = () => {
//   return (
//     <section className="flex items-center justify-between mt-8 md:my-6 mb-8 px-4 sm:px-6 md:px-10 z-50">
//       <Link href="/">
//         <Image
//           src="/images/header.png"
//           alt="Roofing Icon"
//           objectFit="contain"
//           width={150}
//           height={75}
//         />
//       </Link>
//       <Navigation />
//     </section>
//   );
// };

"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {cn} from "@/lib/utils";
import {Menu, ChevronDown} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FunctionComponent, useState} from "react";

interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}

interface DropdownItem {
  name: string;
  items: MenuItem[];
}

// Define the services dropdown
const servicesDropdown: DropdownItem = {
  name: "Services",
  items: [
    {name: "Roofing", href: "/roofing"},
    {name: "Siding", href: "/siding"},
    {name: "Solar", href: "/solar"},
  ]
};

// Define the navigation items in the order we want them
const navigationItems: (MenuItem | string)[] = [
  {name: "Home", href: "/"},
  {name: "About", href: "/about"},
  "SERVICES_DROPDOWN", // Placeholder that we'll replace with the dropdown
  {name: "Contact", href: "/contact"},
  {name:"Blog", href:"/blog"},
  {name: "Free Estimate", href: "/estimate"},
];

export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="z-50">
      <div className="hidden md:flex items-center px-8">
        {navigationItems.map((item, index) => {
          // If this is our services dropdown placeholder
          if (item === "SERVICES_DROPDOWN") {
            return (
              <div key="services-dropdown" className="ml-4 md:ml-8 relative">
                <button
                  className="flex items-center hover:text-gray-900 text-2xl"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                >
                  {servicesDropdown.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-40">
                    {servicesDropdown.items.map((subItem) => (
                      <a
                        key={subItem.href}
                        href={subItem.href}
                        className={cn(
                          "block px-6 py-4 hover:bg-gray-100 text-2xl",
                          pathname === subItem.href && "font-semibold"
                        )}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          // For normal menu items
          return (
            <div key={(item as MenuItem).href} className="ml-4 md:ml-8">
              <a
                href={(item as MenuItem).href}
                target={(item as MenuItem).openInNewTab ? "_blank" : "_self"}
                className={cn(
                  "hover:text-gray-900",
                  "text-2xl",
                  pathname === (item as MenuItem).href && "font-semibold",
                  (item as MenuItem).name === "Free Estimate" && "bg-amber-500 p-4",
                )}
              >
                {(item as MenuItem).name}
              </a>
            </div>
          );
        })}
      </div>

      {/* mobile */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent className="bg-primaryblue text-white border-white/30 shadow-sm pt-10">
            <SheetHeader>
              <SheetDescription>
                {/* This is a simplified approach for mobile - we can list all items in the correct order */}
                <a href="/" className={cn("block py-2", "text-xl text-white", pathname === "/" && "font-semibold")}>
                  Home
                </a>
                <a href="/about" className={cn("block py-2", "text-xl text-white", pathname === "/about" && "font-semibold")}>
                  About
                </a>
                <a href="/blog" className={cn("block py-2", "text-xl text-white", pathname === "/blog" && "font-semibold")}>
                  Blog
                </a>

                {/* Services section in mobile menu */}
                <div className="py-2">
                  <p className="text-xl text-white mb-1">{servicesDropdown.name}</p>
                  <div className="pl-4">
                    {servicesDropdown.items.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block py-1",
                          "text-lg text-white",
                          pathname === item.href && "font-semibold",
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <a href="/contact" className={cn("block py-2", "text-xl text-white", pathname === "/contact" && "font-semibold")}>
                  Contact
                </a>
                <a href="/estimate" className={cn("block py-2", "text-xl text-white", pathname === "/estimate" && "font-semibold")}>
                  Free Estimate
                </a>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export const Header: FunctionComponent = () => {
  return (
    <section className="flex items-center justify-between mt-8 md:my-6 mb-8 px-4 sm:px-6 md:px-10 z-50">
      <Link href="/">
        <Image
          src="/images/header.png"
          alt="Roofing Icon"
          objectFit="contain"
          width={150}
          height={75}
        />
      </Link>
      <Navigation />
    </section>
  );
};