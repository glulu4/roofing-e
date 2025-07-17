
// import HeaderText from "@/components/HeaderText";
// import GetEstimate from "@/components/landing-ui/GetEstimate";
// import {wisp} from "@/lib/wisp";
// import {Metadata} from "next";
// import {ContentWithCustomComponents} from "@wisp-cms/react-custom-component";
// import type {BlogPosting, WithContext} from "schema-dts";
// import RoofOptionsSection from "@/components/RoofOptionsSection";


// export async function generateMetadata(
//     {params}: {params: Promise<{slug: string}>}
// ): Promise<Metadata> {

//     const {slug} = await params;
//     const result = await wisp.getPost(slug);
//     if (!result.post) return {};

//     const {title, description} = result.post;
//     return {
//         title: `${title}`,
//         description: description || "Read roofing tips, guides, and updates from Paragon Exterior.",
//         openGraph: {
//             title: title,
//             description: description || "Paragon Exterior Blog Post",
//             type: "article"
//         },
//         twitter: {
//             card: "summary_large_image",
//             title: title,
//             description: description || "Paragon Exterior Blog Post"
//         }
//     };
// }


// export default async function BlogPost({
//     params,
// }: {
//     params: Promise<{slug: string}>;
// }) {
//     const { slug } = await params;
//     const result = await wisp.getPost(slug);
//     if (!result.post) return null;
//     const {title, publishedAt, createdAt, content, tags, image, updatedAt} = result.post;
//     const {posts} = await wisp.getRelatedPosts({slug, limit: 3});

//     const jsonLd: WithContext<BlogPosting> = {
//         "@context": "https://schema.org",
//         "@type": "BlogPosting",
//         headline: title,
//         image: image ? image : undefined,
//         datePublished: publishedAt ? publishedAt.toString() : undefined,
//         dateModified: updatedAt.toString(),
//     };

//     return (
//         <div>
//             <div className="prose lg:prose-xl dark:prose-invert mx-auto w-5/6 sm:w-auto lg:prose-h1:text-4xl mb-10 lg:mt-20 break-words">
//                 <HeaderText className="text-primaryblue" as="h1">{title}</HeaderText>


//                 <div
//                     className="blog-content mx-auto"
//                     dangerouslySetInnerHTML={{
//                         __html: content,
                       
//                     }}
//                 />

//                 <GetEstimate />
//                 <div className="mt-10 opacity-40 text-sm">
//                     {tags.map((tag, idx) => (
//                         <span key={idx}>#{tag.name}</span>
//                     ))}
//                 </div>
                
//                 <div className="text-sm opacity-40 mt-4">
//                     {Intl.DateTimeFormat("en-US").format(
//                         new Date(publishedAt || createdAt),
//                     )}
//                 </div>
                
//             </div>

//         </div>
//     );
// }


import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import {BlogPostContent} from "@/components/wisp/BlogPostContent";
import {RelatedPosts} from "@/components/wisp/RelatedPost";
import {config} from "@/config";
import {wisp} from "@/lib/wisp";
import {Metadata} from "next";
import {notFound} from "next/navigation";
import type {BlogPosting, WithContext} from "schema-dts";

export async function generateMetadata({params}: {params: Params}): Promise<Metadata> {
    const {slug} = await params;
    const result = await wisp.getPost(slug);
    if (!result || !result.post) {
        return {
            title: "Blog post not found",
        };
    }

    const {title, description, image} = result.post;

    return {
        title,
        description,
        openGraph: {
            title,
        },
    };
}
interface Params {
    slug: string;
}


const Page = async ({params}: {params: Promise<{slug: string}>}) => {

    const {slug} = await params;
    const result = await wisp.getPost(slug);
    const {posts} = await wisp.getRelatedPosts({slug, limit: 3});

    if (!result || !result.post) {
        return notFound();
    }

    const {title, publishedAt, updatedAt, image} = result.post;

    const jsonLd: WithContext<BlogPosting> = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        image: image ? image : undefined,
        datePublished: publishedAt ? publishedAt.toString() : undefined,
        dateModified: updatedAt.toString(),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
            <div className=" mx-auto px-5">
                <BlogPostContent post={result.post} />
                <RelatedPosts posts={posts} />
            </div>
            <GetEstimate/>
        </>
    );
};

export default Page;
