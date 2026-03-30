import Link from "next/link";

interface EventCardProps {
  title: string;
  date: string;
  category?: string;
  href?: string;
}

export default function EventCard({ title, date, category, href }: EventCardProps) {
  const content = (
    <div className="group p-5 rounded-xl bg-card-bg border border-card-border hover:border-accent/40 transition-all">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-100 group-hover:text-accent transition-colors truncate">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-400">{date}</p>
        </div>
        {category && (
          <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
            {category}
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
