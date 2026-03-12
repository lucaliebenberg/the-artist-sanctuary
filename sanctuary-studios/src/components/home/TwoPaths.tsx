import { SectionIntro } from "@/components/ui/SectionIntro";
import { Button } from "@/components/ui/Button";
import { homeData } from "@/data/home";

export function TwoPaths() {
  const { twoPaths } = homeData;

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionIntro
          eyebrow={twoPaths.eyebrow}
          heading={twoPaths.heading}
        />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {[twoPaths.residency, twoPaths.studios].map((path) => (
            <div
              key={path.title}
              className="rounded-2xl border border-sand bg-white p-10"
            >
              <div className="mb-6 aspect-[16/9] rounded-xl bg-sand-light" />
              <h3 className="font-serif text-2xl font-bold text-charcoal">
                {path.title}
              </h3>
              <p className="mt-3 text-warm-gray leading-relaxed">
                {path.description}
              </p>
              <div className="mt-6">
                <Button href={path.cta.href} variant="outline">
                  {path.cta.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
