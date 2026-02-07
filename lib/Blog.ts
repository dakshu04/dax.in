import path from "path";
import fs from "fs"
import matter from "gray-matter";
import type { BlogPostPreview } from "@/types/blog";

// 1. Define where the blogs live
const BLOG_DIR = path.join(process.cwd(), 'data/blog');

export function getBlogPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export async function getBlogPostBySlug(slug : string) {
  try {
      // 2. Find the file
      const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
      const fileContent = fs.readFileSync(filePath, 'utf8') 
      // 3. Separate metadata (data) from the actual blog text (content)
      const { data, content } = matter(fileContent)

      return {
        metadata: data, // This is your title, date, etc.
        content,        // This is the raw Markdown text
        slug            // We keep the slug for the URL
      }
  } catch (error) {
    return null; // Return null if file doesn't exist (prevents crashing)
  }
}

export async function getAllBlogPosts() {
  // 4. Get all filenames in the folder
  const files = fs.readdirSync(BLOG_DIR);
  // 5. Transform filenames into actual blog data objects
  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return {
      slug,
      ...(data as any) // Spreads title, date, description, etc.
    }
  })

  // Sort by date
  return posts.sort((a, b)  => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPublishedBlogPosts(): BlogPostPreview[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const posts: BlogPostPreview[] = [];
  for (const filename of files) {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent) as { data: Record<string, unknown> };
    if (data.isPublished !== true) continue;
    const frontmatter = {
      title: String(data.title ?? ""),
      description: String(data.description ?? ""),
      image: String(data.image ?? ""),
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
      date: String(data.date ?? ""),
      isPublished: true,
    };
    posts.push({ slug, frontmatter });
  }
  posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
  return posts;
}

export function getAllTags() {
  const posts = getPublishedBlogPosts();
  const tags = new Set<string>();
  posts.forEach(post => post.frontmatter.tags?.forEach((t: string) => tags.add(t)));
  return Array.from(tags);
}