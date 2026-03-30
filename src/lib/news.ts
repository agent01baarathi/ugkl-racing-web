import fs from "fs";
import path from "path";
import matter from "gray-matter";

const newsDirectory = path.join(process.cwd(), "src/content/news");

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export function getAllNews(): NewsArticle[] {
  const files = fs.readdirSync(newsDirectory).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(newsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      content,
    };
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  const filePath = path.join(newsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    content,
  };
}
