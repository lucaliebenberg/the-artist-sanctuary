import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-white hover:bg-terracotta-dark focus-visible:ring-terracotta",
  secondary:
    "bg-sage text-white hover:bg-sage-dark focus-visible:ring-sage",
  outline:
    "border-2 border-charcoal/20 text-charcoal hover:border-terracotta hover:text-terracotta-dark focus-visible:ring-charcoal",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variants[variant],
    className
  );

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
