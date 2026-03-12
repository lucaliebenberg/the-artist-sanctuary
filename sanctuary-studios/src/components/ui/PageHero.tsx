import { cn } from "@/lib/cn";

interface PageHeroProps {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  className?: string;
}

export function PageHero({
  eyebrow,
  heading,
  subtitle,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "flex min-h-[50vh] items-center bg-beige pt-24 pb-16",
        className
      )}
    >
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-dark">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl font-bold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
          {heading}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg leading-relaxed text-warm-gray sm:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
