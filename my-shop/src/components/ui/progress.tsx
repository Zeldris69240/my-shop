"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

/**
 * Visual progress bar that fills horizontally based on a percentage value.
 *
 * If `value` is undefined, the indicator is positioned as 0% progress.
 *
 * @param className - Additional CSS classes to apply to the root progress container
 * @param value - Progress percentage from 0 to 100; values outside this range will affect the indicator transform accordingly. If omitted, treated as 0
 * @returns The rendered Progress React element
 */
function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full",
        //Modified Classes
        "border bg-white",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-blue-300 h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }