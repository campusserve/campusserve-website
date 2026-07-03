import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
}

export default function PrimaryButton({
  children,
}: PrimaryButtonProps) {
  return (
    <Button
      size="lg"
      className="h-14 rounded-2xl bg-yellow-400 px-8 text-base font-semibold text-black shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-500 hover:shadow-xl"
    >
      {children}

      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  );
}