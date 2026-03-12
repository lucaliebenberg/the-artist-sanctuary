import { SectionIntro } from "@/components/ui/SectionIntro";
import { homeData } from "@/data/home";

export function WhyHoutBay() {
  const { whyHoutBay } = homeData;

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="aspect-[4/3] rounded-2xl bg-sand-light" />
          <div>
            <SectionIntro
              eyebrow={whyHoutBay.eyebrow}
              heading={whyHoutBay.heading}
              subtitle={whyHoutBay.description}
              align="left"
            />
            <ul className="mt-8 grid grid-cols-2 gap-4">
              {whyHoutBay.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-charcoal/80"
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
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
