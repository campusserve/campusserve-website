"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Users,
  GraduationCap,
  Store,
  Bike,
  Search,
  Download,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

type WaitlistUser = {
  id: string;
  full_name: string;
  email: string;
  university: string;
  role: string;
  created_at: string;
};

export default function AdminPage() {
  const [users, setUsers] = useState<WaitlistUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const { data } = await supabase
      .from("waitlist")
      .select("*")
      .order("created_at", { ascending: false });

    setUsers(data ?? []);
    setLoading(false);
  }

  const filtered = useMemo(() => {
    return users.filter((u) => {
      const q = search.toLowerCase();

      return (
        u.full_name.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q) ||
        u.university.toLowerCase().includes(q) ||
        u.role.toLowerCase().includes(q)
      );
    });
  }, [users, search]);

  function exportCSV() {
    const rows = [
      [
        "Name",
        "Email",
        "University",
        "Role",
        "Joined",
      ],
      ...filtered.map((u) => [
        u.full_name,
        u.email,
        u.university,
        u.role,
        new Date(u.created_at).toLocaleString(),
      ]),
    ];

    const csv = rows
      .map((r) => r.join(","))
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "campusserve-waitlist.csv";

    link.click();

    URL.revokeObjectURL(url);
  }

  const students = users.filter(
    (u) => u.role === "Student"
  ).length;

  const vendors = users.filter(
    (u) => u.role === "Vendor"
  ).length;

  const riders = users.filter(
    (u) => u.role === "Rider"
  ).length;

  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-wrap items-center justify-between gap-4">

          <div>

            <h1 className="text-5xl font-black">
              CampusServe Admin
            </h1>

            <p className="mt-2 text-gray-500">
              Waitlist Dashboard
            </p>

          </div>

          <button
            onClick={exportCSV}
            className="flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            <Download className="h-5 w-5" />

            Export CSV

          </button>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">

          <Card
            title="Total"
            value={users.length}
            icon={<Users className="h-6 w-6" />}
          />

          <Card
            title="Students"
            value={students}
            icon={<GraduationCap className="h-6 w-6" />}
          />

          <Card
            title="Vendors"
            value={vendors}
            icon={<Store className="h-6 w-6" />}
          />

          <Card
            title="Riders"
            value={riders}
            icon={<Bike className="h-6 w-6" />}
          />

        </div>

        <div className="mt-10 rounded-3xl bg-white p-6 shadow">

          <div className="relative mb-6">

            <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />

            <input
              placeholder="Search..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="h-14 w-full rounded-2xl border border-gray-300 pl-12 pr-4 outline-none focus:border-primary"
            />

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="border-b bg-gray-50">

                <tr>

                  <th className="p-4 text-left">
                    Name
                  </th>

                  <th className="p-4 text-left">
                    Email
                  </th>

                  <th className="p-4 text-left">
                    University
                  </th>

                  <th className="p-4 text-left">
                    Role
                  </th>

                  <th className="p-4 text-left">
                    Joined
                  </th>

                </tr>

              </thead>

              <tbody>

                {loading ? (
                  <tr>

                    <td
                      colSpan={5}
                      className="p-10 text-center"
                    >
                      Loading...
                    </td>

                  </tr>
                ) : (
                  filtered.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="p-4 font-medium">
                        {user.full_name}
                      </td>

                      <td className="p-4">
                        {user.email}
                      </td>

                      <td className="p-4">
                        {user.university}
                      </td>

                      <td className="p-4">

                        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                          {user.role}
                        </span>

                      </td>

                      <td className="p-4 text-gray-500">
                        {new Date(
                          user.created_at
                        ).toLocaleDateString()}
                      </td>

                    </tr>
                  ))
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </main>
  );
}

function Card({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-4xl font-black">
            {value}
          </h2>

        </div>

        <div className="rounded-2xl bg-primary/10 p-4 text-primary">
          {icon}
        </div>

      </div>

    </div>
  );
}