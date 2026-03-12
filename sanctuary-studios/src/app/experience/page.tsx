import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SplitContent } from "@/components/ui/SplitContent";
import { RhythmTimeline } from "@/components/ui/RhythmTimeline";
import { ImageGrid } from "@/components/ui/ImageGrid";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { CTASection } from "@/components/ui/CTASection";
import { experienceData } from "@/data/experience";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "The Experience",
  description:
    "Life at Sanctuary Studios — shaped by landscape, light, and a rhythm that honours both solitude and connection in Hout Bay, Cape Town.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow={experienceData.hero.eyebrow}
        heading={experienceData.hero.heading}
        subtitle={experienceData.hero.subtitle}
      />

      {/* Alternating Sections */}
      {experienceData.sections.map((section, i) => (
        <section
          key={section.heading}
          className={`py-20 sm:py-28 ${i % 2 === 1 ? "bg-beige" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SplitContent
              reverse={i % 2 === 1}
              imageSide={
                <div className="aspect-[4/3] rounded-2xl bg-sand-light" />
              }
              textSide={
                <div>
                  <SectionIntro
                    eyebrow={section.eyebrow}
                    heading={section.heading}
                    align="left"
                  />
                  <p className="mt-6 text-lg leading-[1.8] text-charcoal/85">
                    {section.text}
                  </p>
                </div>
              }
            />
          </div>
        </section>
      ))}

      {/* Seasonal Rhythm */}
      <section className="bg-beige py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionIntro
              eyebrow={experienceData.rhythm.eyebrow}
              heading={experienceData.rhythm.heading}
              align="left"
            />
            <RhythmTimeline items={experienceData.rhythm.items} />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionIntro eyebrow="Gallery" heading="Moments at Sanctuary" />
          <div className="mt-12">
            <ImageGrid count={6} columns={3} aspectRatio="landscape" />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-beige py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <QuoteBlock {...testimonials[1]} />
        </div>
      </section>

      <CTASection
        heading={experienceData.cta.heading}
        subtitle={experienceData.cta.subtitle}
      />
    </>
  );
}
