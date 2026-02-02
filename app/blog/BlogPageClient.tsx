'use client';

import { BlogList } from '@/components/blog/BlogList';
import Container from '@/components/Container';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BlogPostPreview } from '@/types/blog';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface BlogPageClientProps {
  initialPosts: BlogPostPreview[];
  initialTags: string[];
}

const getBlogPostsByTagClient = (posts: BlogPostPreview[], tag: string): BlogPostPreview[] => {
  return posts.filter((post) =>
    post.frontmatter.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  );
};

export function BlogPageClient({ initialPosts, initialTags }: BlogPageClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);

  useEffect(() => {
    const tagParam = searchParams.get('tag');
    if (tagParam) {
      setSelectedTag(tagParam);
      setFilteredPosts(getBlogPostsByTagClient(initialPosts, tagParam));
    } else {
      setSelectedTag(null);
      setFilteredPosts(initialPosts);
    }
  }, [searchParams, initialPosts]);

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      router.replace('/blog');
    } else {
      router.replace(`/blog?tag=${encodeURIComponent(tag)}`);
    }
  };

  const getTagPostCount = (tag: string) => {
    return initialPosts.filter((post) =>
      post.frontmatter.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
    ).length;
  };

  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Blogs</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Thoughts, tutorials, and insights on engineering and programming.
          </p>
        </div>

        <Separator />

        {initialTags.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Popular Tags</h2>
              {selectedTag && (
                <button
                  onClick={() => router.replace('/blog')}
                  className="text-muted-foreground hover:text-foreground text-sm underline"
                >
                  Clear filter
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {initialTags.map((tag) => (
                <button key={tag} onClick={() => handleTagClick(tag)}>
                  <Badge
                    variant={selectedTag === tag ? 'default' : 'outline'}
                    className="hover:bg-accent hover:text-accent-foreground cursor-pointer capitalize"
                  >
                    {tag} ({getTagPostCount(tag)})
                  </Badge>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">
            {selectedTag ? `Posts tagged "${selectedTag}"` : 'Latest Posts'}
            <span className="text-muted-foreground ml-2 text-sm font-normal">
              ({filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'})
            </span>
          </h2>
          <BlogList posts={filteredPosts} />
        </div>
      </div>
    </Container>
  );
}