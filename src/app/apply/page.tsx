import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply for an artist residency, studio lease, or creative partnership at Sanctuary Studios in Hout Bay, Cape Town.",
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        heading="Apply or Enquire"
        subtitle="Whether you're interested in a residency, a studio, a workshop, or a partnership — we'd love to hear from you."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionIntro
            eyebrow="Enquiry Form"
            heading="Tell Us About Yourself"
            subtitle="Fill out the form below and we'll get back to you within a few days."
          />
          <div className="mt-12">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
