"use client";

import { FormEvent, useEffect, useState } from "react";
import { CheckCircle2, Loader2, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    university: "",
    role: "Student",
  });

  useEffect(() => {
    loadCount();
  }, []);

  async function loadCount() {
    const { count } = await supabase
      .from("waitlist")
      .select("*", {
        count: "exact",
        head: true,
      });

    setCount(count ?? 0);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase
      .from("waitlist")
      .insert(form);

    setLoading(false);

    if (error) {
      if (error.message.toLowerCase().includes("duplicate")) {
        setMessage("⚠️ This email is already on our waitlist.");
      } else {
        setMessage("❌ Something went wrong. Please try again.");
      }
      return;
    }

    setJoined(true);

    setForm({
      full_name: "",
      email: "",
      university: "",
      role: "Student",
    });

    loadCount();
  }

  if (joined) {
    return (
      <div className="mx-auto mt-10 max-w-xl rounded-3xl bg-white p-10 text-center shadow-2xl">

        <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />

        <h3 className="mt-6 text-3xl font-black text-gray-900">
          You're In! 🎉
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          Thanks for joining the CampusServe waitlist.
          We'll notify you before launch.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-5 py-3 text-sm font-semibold text-yellow-700">

          <Users className="h-5 w-5" />

          {count} people have joined

        </div>

      </div>
    );
  }

  return (
    <>
      <div className="mb-8 flex justify-center">

        <div className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-2xl">

          <Users className="h-5 w-5" />

          {count} people already joined

        </div>

      </div>

      {message && (
        <div className="mx-auto mb-6 max-w-xl rounded-2xl border border-yellow-200 bg-white p-4 text-center font-medium text-yellow-800 shadow-lg">
          {message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 max-w-xl space-y-6"
      >

        <input
          required
          placeholder="Full Name"
          value={form.full_name}
          onChange={(e) =>
            setForm({
              ...form,
              full_name: e.target.value,
            })
          }
          className="h-16 w-full rounded-2xl border border-white bg-white px-6 text-lg text-gray-900 placeholder:text-gray-500 shadow-xl outline-none transition-all duration-300 focus:-translate-y-0.5 focus:ring-4 focus:ring-white/40"
        />

        <input
          required
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          className="h-16 w-full rounded-2xl border border-white bg-white px-6 text-lg text-gray-900 placeholder:text-gray-500 shadow-xl outline-none transition-all duration-300 focus:-translate-y-0.5 focus:ring-4 focus:ring-white/40"
        />

        <input
          required
          placeholder="University"
          value={form.university}
          onChange={(e) =>
            setForm({
              ...form,
              university: e.target.value,
            })
          }
          className="h-16 w-full rounded-2xl border border-white bg-white px-6 text-lg text-gray-900 placeholder:text-gray-500 shadow-xl outline-none transition-all duration-300 focus:-translate-y-0.5 focus:ring-4 focus:ring-white/40"
        />

        <select
          value={form.role}
          onChange={(e) =>
            setForm({
              ...form,
              role: e.target.value,
            })
          }
          className="h-16 w-full rounded-2xl border border-white bg-white px-6 text-lg text-gray-900 shadow-xl outline-none transition-all duration-300 focus:-translate-y-0.5 focus:ring-4 focus:ring-white/40"
        >
          <option>Student</option>
          <option>Vendor</option>
          <option>Rider</option>
        </select>

        <Button
          disabled={loading}
          className="h-16 w-full rounded-2xl bg-gradient-to-r from-yellow-300 to-amber-400 text-xl font-extrabold text-black shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:from-yellow-400 hover:to-orange-400 hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Joining...
            </>
          ) : (
            "Join Waitlist"
          )}
        </Button>

      </form>
    </>
  );
}