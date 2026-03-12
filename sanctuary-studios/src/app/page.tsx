import { HomeHero } from "@/components/home/HomeHero";
import { TwoPaths } from "@/components/home/TwoPaths";
import { WhyHoutBay } from "@/components/home/WhyHoutBay";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { RhythmTimeline } from "@/components/ui/RhythmTimeline";
import { ImageGrid } from "@/components/ui/ImageGrid";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { CTASection } from "@/components/ui/CTASection";
import { homeData } from "@/data/home";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Intro */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionIntro
            eyebrow={homeData.intro.eyebrow}
            heading={homeData.intro.heading}
            subtitle={homeData.intro.subtitle}
          />
        </div>
      </section>

      <TwoPaths />

      {/* Daily Rhythm */}
      <section className="bg-beige py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionIntro
              eyebrow={homeData.rhythm.eyebrow}
              heading={homeData.rhythm.heading}
              align="left"
            />
            <RhythmTimeline items={homeData.rhythm.items} />
          </div>
        </div>
      </section>

      {/* Shared Elements */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionIntro
            eyebrow={homeData.sharedElements.eyebrow}
            heading={homeData.sharedElements.heading}
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeData.sharedElements.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-sand bg-white px-6 py-4"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-sage"
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
                <span className="text-sm font-medium text-charcoal">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhyHoutBay />

      {/* Gallery */}
      <section className="bg-beige py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionIntro
            eyebrow={homeData.gallery.eyebrow}
            heading={homeData.gallery.heading}
          />
          <div className="mt-12">
            <ImageGrid count={4} columns={4} aspectRatio="landscape" />
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <QuoteBlock {...testimonials[0]} />
        </div>
      </section>

      <CTASection
        heading={homeData.cta.heading}
        subtitle={homeData.cta.subtitle}
        primaryLabel={homeData.cta.primaryLabel}
        primaryHref={homeData.cta.primaryHref}
        secondaryLabel={homeData.cta.secondaryLabel}
        secondaryHref={homeData.cta.secondaryHref}
      />
    </>
  );
}
