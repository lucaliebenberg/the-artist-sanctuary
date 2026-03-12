interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

interface RhythmTimelineProps {
  items: TimelineItem[];
}

export function RhythmTimeline({ items }: RhythmTimelineProps) {
  return (
    <div className="relative ml-4">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-sage/40" />
      <ul className="flex flex-col gap-10">
        {items.map((item) => (
          <li key={item.time} className="relative pl-8">
            <div className="absolute left-[-4px] top-1.5 h-2 w-2 rounded-full bg-sage" />
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sage-dark">
              {item.time}
            </p>
            <h4 className="mt-1 font-serif text-xl font-semibold text-charcoal">
              {item.title}
            </h4>
            <p className="mt-1 text-sm leading-relaxed text-warm-gray">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
