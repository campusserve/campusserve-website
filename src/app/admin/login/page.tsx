"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (
      email === "admin@campusserve.ng" &&
      password === "CampusServe123"
    ) {
      document.cookie =
        "campusserve-admin=true; path=/; max-age=86400";

      router.push("/admin");

      return;
    }

    setMessage("Invalid email or password.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-yellow-50 to-white p-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

        <h1 className="text-center text-4xl font-black text-gray-900">
          Admin Login
        </h1>

        <p className="mt-3 text-center text-gray-500">
          CampusServe Administration
        </p>

        {message && (
          <div className="mt-6 rounded-2xl bg-red-50 p-4 text-center font-medium text-red-600">
            {message}
          </div>
        )}

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >
          <div className="relative">

            <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />

            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 w-full rounded-2xl border border-gray-300 pl-12 pr-4 outline-none focus:border-yellow-400"
            />

          </div>

          <div className="relative">

            <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400" />

            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-14 w-full rounded-2xl border border-gray-300 pl-12 pr-4 outline-none focus:border-yellow-400"
            />

          </div>

          <Button className="h-14 w-full rounded-2xl bg-yellow-400 text-lg text-black hover:bg-yellow-500">
            Login
          </Button>

        </form>

        <div className="mt-8 rounded-2xl bg-gray-100 p-4 text-sm text-gray-600">
          <strong>Demo Login</strong>
          <br />
          Email: admin@campusserve.ng
          <br />
          Password: CampusServe123
        </div>

      </div>

    </main>
  );
}