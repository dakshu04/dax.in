
import type { BlogPostPreview } from "@/types/blog";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { Button } from "../ui/button";
import Link from "next/link";
import { BlogCard } from "../blog/BlogCard";
import { getPublishedBlogPosts } from "@/lib/Blog";


export default function Blog() {
    const posts = getPublishedBlogPosts();

    return (
        <Container className="mt-20">
            <SectionHeading subHeading="Featured" heading="Blog" />
            <div>
                {posts.slice(0, 2).map((post: BlogPostPreview) => (
                    <BlogCard key={post.slug} post={post}/>
                ))}
                <div className="mt-8 flex justify-center">
                    <Button variant={"outline"}>
                        <Link href="/blogs">Show all blogs</Link>
                    </Button>
                </div>
            </div>
        </Container>
    )
}