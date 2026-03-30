import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllNews, getNewsBySlug } from "@/lib/news";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllNews();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        href="/news"
        className="text-sm text-gray-500 hover:text-accent transition-colors mb-6 inline-block"
      >
        &larr; Back to News
      </Link>

      <p className="text-sm text-gray-500 mb-2">
        {new Date(article.date).toLocaleDateString("en-MY", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">{article.title}</h1>

      <article className="prose prose-invert prose-sm max-w-none prose-headings:text-gray-100 prose-p:text-gray-400 prose-strong:text-gray-200 prose-li:text-gray-400 prose-a:text-accent">
        <MDXRemote source={article.content} />
      </article>
    </div>
  );
}
