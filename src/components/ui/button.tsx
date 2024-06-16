import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-land-violet focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all",
  {
    variants: {
      variant: {
        gradient:
          "gradient-bg focus-visible:ring-4 focus-visible:ring-offset-2 shadow-[0_0_24px_0_rgb(164,62,240,.9)]",
        default:
          "bg-white hover:from-white hover:to-white text-land-primary border-[4px] border-land-primary shadow-[0_0_24px_0_rgb(164,62,240,.9)] hover:shadow-[0_0_86px_0_rgb(164,62,240,.9)] focus-within:shadow-[0_0_86px_0_rgb(164,62,240,.9)] active:opacity-60",
        destructive: "bg-red-500 text-neutral-50 hover:bg-red-500/90 ",
        outline:
          "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-land-primary ",
        secondary:
          "bg-gradient-to-tr from-land-violet to-land-primary text-white hover:shadow-[0_0_18px_0_rgb(164,62,240,.7)] focus-within:shadow-[0_0_18px_0_rgb(164,62,240,.7)] transition-all duration-500",
        ghost: "hover:bg-neutral-100 hover:text-land-primary ",
        link: "text-land-primary underline-offset-4 hover:underline",
      },
      size: {
        square: "h-16 w-16 rounded-2xl",
        default: "h-16 lg:h-20 px-6 lg:px-14 rounded-[4rem] h2-text",
        sm: "h-12 rounded-md px-3 rounded-[4rem] r1-text",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
