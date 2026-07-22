"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Download", href: "#download" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/90 shadow-lg backdrop-blur-xl"
            : "bg-background/80 backdrop-blur-lg"
        }`}
      >
        <Container>

          <div className="flex h-[88px] items-center justify-between">

            <Link
              href="/"
              className="flex items-center"
            >
              <Image
                src="/images/logo.png"
                alt="CampusServe"
                width={260}
                height={80}
                priority
                className="h-16 w-auto object-contain xl:h-14"
              />
            </Link>

            <nav className="hidden items-center gap-10 xl:flex">

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-base font-medium text-muted-foreground transition hover:text-foreground after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {item.name}
                </Link>
              ))}

            </nav>

            <div className="hidden xl:block">

              <Button className="rounded-2xl bg-primary px-8 text-primary-foreground hover:opacity-90">
                Join Waitlist
              </Button>

            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-xl p-3 transition hover:bg-muted xl:hidden"
            >
              <Menu className="h-8 w-8" />
            </button>

          </div>

        </Container>
      </header>

      <div className="h-[88px]" />

      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 xl:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-card shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-5">

            <Image
              src="/images/logo.png"
              alt="CampusServe"
              width={220}
              height={70}
              className="h-11 w-auto object-contain"
            />

            <button
              onClick={() => setMobileOpen(false)}
              className="rounded-xl p-2 transition hover:bg-muted"
            >
              <X className="h-7 w-7" />
            </button>

          </div>

          <nav className="flex flex-col p-6">

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-4 text-lg font-medium text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}

            <Button className="mt-8 h-12 rounded-2xl bg-primary text-primary-foreground hover:opacity-90">
              Join Waitlist
            </Button>

          </nav>

        </div>

      </div>
    </>
  );
}