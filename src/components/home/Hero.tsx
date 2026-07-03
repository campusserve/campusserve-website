import { ArrowRight, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

import Container from "@/components/shared/Container";
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

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              {hero.badge}
            </span>

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

              <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500"
              >
                {hero.primaryButton}

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
              >
                <Store className="mr-2 h-4 w-4" />

                {hero.secondaryButton}
              </Button>

            </div>

            <div className="mt-10">
              <TrustBar />
            </div>

          </div>

          {/* Right */}

          <div className="flex items-center justify-center">

            <PhoneMockup />

          </div>

        </div>
      </Container>
    </section>
  );
}