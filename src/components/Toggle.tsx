"use client";

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn } from "@/lib/cn";
import { VariantProps } from "class-variance-authority";
import { toggleVariants } from "@/components/variants/toggleVariants";

type ToggleProps = {
  pressed: boolean;
  onPressedChange: () => void;
} & VariantProps<typeof toggleVariants> &
  ComponentPropsWithoutRef<typeof TogglePrimitive.Root>;

export const Toggle = forwardRef<
  ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, pressed, onPressedChange, variant, size, ...props }, ref) => {
  return (
    <TogglePrimitive.Root
      pressed={pressed}
      onPressedChange={onPressedChange}
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
});

Toggle.displayName = TogglePrimitive.Root.displayName;
