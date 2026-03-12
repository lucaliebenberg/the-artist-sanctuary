import { cn } from "@/lib/cn";

interface QuoteBlockProps {
  quote: string;
  author: string;
  role?: string;
  className?: string;
}

export function QuoteBlock({ quote, author, role, className }: QuoteBlockProps) {
  return (
    <blockquote className={cn("mx-auto max-w-3xl text-center", className)}>
      <p className="font-serif text-2xl italic leading-relaxed text-charcoal sm:text-3xl">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-6">
        <p className="font-semibold text-charcoal">{author}</p>
        {role && <p className="text-sm text-warm-gray">{role}</p>}
      </footer>
    </blockquote>
  );
}
