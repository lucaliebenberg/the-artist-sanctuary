import { cn } from "@/lib/cn";
import { Button } from "./Button";

interface CTASectionProps {
  heading: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}

export function CTASection({
  heading,
  subtitle,
  primaryLabel = "Apply Now",
  primaryHref = "/apply",
  secondaryLabel,
  secondaryHref,
  className,
}: CTASectionProps) {
  return (
    <section className={cn("bg-beige py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-charcoal sm:text-4xl">
          {heading}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-warm-gray">{subtitle}</p>
        )}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href={primaryHref}>{primaryLabel}</Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="outline">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
