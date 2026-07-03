import { ArrowRight, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

import Container from "@/components/shared/Container";
import PhoneMockup from "./PhoneMockup";
import TrustBar from "./TrustBar";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-yellow-50/40 to-white">

      <Container className="py-16 lg:py-20">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              Launching Across Nigerian Campuses
            </span>

<h1 className="mt-8 max-w-2xl text-5xl font-black leading-[1.02] tracking-tight text-gray-900 lg:text-7xl">
              Everything Students Need.

              <span className="mt-2 block text-yellow-500">
                One Platform.
              </span>

            </h1>

            <p className="mt-8 max-w-lg text-lg leading-8 text-gray-600">

              Order food, discover hostels, shop campus stores,
              send packages and connect with trusted student services —
              all from one platform built specifically for university communities.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button
                size="lg"
                className="bg-yellow-400 text-black hover:bg-yellow-500"
              >
                Get Early Access

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
              >
                <Store className="mr-2 h-4 w-4" />

                Become a Vendor
              </Button>

            </div>

            <TrustBar />

          </div>

          {/* Right */}

          <div className="flex justify-center items-center">

            <PhoneMockup />

          </div>

        </div>

      </Container>

    </section>
  );
}