import type { ReactNode } from "react";
import PartnerSidebar from "@/components/partner/PartnerSidebar";

export default function PartnerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <PartnerSidebar />

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}