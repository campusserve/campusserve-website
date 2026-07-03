"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    university: "",
    role: "Student",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("waitlist")
      .insert(form);

    if (error) {
      alert(error.message);
    } else {
      alert("🎉 You're on the waitlist!");

      setForm({
        full_name: "",
        email: "",
        university: "",
        role: "Student",
      });
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-xl space-y-5"
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
        className="h-14 w-full rounded-2xl border border-gray-300 px-5 outline-none focus:border-yellow-400"
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
        className="h-14 w-full rounded-2xl border border-gray-300 px-5 outline-none focus:border-yellow-400"
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
        className="h-14 w-full rounded-2xl border border-gray-300 px-5 outline-none focus:border-yellow-400"
      />

      <select
        value={form.role}
        onChange={(e) =>
          setForm({
            ...form,
            role: e.target.value,
          })
        }
        className="h-14 w-full rounded-2xl border border-gray-300 px-5 outline-none focus:border-yellow-400"
      >
        <option>Student</option>
        <option>Vendor</option>
        <option>Rider</option>
      </select>

      <Button
        disabled={loading}
        className="h-14 w-full rounded-2xl bg-yellow-400 text-lg text-black hover:bg-yellow-500"
      >
        {loading ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
}