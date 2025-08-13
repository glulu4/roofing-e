import HeaderText from "@/components/HeaderText";
import {BlogPostsPreview} from "@/components/wisp/BlogPostPreview";
import {wisp} from "@/lib/wisp";
import Link from "next/link";

const BlogPreview = async () => {
    const {posts} = await wisp.getPosts({limit: 3});
    return (
        <section className="w-5/6 mx-auto px-5 py-32">
            <HeaderText className="text-center mb-10">Check out our blog</HeaderText>
            <BlogPostsPreview posts={posts} className="md:grid-cols-3" />
            <div className="text-center mt-8">
                <Link href="/blog" className="underline">Read more on our blog</Link>
            </div>
        </section>
    );
};

export default BlogPreview;