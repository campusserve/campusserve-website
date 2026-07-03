import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
}

export default function PrimaryButton({
  children,
  href = "#download",
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="group inline-flex h-14 items-center justify-center rounded-2xl bg-yellow-400 px-8 text-lg font-semibold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-500 hover:shadow-2xl"
    >
      <span>{children}</span>

      <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}