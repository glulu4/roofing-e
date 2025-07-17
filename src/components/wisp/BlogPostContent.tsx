"use client";
import {GetPostResult} from "@/lib/wisp";
import Link from "next/link";
import sanitize from "sanitize-html";
import {useEffect, useState} from "react";

import {ContentWithCustomComponents} from "@wisp-cms/react-custom-component";
import {isMobile} from "react-device-detect";
import RoofOptionsSection, {RoofOptionsSectionBlog} from "../RoofOptionsSection";
import HeaderText from "../HeaderText";

export const PostContent = ({content}: {content: string}) => {
    return (
        <div
            className="blog-content mx-auto"
            dangerouslySetInnerHTML={{
                __html: sanitize(content, {
                    allowedTags: [
                        "b",
                        "i",
                        "em",
                        "strong",
                        "a",
                        "img",
                        "h1",
                        "h2",
                        "h3",
                        "code",
                        "pre",
                        "p",
                        "li",
                        "ul",
                        "ol",
                        "blockquote",
                        "td",
                        "th",
                        "table",
                        "tr",
                        "tbody",
                        "thead",
                        "tfoot",
                        "small",
                    ],
                    allowedAttributes: {
                        "*": ["style"],
                        a: ["href", "name", "target"],
                        img: [
                            "src",
                            "srcset",
                            "alt",
                            "title",
                            "width",
                            "height",
                            "loading",
                        ],
                    },
                }),
            }}
        ></div>
    );
};

export const BlogPostContent = ({post}: {post: GetPostResult["post"]}) => {
    if (!post) return null;
    const {title, publishedAt, createdAt, content, tags} = post;

    return (
        <div>
            <div className=" font-medium prose lg:prose-xl mx-auto mb-10 lg:mt-20 break-words">
                <HeaderText as="h1" className="text-primaryblue font-medium">{title}</HeaderText>
                <ContentWithCustomComponents
                    customComponents={{RoofOptionsSectionBlog}}
                    content={content}
                />

                <div className="mt-10 opacity-40 text-sm">
                    {tags.map((tag) => (
                        <Link
                            key={tag.id}
                            href={`/tag/${tag.name}`}
                            className="text-primary mr-2"
                        >
                            #{tag.name}
                        </Link>
                    ))}
                </div>
                <div className="text-sm opacity-40 mt-4">
                    {Intl.DateTimeFormat("en-US").format(
                        new Date(publishedAt || createdAt)
                    )}
                </div>
            </div>
        </div>
    );
};
