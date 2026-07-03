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
      className="relative overflow-hidden bg-gradient-to-br from-white via-yellow-50/30 to-white"
    >
      <Container className="py-12 lg:py-20">

        <div className="grid items-center gap-10 xl:grid-cols-[58%_42%]">

          <div className="max-w-2xl">

            <SectionBadge>
              {hero.badge}
            </SectionBadge>

            <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-gray-900 lg:text-6xl xl:text-7xl">
              {hero.title}

              <span className="mt-3 block whitespace-pre-line text-yellow-500">
                {hero.highlight}
              </span>
            </h1>

            <p className="mt-8 text-xl leading-9 text-gray-600">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <PrimaryButton>
                {hero.primaryButton}
              </PrimaryButton>

              <Button
                variant="outline"
                size="lg"
                className="h-14 rounded-2xl px-8 text-lg"
              >
                <Store className="mr-2 h-5 w-5" />
                {hero.secondaryButton}
              </Button>

            </div>

            <div className="mt-10">
              <TrustBar />
            </div>

          </div>

          <div className="flex justify-center xl:justify-end">
            <PhoneMockup />
          </div>

        </div>

      </Container>
    </section>
  );
}