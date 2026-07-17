"use client";

import type { ReactNode } from "react";

type GradientBorderCardProps = {
  children: ReactNode;
  className?: string;
  borderRadius?: string;
};

export default function GradientBorderCard({
  children,
  className = "",
  borderRadius = "rounded-[16px]",
}: GradientBorderCardProps) {
  return (
    <div className={`group relative ${borderRadius} p-[2px] ${className}`}>
      <div
        aria-hidden
        className={`gradient-border-spin pointer-events-none absolute inset-0 ${borderRadius} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className={`relative overflow-hidden ${borderRadius}`}>{children}</div>
    </div>
  );
}
