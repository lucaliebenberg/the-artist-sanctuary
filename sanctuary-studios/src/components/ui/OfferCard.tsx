import { cn } from "@/lib/cn";
import { Button } from "./Button";

interface OfferCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function OfferCard({
  title,
  price,
  period,
  description,
  features,
  highlighted = false,
  ctaLabel = "Apply Now",
  ctaHref = "/apply",
  className,
}: OfferCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border p-8",
        highlighted
          ? "border-terracotta/30 bg-white shadow-lg"
          : "border-sand bg-cream",
        className
      )}
    >
      <h3 className="font-serif text-2xl font-bold text-charcoal">{title}</h3>
      <p className="mt-2 text-sm text-warm-gray">{description}</p>
      <div className="mt-6">
        <span className="font-serif text-4xl font-bold text-charcoal">
          {price}
        </span>
        <span className="ml-1 text-sm text-warm-gray">/{period}</span>
      </div>
      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <svg
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-charcoal/80">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button
          href={ctaHref}
          variant={highlighted ? "primary" : "outline"}
          className="w-full"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
