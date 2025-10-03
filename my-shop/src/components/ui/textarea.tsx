import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Render a styled textarea element that accepts standard textarea props and merges custom classes.
 *
 * @param className - Additional CSS classes to append to the component's computed class list
 * @returns A textarea DOM element with the component's styling, merged `className`, and all provided props applied
 */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        //Modified Classes
        "md:text-base bg-white",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }