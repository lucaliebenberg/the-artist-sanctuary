import { cn } from "@/lib/cn";

interface EditorialTextBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function EditorialTextBlock({
  children,
  className,
}: EditorialTextBlockProps) {
  return (
    <div
      className={cn(
        "prose prose-lg max-w-2xl text-charcoal/85 leading-[1.8] [&_p]:mb-6",
        className
      )}
    >
      {children}
    </div>
  );
}
