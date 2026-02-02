import { getPublishedBlogPosts } from "@/config/Blog";
import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";
import { Button } from "../ui/button";
import Link from "next/link";
import { BlogCard } from "../blog/BlogCard";

export default function Blog() {
    const posts = getPublishedBlogPosts();

    return (
        <Container className="mt-20">
        <SectionHeading subHeading="Featured" heading="Blogs" />
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {posts.slice(0, 2).map((post) => (
            <BlogCard key={post.slug} post={post} />
            ))}
        </div>
        <div className="mt-8 flex justify-center">
            <Button variant="outline">
            <Link href="/blog">Show all blogs</Link>
            </Button>
        </div>
        </Container>
    )
}