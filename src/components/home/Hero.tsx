import { Store } from "lucide-react";

import { Button } from "@/components/ui/button";

import Container from "@/components/shared/Container";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SectionBadge from "@/components/shared/SectionBadge";

import PhoneMockup from "./PhoneMockup";
import TrustBar from "./TrustBar";

import { hero } from "@/data/hero";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-white via-yellow-50/40 to-white"
    >
      <Container className="py-16 lg:py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <SectionBadge>
              {hero.badge}
            </SectionBadge>

            <h1 className="mt-8 max-w-2xl text-5xl font-black leading-[1.02] tracking-tight text-gray-900 lg:text-7xl">
              {hero.title}

              <span className="mt-2 block text-yellow-500">
                {hero.highlight}
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-gray-600">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <PrimaryButton>
                {hero.primaryButton}
              </PrimaryButton>

              <Button
                variant="outline"
                size="lg"
                className="h-14 rounded-2xl px-8"
              >
                <Store className="mr-2 h-5 w-5" />
                {hero.secondaryButton}
              </Button>

            </div>

            <TrustBar />

          </div>

          <div className="flex items-center justify-center">
            <PhoneMockup />
          </div>

        </div>
      </Container>
    </section>
  );
}