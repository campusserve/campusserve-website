"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

export default function RiderPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    university: "",
    vehicle: "",
  });

  async function submit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("riders")
      .insert(form);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Application submitted.");

    setForm({
      full_name: "",
      email: "",
      phone: "",
      university: "",
      vehicle: "",
    });
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">

      <h1 className="text-5xl font-black">
        Become a Rider
      </h1>

      <form
        onSubmit={submit}
        className="mt-12 space-y-5"
      >

        {[
          ["Full Name", "full_name"],
          ["Email", "email"],
          ["Phone", "phone"],
          ["University", "university"],
          ["Vehicle", "vehicle"],
        ].map(([label, key]) => (
          <input
            key={key}
            placeholder={label}
            value={(form as any)[key]}
            onChange={(e) =>
              setForm({
                ...form,
                [key]: e.target.value,
              })
            }
            className="h-14 w-full rounded-2xl border px-5"
          />
        ))}

        <Button className="h-14 w-full bg-primary text-primary-foreground hover:opacity-90">
          {loading ? "Submitting..." : "Submit Application"}
        </Button>

      </form>

    </main>
  );
}