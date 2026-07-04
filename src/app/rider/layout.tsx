import type { ReactNode } from "react";
import RiderSidebar from "@/components/rider/RiderSidebar";

export default function RiderLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <RiderSidebar />

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}