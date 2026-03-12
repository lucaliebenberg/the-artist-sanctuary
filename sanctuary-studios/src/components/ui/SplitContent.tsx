import { cn } from "@/lib/cn";

interface SplitContentProps {
  imageSide: React.ReactNode;
  textSide: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

export function SplitContent({
  imageSide,
  textSide,
  reverse = false,
  className,
}: SplitContentProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
        className
      )}
    >
      <div className={cn(reverse && "lg:order-2")}>{imageSide}</div>
      <div className={cn(reverse && "lg:order-1")}>{textSide}</div>
    </div>
  );
}
