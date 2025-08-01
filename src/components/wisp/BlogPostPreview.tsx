"use client";
import {cn} from "@/lib/utils";
import {GetPostsResult} from "@/lib/wisp";
import {formatDate} from "date-fns";
import Image from "next/image";
import Link from "next/link";
import {FunctionComponent} from "react";
import HeaderText from "../HeaderText";

export const BlogPostPreview: FunctionComponent<{
    post: GetPostsResult["posts"][0];
}> = ({post}) => {
    return (
        <div className="break-words">
            <Link href={`/blog/${post.slug}`}>
                <div className="aspect-[16/9] relative ">
                    <Image
                        alt={post.title}
                        className="object-cover rounded-md"
                        src={post.image || "/images/placeholder.webp"}
                        fill
                    />
                </div>
            </Link>
            <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
                <HeaderText variant="small">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </HeaderText>
                <div className="prose lg:prose-lg text-950 italic tracking-tighter text-muted-foreground">
                    {formatDate(post.publishedAt || post.updatedAt, "dd MMMM yyyy")}
                </div>
                <div className="prose lg:prose-lg text-primary leading-relaxed md:text-lg line-clamp-4">
                    {post.description}
                </div>
                <div className="text-sm text-muted-foreground">
                    {post.tags.map((tag) => (
                        <div key={tag.id} className="mr-2 inline-block">
                            {/* <Link href={`/tag/${tag.name}`}>#{tag.name}</Link> */}
                            <p>#{tag.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const BlogPostsPreview: FunctionComponent<{
    posts: GetPostsResult["posts"];
    className?: string;
}> = ({posts, className}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-2 md:my-16 my-8",
                className
            )}
        >
            {posts.map((post) => (
                <BlogPostPreview key={post.id} post={post} />
            ))}
        </div>
    );
};
