import { getBlogPostBySlug, getBlogPostSlugs } from '@/lib/Blog';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.metadata.title} | Daksh`,
    description: post.metadata.description,
    openGraph: {
      images: [post.metadata.image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/blogs" 
          className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-10 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to all blogs
        </Link>

        <article>
          {/* Header Section */}
          <header className="mb-10">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <time dateTime={post.metadata.date}>
                {new Date(post.metadata.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
              <span>•</span>
              <span className="capitalize">{post.metadata.tags?.[0]}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {post.metadata.title}
            </h1>

            {post.metadata.image && (
              <div className="relative aspect-video overflow-hidden rounded-xl border mb-10">
                <Image 
                  src={post.metadata.image} 
                  alt={post.metadata.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          {/* Content Section - The "prose" class does the magic */}
          <section className="prose prose-slate dark:prose-invert prose-lg max-w-none prose-headings:tracking-tight prose-a:text-blue-600">
            <MDXRemote source={post.content} />
          </section>
        </article>
      </div>
    </main>
  );
}


export async function generateStaticParams() {
  const slugs = getBlogPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}