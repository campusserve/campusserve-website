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
      className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background"
    >
      <Container className="py-10 sm:py-12 lg:py-20">

        <div className="grid items-center gap-12 xl:grid-cols-[58%_42%]">

          <div className="max-w-3xl">

            <SectionBadge>
              {hero.badge}
            </SectionBadge>

            <h1 className="mt-8 text-4xl font-black leading-[0.95] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              {hero.title}

              <span className="mt-3 block whitespace-pre-line text-primary">
                {hero.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:mt-8 sm:text-xl sm:leading-9">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">

              <PrimaryButton>
                {hero.primaryButton}
              </PrimaryButton>

              <Button
                variant="outline"
                size="lg"
                className="h-14 rounded-2xl border-primary/20 px-8 text-lg text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Store className="mr-2 h-5 w-5" />
                {hero.secondaryButton}
              </Button>

            </div>

            <div className="mt-8 sm:mt-10">
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