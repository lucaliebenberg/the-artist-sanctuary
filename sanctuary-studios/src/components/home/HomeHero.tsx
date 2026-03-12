import { Button } from "@/components/ui/Button";
import { homeData } from "@/data/home";

export function HomeHero() {
  const { hero } = homeData;

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-beige">
      <div className="absolute inset-0 bg-sand-light/50" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta-dark">
          {hero.eyebrow}
        </p>
        <h1 className="font-serif text-5xl font-bold leading-tight text-charcoal sm:text-6xl lg:text-7xl">
          {hero.heading}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-warm-gray sm:text-xl">
          {hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="outline">
            {hero.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
