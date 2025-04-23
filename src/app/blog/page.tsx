import {BlogPostsPreview} from "@/components/wisp/BlogPostPreview";
import {wisp} from "@/lib/wisp";
import {BlogPostsPagination} from "@/components/wisp/BlogPostPagination";

const Page = async ({
    searchParams,
}: {
    searchParams: {[key: string]: string | string[] | undefined};
}) => {
    const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
    const result = await wisp.getPosts({limit: "all", page});
    return (
        <div className="container mx-auto px-5 mb-10">
            <BlogPostsPreview posts={result.posts} />
            <BlogPostsPagination pagination={result.pagination} />
        </div>
    );
};

export default Page;
