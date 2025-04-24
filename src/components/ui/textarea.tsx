import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input focus:border-pink-400 placeholder:text-muted-foreground focus-visible:ring-ring/50 focus:border-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border px-3 py-2 text-base  transition-[color,box-shadow] outline-none  disabled:cursor-not-allowed disabled:opacity-50",

        "md:text-base, bg-white",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
