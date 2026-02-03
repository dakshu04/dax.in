import { getPublishedBlogPosts } from "@/lib/Blog";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { Button } from "../ui/button";
import Link from "next/link";
import { BlogCard } from "../blog/BlogCard";


export default function Blog() {
    const posts = getPublishedBlogPosts();

    return (
        <Container className="mt-20">
            <SectionHeading subHeading="Featured" heading="Blog" />
            <div>
                {posts.slice(0, 2).map((post) => (
                    <BlogCard key={post.slug} post={post}/>
                ))}
                <div className="mt-8 flex justify-center">
                    <Button variant={"outline"}>
                        <Link href="/blog">Show all blogs</Link>
                    </Button>
                </div>
            </div>
        </Container>
    )
}