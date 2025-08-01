import {BlogPostsPreview} from "@/components/wisp/BlogPostPreview";
import {wisp} from "@/lib/wisp";
import {BlogPostsPagination} from "@/components/wisp/BlogPostPagination";
import HeaderText from "@/components/HeaderText";
import SecondaryText from "@/components/SecondaryText";


export const metadata = {
    title: "Roofing and Siding Blog ",
    description:
        "Explore our blog for expert insights on roofing, siding, windows, gutters, and home improvement. Stay informed with Paragon Exterior's latest tips.",
};

const Page = async ({
    searchParams,
}: {
    searchParams: Promise<{[key: string]: string | string[] | undefined}>;
}) => {
    const params = await searchParams;
    const page = params.page ? parseInt(params.page as string) : 1;
    const result = await wisp.getPosts({limit: 6, page});
    return (
        <div className="container mx-auto px-5 mb-10">

            <HeaderText className="text-center mt-10 mb-5">
                Explore Our Blog
            </HeaderText>
            <SecondaryText className="text-center mb-10">
                Discover expert insights on roofing, siding, windows, gutters, and home improvement. Stay informed with Paragon Exterior&apos;s latest tips and trends.
            </SecondaryText>




            <BlogPostsPreview posts={result.posts} />
            <BlogPostsPagination
                
            pagination={result.pagination} />
        </div>
    );
};

export default Page;
