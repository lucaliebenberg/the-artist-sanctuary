export interface FAQItem {
  question: string;
  answer: string;
  category: "residency" | "studios" | "general";
}

export const faqs: FAQItem[] = [
  {
    question: "Who can apply for a residency?",
    answer:
      "Our residencies are open to visual artists, writers, musicians, filmmakers, and interdisciplinary practitioners from anywhere in the world. We welcome artists at all career stages — from emerging to established.",
    category: "residency",
  },
  {
    question: "How long are the residencies?",
    answer:
      "Residencies run from 1 to 3 months. We recommend at least 2 months to fully settle in and produce meaningful work, but shorter stays can be equally impactful for focused projects.",
    category: "residency",
  },
  {
    question: "What is the application process?",
    answer:
      "Submit an enquiry through our Apply page with your portfolio, a brief project proposal, and your preferred dates. We review applications on a rolling basis and typically respond within 2 weeks.",
    category: "residency",
  },
  {
    question: "Is accommodation included in the residency?",
    answer:
      "Yes. All residencies include furnished accommodation in a self-contained cottage on the property, as well as a private studio, Wi-Fi, and access to all shared amenities.",
    category: "residency",
  },
  {
    question: "What are the studio lease terms?",
    answer:
      "Studios are available on a month-to-month basis, or on longer-term leases (3, 6, or 12 months) at discounted rates. We ask for one month's notice before vacating.",
    category: "studios",
  },
  {
    question: "Can I visit before committing to a studio?",
    answer:
      "Absolutely. We encourage prospective tenants to visit the property, meet the community, and see the available spaces before making a decision. Get in touch to book a tour.",
    category: "studios",
  },
  {
    question: "What's included in the studio lease?",
    answer:
      "Your lease covers the private studio space, Wi-Fi, utilities, access to shared facilities (kitchen, bathroom, garden, parking), and participation in community events.",
    category: "studios",
  },
  {
    question: "Where exactly is Sanctuary Studios?",
    answer:
      "We're located in Hout Bay, on the Cape Peninsula — about 20 minutes from Cape Town's city centre. The property sits at the base of the mountains with easy access to beaches, hiking trails, and the village.",
    category: "general",
  },
  {
    question: "Is Sanctuary Studios accessible by public transport?",
    answer:
      "Hout Bay is accessible by minibus taxi and MyCiti bus from the Cape Town CBD. We also offer airport pickup for arriving residents. A car is helpful but not essential.",
    category: "general",
  },
  {
    question: "Do you host events or exhibitions?",
    answer:
      "Yes — we host occasional open studios, end-of-residency exhibitions, and community gatherings. These are low-key, welcoming events that celebrate the work being made on site.",
    category: "general",
  },
];

export function getFAQsByCategory(category: FAQItem["category"]) {
  return faqs.filter((faq) => faq.category === category);
}
