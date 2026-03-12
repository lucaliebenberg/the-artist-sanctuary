import { cn } from "@/lib/cn";

interface ImageGridProps {
  count?: number;
  columns?: 2 | 3 | 4;
  aspectRatio?: "square" | "landscape" | "portrait";
  className?: string;
}

const aspectClasses = {
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
};

const colClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function ImageGrid({
  count = 4,
  columns = 4,
  aspectRatio = "landscape",
  className,
}: ImageGridProps) {
  return (
    <div className={cn("grid gap-4", colClasses[columns], className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "overflow-hidden rounded-xl bg-sand-light",
            aspectClasses[aspectRatio]
          )}
        >
          <div className="flex h-full w-full items-center justify-center text-sand">
            <svg
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
