import type { ReactNode } from "react";

import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <main className="flex-1 overflow-y-auto">

        <div className="p-10">
          {children}
        </div>

      </main>

    </div>
  );
}