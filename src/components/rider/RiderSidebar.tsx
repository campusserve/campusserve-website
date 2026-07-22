"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  Wallet,
  History,
  User,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/rider/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Deliveries",
    href: "/rider/deliveries",
    icon: Map,
  },
  {
    title: "Earnings",
    href: "/rider/earnings",
    icon: Wallet,
  },
  {
    title: "Wallet",
    href: "/rider/wallet",
    icon: Wallet,
  },
  {
    title: "History",
    href: "/rider/history",
    icon: History,
  },
  {
    title: "Profile",
    href: "/rider/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/rider/settings",
    icon: Settings,
  },
];

export default function RiderSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-white">

      <div className="border-b p-8">

        <h1 className="text-3xl font-black">
          CampusServe
        </h1>

        <p className="text-sm text-gray-500">
          Rider Portal
        </p>

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
              className={`mb-2 flex items-center gap-4 rounded-2xl px-5 py-4 transition ${
                active
                  ? "bg-primary font-semibold text-black"
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

        <button className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-red-600 hover:bg-red-50">
          <LogOut className="h-5 w-5" />
          Logout
        </button>

      </div>

    </aside>
  );
}