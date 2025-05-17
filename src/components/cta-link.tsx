"use client";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import Link from "next/link";

export function CtaLink({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <Link
      href="https://app.midday.ai"
      className={cn(
        "font-medium text-sm flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden xl:flex",
        className
      )}
    >
      <span>{text}</span>
      <Icons.ArrowOutward />
    </Link>
  );
}
