'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { cn } from "@/lib/utils";

const DEFAULT_LABELS: Record<string, string> = {
  "metal-roofing": "Metal Roofing",
};

type BreadcrumbsProps = {
  baseUrl: string;
  rootLabel?: string;
  labelMap?: Record<string, string>;
  className?: string;
};

export default function Breadcrumbs({
  baseUrl,
  rootLabel = "Home",
  labelMap,
  className,
}: BreadcrumbsProps) {
  const pathname = usePathname();

  if (!pathname || pathname === "/") {
    return null;
  }

  const segments = pathname
    .split("/")
    .filter((seg) => seg && !seg.startsWith("(") && seg !== "api");

  const crumbs = [
    { href: "/", label: rootLabel },
    ...segments.map((segment, idx) => {
      const href = "/" + segments.slice(0, idx + 1).join("/");
      const label =
        labelMap?.[segment] ||
        DEFAULT_LABELS[segment] ||
        segment
          .split("-")
          .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
          .join(" ");
      return { href, label };
    }),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: `${baseUrl}${crumb.href}`,
    })),
  };

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className={cn("flex flex-wrap items-center gap-x-2 text-sm", className)}
      >
        <ol className="flex flex-wrap items-center gap-x-2">
          {crumbs.map((crumb, idx) => {
            const isLast = idx === crumbs.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-x-2">
                {isLast ? (
                  <span aria-current="page">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href}>{crumb.label}</Link>
                )}
                {!isLast && <span>›</span>}
              </li>
            );
          })}
        </ol>
      </nav>
      <Script
        id="breadcrumbs-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
