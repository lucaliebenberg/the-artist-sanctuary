import { cn } from "@/lib/cn";

interface SectionIntroProps {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionIntro({
  eyebrow,
  heading,
  subtitle,
  align = "center",
  className,
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-dark">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-warm-gray">
          {subtitle}
        </p>
      )}
    </div>
  );
}
