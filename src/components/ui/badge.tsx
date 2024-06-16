import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "w-24 lg:w-36 h-10 lg:h-12 h2-text justify-center rounded-3xl flex items-center justify-center",
  {
    variants: {
      variant: {
        default:
          "border-transparent text-white bg-gradient-to-tr from-land-violet to-land-primary",
        secondary:
          "border-transparent bg-white text-land-secondary hover:bg-white hover:text-land-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
