import type { Metadata } from "next";
import Link from "next/link";
import { getAllNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "FPV News",
  description:
    "Latest news, guides, and updates from the UGKL FPV drone racing community.",
};

export default function NewsPage() {
  const articles = getAllNews();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">FPV News</h1>
      <p className="text-gray-400 mb-10">
        Updates, guides, and stories from the UGKL community.
      </p>

      <div className="space-y-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/news/${article.slug}`}
            className="block p-6 rounded-xl bg-card-bg border border-card-border hover:border-accent/40 transition-all group"
          >
            <p className="text-sm text-gray-500 mb-1">
              {new Date(article.date).toLocaleDateString("en-MY", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h2 className="text-xl font-semibold text-gray-100 group-hover:text-accent transition-colors">
              {article.title}
            </h2>
            <p className="mt-2 text-sm text-gray-400">{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
