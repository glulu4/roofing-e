import HeaderText from "@/components/HeaderText";
import GetEstimate from "@/components/landing-ui/GetEstimate";
import {wisp} from "@/lib/wisp";
import {Metadata} from "next";


export async function generateMetadata(
    {params}: {params: Promise<{slug: string}>}
): Promise<Metadata> {

    const {slug} = await params;
    const result = await wisp.getPost(slug);
    if (!result.post) return {};

    const {title, description} = result.post;
    return {
        title: `${title}`,
        description: description || "Read roofing tips, guides, and updates from Paragon Exterior.",
        openGraph: {
            title: title,
            description: description || "Paragon Exterior Blog Post",
            type: "article"
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description || "Paragon Exterior Blog Post"
        }
    };
}


export default async function BlogPost({
    params,
}: {
    params: Promise<{slug: string}>;
}) {
    const { slug } = await params;
    const result = await wisp.getPost(slug);
    if (!result.post) return null;
    const {title, publishedAt, createdAt, content, tags} = result.post;

    return (
        <div>
            <div className="prose lg:prose-xl dark:prose-invert mx-auto w-5/6 sm:w-auto lg:prose-h1:text-4xl mb-10 lg:mt-20 break-words">
                <HeaderText className="text-primaryblue" as="h1">{title}</HeaderText>
                <div
                    className="blog-content mx-auto"
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                />

                <GetEstimate />
                <div className="mt-10 opacity-40 text-sm">
                    {tags.map((tag, idx) => (
                        <span key={idx}>#{tag.name}</span>
                    ))}
                </div>
                
                <div className="text-sm opacity-40 mt-4">
                    {Intl.DateTimeFormat("en-US").format(
                        new Date(publishedAt || createdAt),
                    )}
                </div>
                
            </div>

        </div>
    );
}
