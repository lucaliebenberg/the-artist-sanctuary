import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { OfferCard } from "@/components/ui/OfferCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { studiosData } from "@/data/studios";
import { getFAQsByCategory } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Creative Studios",
  description:
    "Permanent studio spaces for Cape Town-based artists. Natural light, mountain views, and a supportive creative community in Hout Bay.",
};

export default function StudiosPage() {
  const faqItems = getFAQsByCategory("studios");

  return (
    <>
      <PageHero
        eyebrow={studiosData.hero.eyebrow}
        heading={studiosData.hero.heading}
        subtitle={studiosData.hero.subtitle}
      />

      {/* Overview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionIntro
            eyebrow={studiosData.overview.eyebrow}
            heading={studiosData.overview.heading}
          />
          <div className="mt-8 space-y-6 text-lg leading-[1.8] text-charcoal/85">
            {studiosData.overview.text.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="bg-beige py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionIntro
            eyebrow={studiosData.setup.eyebrow}
            heading={studiosData.setup.heading}
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {studiosData.setup.items.map((item) => (
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
          <SectionIntro eyebrow="Pricing" heading="Studio Options" />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {studiosData.pricing.map((tier) => (
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
        heading={studiosData.cta.heading}
        subtitle={studiosData.cta.subtitle}
      />
    </>
  );
}
