"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { config } from "@/config";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}
const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {name: "Roofing", href: "/roofing"},
  {name: "Solar", href: "/solar"},
  {name: "Contact", href: "/contact"},
  {name: "Free Estimate", href: "/estimate"},



];
export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <nav className="z-50">
      <div className="hidden md:flex items-center px-8">
        {menuItems.map((item) => (
          <div key={item.href} className="ml-4 md:ml-8">
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-gray-900",
                "text-2xl",
                pathname === item.href && "font-semibold",
                item.name === "Free Estimate" && "bg-amber-500 p-4",
              )}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
      {/* mobile */}
      <div className="md:hidden">
        <Sheet >
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent className="bg-primaryblue text-white border-white/30 shadow-sm pt-10">
            <SheetHeader>
              <SheetDescription>
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2",
                      "text-xl text-white",
                      pathname === item.href && "font-semibold",
                      
                    )}
                  >
                    {item.name}
                  </a>
                ))}
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
          // className="object-contain"
        />
      </Link>
      <Navigation />
    </section>
  );
};
