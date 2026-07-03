import { ReactNode } from "react";

interface SectionBadgeProps {
  children: ReactNode;
}

export default function SectionBadge({
  children,
}: SectionBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
      {children}
    </span>
  );
}