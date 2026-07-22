"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";

export default function PartnerPage() {

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    organization: "",
    contact_person: "",
    email: "",
    phone: "",
    message: "",
  });

  async function submit(e: FormEvent) {

    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("partners")
      .insert(form);

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Partnership request submitted.");

    setForm({
      organization: "",
      contact_person: "",
      email: "",
      phone: "",
      message: "",
    });
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">

      <h1 className="text-5xl font-black">
        Partner With CampusServe
      </h1>

      <form
        onSubmit={submit}
        className="mt-12 space-y-5"
      >

        <input
          placeholder="Organization"
          value={form.organization}
          onChange={(e) =>
            setForm({
              ...form,
              organization: e.target.value,
            })
          }
          className="h-14 w-full rounded-2xl border px-5"
        />

        <input
          placeholder="Contact Person"
          value={form.contact_person}
          onChange={(e) =>
            setForm({
              ...form,
              contact_person: e.target.value,
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

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
          className="min-h-40 w-full rounded-2xl border p-5"
        />

        <Button className="h-14 w-full bg-primary text-primary-foreground hover:opacity-90">
          {loading ? "Submitting..." : "Submit Partnership"}
        </Button>

      </form>

    </main>
  );
}