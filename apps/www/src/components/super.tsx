import React from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

export const Super = React.forwardRef<
    HTMLDivElement,
    {
        asChild?: boolean;
        className?: string;
        children?: React.ReactNode;
    } & React.ComponentPropsWithoutRef<"span">
>(({ asChild, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";
    const baseClasses = "align-super text-[12px]";

    return (
        <Comp ref={ref} className={cn(baseClasses, className)} {...props}>
            {children}
        </Comp>
    );
});

Super.displayName = "Super";
