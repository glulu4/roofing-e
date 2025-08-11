"use client";
import React, {memo, useCallback, useMemo, useState} from "react";
import Image from "next/image";
import {
    Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel";
import {Card, CardContent} from "../ui/card";
import {StarIcon} from "@heroicons/react/20/solid";

type Review = {
    comment: string;
    createdTime: string;
    reviewId: string;
    reviewer: {displayName: string; profilePhotoUrl?: string};
    starRating: string | number;
    updateTime: string;
};

export default function ReviewsCarouselClient({reviews}: {reviews: Review[]}) {
    // expanded state is small; memoize item so others don't re-render
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});
    const onExpand = useCallback((id: string) => {
        setExpanded((s) => (s[id] ? s : {...s, [id]: true}));
    }, []);

    const items = useMemo(
        () => (reviews ?? []).map((r, i) => ({r, i, id: r.reviewId || String(i)})),
        [reviews]
    );

    return (
        <Carousel opts={{align: "start"}}>
            <CarouselContent className="-ml-2">
                {items.map(({r, i, id}) => (
                    <CarouselItem key={id} className="pl-2 md:basis-1/2 lg:basis-1/3">
                        <ReviewCard
                            review={r}
                            isOpen={!!expanded[id]}
                            onExpand={onExpand}
                            id={id}
                            priority={i < 4}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

/* --------- tiny, memoized pieces ---------- */

const ReviewCard = memo(function ReviewCard({
    review, isOpen, onExpand, id, priority,
}: {
    review: Review; isOpen: boolean; onExpand: (id: string) => void; id: string; priority?: boolean;
}) {
    const stars = toStars(review.starRating);
    const time = useMemo(
        () => relativeTime(review.createdTime || review.updateTime),
        [review.createdTime, review.updateTime]
    );

    const text = review.comment?.trim() || "";
    const shouldClamp = !isOpen && text.length > 220;
    const shown = shouldClamp ? text.slice(0, 220) + "…" : text;

    return (
        <Card className="bg-white border border-gray-200 shadow-sm rounded-xl h-full">
            <CardContent className="relative flex flex-col p-5 h-full">
                <div className="flex items-center gap-3">
                    <Avatar
                        src={review.reviewer?.profilePhotoUrl}
                        alt={review.reviewer?.displayName || "Reviewer"}
                        priority={priority}
                    />
                    <div className="min-w-0">
                        <p className="font-semibold leading-tight">
                            {review.reviewer?.displayName || "Google User"}
                        </p>
                        <p className="text-sm text-gray-500">{time}</p>
                    </div>
                </div>

                <p className="mt-4 text-[16px] leading-6 text-gray-800">{shown}</p>
                {shouldClamp && (
                    <button
                        onClick={() => onExpand(id)}
                        className="mt-1 text-sm font-medium text-blue-700 hover:underline w-fit"
                    >
                        Read more
                    </button>
                )}

                <div className="mt-5 flex items-center justify-between">
                    <Stars count={stars} />
                    <div className="h-6 w-6 opacity-90"><GoogleIcon /></div>
                </div>
            </CardContent>
        </Card>
    );
});

function toStars(val: unknown): number {
    const clamp = (n: number) => Math.max(0, Math.min(5, Math.round(n)));
    if (val == null) return 0;
    if (typeof val === "number") return clamp(val);
    if (typeof val === "string") {
        const num = Number(val);
        if (!Number.isNaN(num)) return clamp(num);
        const map: Record<string, number> = {ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5};
        const up = val.trim().toUpperCase();
        return map[up] ?? 0;
    }
    return 0;
}

function relativeTime(iso?: string) {
    const d = iso ? new Date(iso) : null;
    if (!d || Number.isNaN(+d)) return "";
    const s = Math.floor((Date.now() - +d) / 1000);
    const m = Math.floor(s / 60), h = Math.floor(m / 60), dd = Math.floor(h / 24);
    const mo = Math.floor(dd / 30), y = Math.floor(dd / 365);
    if (y > 0) return `${y} year${y > 1 ? "s" : ""} ago`;
    if (mo > 0) return `${mo} month${mo > 1 ? "s" : ""} ago`;
    if (dd > 0) return `${dd} day${dd > 1 ? "s" : ""} ago`;
    if (h > 0) return `${h} hour${h > 1 ? "s" : ""} ago`;
    if (m > 0) return `${m} minute${m > 1 ? "s" : ""} ago`;
    return "just now";
}

function Avatar({src, alt, priority}: {src?: string; alt?: string; priority?: boolean}) {
    if (src) {
        return (
            <Image
                src={src}
                alt={alt || "Avatar"}
                width={44}
                height={44}
                sizes="44px"
                priority={!!priority}
                loading={priority ? "eager" : "lazy"}
                className="rounded-full ring-1 ring-gray-200 object-cover"
            />
        );
    }
    return (
        <div className="h-11 w-11 rounded-full bg-gray-200 grid place-items-center text-gray-600 font-semibold">
            {(alt || "G").charAt(0).toUpperCase()}
        </div>
    );
}

function Stars({count}: {count: number}) {
    return (
        <div className="flex gap-1 text-yellow-400">
            {Array.from({length: count}, (_, idx) => (
                <StarIcon key={idx} aria-hidden="true" className="size-5 flex-none" />
            ))}
        </div>
    );
}

function GoogleIcon() { return (
    <svg viewBox="0 0 24 24" className="h-full w-full">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);
}
