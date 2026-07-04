import type { ReactNode } from "react";
import VendorSidebar from "@/components/vendor/VendorSidebar";

export default function VendorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <VendorSidebar />

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}