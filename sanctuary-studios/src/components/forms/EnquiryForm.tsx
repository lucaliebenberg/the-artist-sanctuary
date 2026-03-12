"use client";

import { useState } from "react";
import { FormField } from "./FormField";
import { Button } from "@/components/ui/Button";

const enquiryTypes = [
  { value: "residency", label: "Artist Residency" },
  { value: "studio", label: "Studio Lease" },
  { value: "workshop", label: "Workshop / Event" },
  { value: "partnership", label: "Partnership / Collaboration" },
];

export function EnquiryForm() {
  const [type, setType] = useState("");

  return (
    <form
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      className="mx-auto max-w-2xl space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField
          label="First Name"
          name="firstName"
          type="text"
          required
          placeholder="Your first name"
        />
        <FormField
          label="Last Name"
          name="lastName"
          type="text"
          required
          placeholder="Your last name"
        />
      </div>

      <FormField
        label="Email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
      />

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="enquiryType"
          className="text-sm font-medium text-charcoal"
        >
          I&apos;m interested in...
          <span className="ml-0.5 text-terracotta">*</span>
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full cursor-pointer rounded-lg border border-sand bg-white px-4 py-3 text-sm text-charcoal transition-colors focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta"
        >
          <option value="" disabled>
            Select an option
          </option>
          {enquiryTypes.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {(type === "residency" || type === "") && (
        <>
          <FormField
            label="Preferred Dates"
            name="dates"
            type="text"
            placeholder="e.g. March–May 2026"
          />
          <FormField
            label="Your Practice / Medium"
            name="medium"
            type="text"
            placeholder="e.g. painting, sculpture, writing"
          />
        </>
      )}

      {type === "studio" && (
        <FormField
          label="Studio Size Preference"
          name="studioSize"
          type="select"
          options={[
            { value: "compact", label: "Compact (~12m\u00B2)" },
            { value: "standard", label: "Standard (~20m\u00B2)" },
            { value: "large", label: "Large (~30m\u00B2)" },
          ]}
        />
      )}

      <FormField
        label="Portfolio / Website"
        name="portfolio"
        type="url"
        placeholder="https://yoursite.com"
      />

      <FormField
        label="Tell us more"
        name="message"
        type="textarea"
        required
        placeholder="Tell us about your work, your goals for a residency or studio, or anything else you'd like us to know."
        rows={6}
      />

      <div>
        <Button type="submit" className="w-full sm:w-auto">
          Send Enquiry
        </Button>
      </div>
    </form>
  );
}
