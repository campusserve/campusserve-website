"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

export default function VendorPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    business_name: "",
    owner_name: "",
    email: "",
    phone: "",
    university: "",
    category: "",
  });

  async function submit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("vendors")
      .insert(form);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Application submitted.");

    setForm({
      business_name: "",
      owner_name: "",
      email: "",
      phone: "",
      university: "",
      category: "",
    });
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">

      <h1 className="text-5xl font-black">
        Become a Vendor
      </h1>

      <form
        onSubmit={submit}
        className="mt-12 space-y-5"
      >

        <input
          placeholder="Business Name"
          value={form.business_name}
          onChange={(e) =>
            setForm({
              ...form,
              business_name: e.target.value,
            })
          }
          className="h-14 w-full rounded-2xl border px-5"
        />

        <input
          placeholder="Owner Name"
          value={form.owner_name}
          onChange={(e) =>
            setForm({
              ...form,
              owner_name: e.target.value,
            })
          }
          className="h-14 w-full rounded-2xl border px-5"
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          className="h-14 w-full rounded-2xl border px-5"
        />

        <input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
          className="h-14 w-full rounded-2xl border px-5"
        />

        <input
          placeholder="University"
          value={form.university}
          onChange={(e) =>
            setForm({
              ...form,
              university: e.target.value,
            })
          }
          className="h-14 w-full rounded-2xl border px-5"
        />

        <input
          placeholder="Business Category"
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
          className="h-14 w-full rounded-2xl border px-5"
        />

        <Button className="h-14 w-full bg-primary text-primary-foreground hover:opacity-90">
          {loading ? "Submitting..." : "Submit Application"}
        </Button>

      </form>

    </main>
  );
}