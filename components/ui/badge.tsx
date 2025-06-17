import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        ready: "",
        notReady: "",
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

function Badge({ className, variant, children, ...props }: BadgeProps) {
  if (variant === "ready") {
    return (
      <div className={cn("flex items-center", className)} {...props}>
        <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
          <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap dark:hover:bg-green-100 dark:hover:bg-opacity-55 dark:hover:text-green-900 transition-colors duration-300">
            {children}
          </div>
        </span>
      </div>
    );
  }
  if (variant === "notReady") {
    return (
      <div className="flex items-center w-fit" >
        <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF0000_0%,#8B0000_50%,#FF0000_100%)]"></span>
          <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-red-800 bg-red-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap dark:hover:bg-red-100 dark:hover:bg-opacity-55 dark:hover:text-red-900 transition-colors duration-300">
            {children}
          </div>
        </span>
      </div>
    );
  }
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
