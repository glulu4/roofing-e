import {BlogPostsPreview} from "@/components/wisp/BlogPostPreview";
import {wisp} from "@/lib/wisp";
import {BlogPostsPagination} from "@/components/wisp/BlogPostPagination";


export const metadata = {
    title: "Blog | Paragon Exterior",
    description:
        "Explore our blog for expert insights on roofing, siding, windows, and home improvement. Stay informed with Paragon Exterior's latest tips and trends.",
};

const Page = async ({
    searchParams,
}: {
    searchParams: Promise<{[key: string]: string | string[] | undefined}>;
}) => {
    const params = await searchParams;
    const page = params.page ? parseInt(params.page as string) : 1;
    const result = await wisp.getPosts({limit: "all", page});
    return (
        <div className="container mx-auto px-5 mb-10">
            <BlogPostsPreview posts={result.posts} />
            <BlogPostsPagination pagination={result.pagination} />
        </div>
    );
};

export default Page;
