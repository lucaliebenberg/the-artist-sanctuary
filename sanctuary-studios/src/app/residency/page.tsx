import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { OfferCard } from "@/components/ui/OfferCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { residencyData } from "@/data/residency";
import { getFAQsByCategory } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Artist Residency",
  description:
    "Immersive 1–3 month residency programmes in Hout Bay, Cape Town. Private studio, furnished accommodation, and inspiring landscape.",
};

export default function ResidencyPage() {
  const faqItems = getFAQsByCategory("residency");

  return (
    <>
      <PageHero
        eyebrow={residencyData.hero.eyebrow}
        heading={residencyData.hero.heading}
        subtitle={residencyData.hero.subtitle}
      />

      {/* Overview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionIntro
            eyebrow={residencyData.overview.eyebrow}
            heading={residencyData.overview.heading}
          />
          <div className="mt-8 space-y-6 text-lg leading-[1.8] text-charcoal/85">
            {residencyData.overview.text.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-beige py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionIntro
            eyebrow={residencyData.included.eyebrow}
            heading={residencyData.included.heading}
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {residencyData.included.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-sand bg-white px-5 py-4"
              >
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
                <span className="text-sm text-charcoal">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionIntro eyebrow="Pricing" heading="Residency Options" />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {residencyData.pricing.map((tier) => (
              <OfferCard key={tier.title} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-beige py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionIntro
            eyebrow="Questions"
            heading="Frequently Asked Questions"
          />
          <div className="mt-12">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection
        heading={residencyData.cta.heading}
        subtitle={residencyData.cta.subtitle}
      />
    </>
  );
}
