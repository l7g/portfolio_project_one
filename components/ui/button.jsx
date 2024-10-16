import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-accent-light dark:bg-accent-dark text-text-light dark:text-text-dark hover:bg-accent-light-hover dark:hover:bg-accent-dark-hover",
        primary: "bg-primary-light dark:bg-primary-dark text-white",
        secondary:
          "bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark",
        outline:
          "border border-accent-light dark:border-accent-dark bg-transparent text-accent-light dark:text-accent-dark hover:bg-accent-light dark:hover:bg-accent-dark hover:text-text-light dark:hover:text-text-dark",
      },
      size: {
        default: "h-11 px-6 ",
        sm: "h-9 rounded-md px-3",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-sm uppercase tracking-0.5",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
