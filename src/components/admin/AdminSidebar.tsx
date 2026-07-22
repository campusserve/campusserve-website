"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Store,
  Bike,
  BarChart3,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Vendors",
    href: "/admin/vendors",
    icon: Store,
  },
  {
    title: "Riders",
    href: "/admin/riders",
    icon: Bike,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Reports",
    href: "/admin/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  function logout() {
    document.cookie = "campusserve-admin=; Max-Age=0; path=/";
    window.location.href = "/admin/login";
  }

  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-white">

      <div className="border-b p-8">

        <h1 className="text-3xl font-black">
          CampusServe
        </h1>

        <p className="text-sm text-gray-500">
          Admin Portal
        </p>

      </div>

      <nav className="flex-1 p-5">

        {menu.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`mb-2 flex items-center gap-4 rounded-2xl px-5 py-4 transition ${
                active
                  ? "bg-primary font-semibold text-primary-foreground"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.title}
            </Link>
          );
        })}

      </nav>

      <div className="border-t p-5">

        <button
          onClick={logout}
          className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-red-600 transition hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>

      </div>

    </aside>
  );
}