import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { CTASection } from "@/components/ui/CTASection";
import { aboutData } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Sanctuary Studios — an artist residency and creative studio space in Hout Bay, Cape Town.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutData.hero.eyebrow}
        heading={aboutData.hero.heading}
        subtitle={aboutData.hero.subtitle}
      />

      {/* Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionIntro
            eyebrow={aboutData.story.eyebrow}
            heading={aboutData.story.heading}
          />
          <div className="mt-8 space-y-6 text-lg leading-[1.8] text-charcoal/85">
            {aboutData.story.text.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-beige py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionIntro
            eyebrow={aboutData.philosophy.eyebrow}
            heading={aboutData.philosophy.heading}
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {aboutData.philosophy.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-sand bg-white p-8"
              >
                <h3 className="font-serif text-xl font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <SectionIntro
            eyebrow={aboutData.mission.eyebrow}
            heading={aboutData.mission.heading}
          />
          <p className="mt-8 text-lg leading-[1.8] text-charcoal/85">
            {aboutData.mission.text}
          </p>
        </div>
      </section>

      <CTASection
        heading={aboutData.cta.heading}
        subtitle={aboutData.cta.subtitle}
      />
    </>
  );
}
