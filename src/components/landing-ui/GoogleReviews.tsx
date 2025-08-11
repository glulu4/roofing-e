"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import HeaderText from "../HeaderText";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {Card, CardContent} from "../ui/card";
import {StarIcon} from "@heroicons/react/20/solid";
import {set} from "date-fns";

type Review = {
  comment: string;
  createdTime: string; // ISO
  reviewId: string;
  reviewer: {
    displayName: string;
    profilePhotoUrl?: string;
  };
  starRating: string; // "FIVE" | "FOUR" | "3" | etc.
  updateTime: string;
};

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://featurable.com/api/v1/widgets/1267cf54-a64c-403f-8fed-1c9d518c78fa",
          {cache: "no-store"}
        );
        if (!res.ok) throw new Error("Failed to fetch Google reviews");
        const data = await res.json();
        setReviews(data.reviews || []);
      } catch (e) {
        console.error(e);
      }
      finally {
        setLoading(false);
      }
    })();
  }, []);


  if (loading) {
    return (
      <div className="px-6 mx-auto sm:w-5/6 overflow-hidden">
        <HeaderText className="text-center py-12 mx-auto w-5/6">
          Hear From Our Happy Home Owners
        </HeaderText>
        <p className="text-center text-gray-500">Loading reviews...</p>
      </div>
    );
  }

  return (
    <div className="px-6 mx-auto sm:w-5/6 overflow-hidden sm:overflow-visible">
      <HeaderText className="text-center py-12 mx-auto w-5/6">
        Hear From Our Happy Home Owners
      </HeaderText>

      <Carousel className="">
        <CarouselContent className="-ml-2">
          {reviews.map((review, i) => {
            const id = review.reviewId || String(i);
            const isOpen = !!expanded[id];
            const stars = Number(review.starRating);
            const text = review.comment?.trim() || "";
            const shouldClamp = !isOpen && text.length > 220;
            const shown = shouldClamp ? text.slice(0, 220) + "…" : text;

            return (
              <CarouselItem
                key={id}
                className="pl-2 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="bg-white border border-gray-200 shadow-sm rounded-xl">
                  <CardContent className="relative flex flex-col p-5 h-full">
                    {/* Top: Avatar + name + time */}
                    <div className="flex items-center gap-3">
                      <Avatar
                        src={review.reviewer?.profilePhotoUrl}
                        alt={review.reviewer?.displayName || "Reviewer"}
                      />
                      <div className="min-w-0">
                        <p className="font-semibold leading-tight">
                          {review.reviewer?.displayName || "Google User"}
                        </p>
                        <p className="text-md text-gray-500">
                          {relativeTime(review.createdTime || review.updateTime)}
                        </p>
                      </div>
                    </div>

                    {/* Body: comment */}
                    <p className="mt-4 text-[16px] leading-6 text-gray-800">
                      {shown}
                    </p>
                    {shouldClamp && (
                      <button
                        onClick={() =>
                          setExpanded((s) => ({...s, [id]: true}))
                        }
                        className="mt-1 text-sm font-medium text-blue-700 hover:underline w-fit"
                      >
                        Read more
                      </button>
                    )}

                    {/* Bottom row: stars + Google icon */}
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex gap-1 text-yellow-400">
                        {Array.from({length: stars}, (_, idx) => (
                          <StarIcon  aria-hidden="true" className="size-5 flex-none" />

                        ))}
                      </div>
                      <div className="h-6 w-6 opacity-90">
                        <GoogleIcon />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}



function relativeTime(iso?: string) {
  try {
    const d = new Date(iso || "");
    const diff = Date.now() - d.getTime();
    const sec = Math.floor(diff / 1000);
    const min = Math.floor(sec / 60);
    const hr = Math.floor(min / 60);
    const day = Math.floor(hr / 24);
    const mo = Math.floor(day / 30);
    const yr = Math.floor(day / 365);
    if (yr > 0) return `${yr} year${yr > 1 ? "s" : ""} ago`;
    if (mo > 0) return `${mo} month${mo > 1 ? "s" : ""} ago`;
    if (day > 0) return `${day} day${day > 1 ? "s" : ""} ago`;
    if (hr > 0) return `${hr} hour${hr > 1 ? "s" : ""} ago`;
    if (min > 0) return `${min} minute${min > 1 ? "s" : ""} ago`;
    return "just now";
  } catch {
    return "";
  }
}

function Avatar({
  src,
  alt,
}: {
  src?: string;
  alt?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt || "Avatar"}
        width={44}
        height={44}
        className="rounded-full ring-1 ring-gray-200 object-cover"
      />
    );
  }
  // fallback circle with initial
  return (
    <div className="h-11 w-11 rounded-full bg-gray-200 grid place-items-center text-gray-600 font-semibold">
      {(alt || "G").charAt(0).toUpperCase()}
    </div>
  );
}



function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  );
}
