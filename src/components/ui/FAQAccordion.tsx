interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-sand">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between text-left font-medium text-charcoal [&::-webkit-details-marker]:hidden">
            <span className="pr-4">{item.question}</span>
            <svg
              className="h-5 w-5 flex-shrink-0 text-warm-gray transition-transform duration-200 group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-warm-gray">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
