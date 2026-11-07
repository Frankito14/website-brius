import React from "react";

export function PlusMark({ className = "size-3 shrink-0" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 2.5V9.5M2.5 6H9.5" />
    </svg>
  );
}
