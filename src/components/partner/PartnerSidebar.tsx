"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Store,
  CalendarDays,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/partner/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    href: "/partner/students",
    icon: Users,
  },
  {
    title: "Vendors",
    href: "/partner/vendors",
    icon: Store,
  },
  {
    title: "Events",
    href: "/partner/events",
    icon: CalendarDays,
  },
  {
    title: "Analytics",
    href: "/partner/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/partner/settings",
    icon: Settings,
  },
];

export default function PartnerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-white">

      <div className="border-b p-8">
        <h1 className="text-3xl font-black">CampusServe</h1>
        <p className="text-sm text-gray-500">Partner Portal</p>
      </div>

      <nav className="flex-1 p-5">

        {menu.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href);

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`mb-2 flex items-center gap-4 rounded-2xl px-5 py-4 ${
                active
                  ? "bg-primary font-semibold text-black"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.title}
            </Link>
          );
        })}

      </nav>

      <div className="border-t p-5">

        <button className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-red-600 hover:bg-red-50">
          <LogOut className="h-5 w-5" />
          Logout
        </button>

      </div>

    </aside>
  );
}