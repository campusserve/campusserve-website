import { ArrowRight, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

export default function FinalCTA() {
  return (
    <section
      id="download"
      className="relative overflow-hidden py-32"
    >
      <Container>

        <div className="relative overflow-hidden rounded-[48px] bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 px-10 py-24 shadow-[0_40px_100px_rgba(250,204,21,0.35)] lg:px-24">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-xl">
              <Smartphone className="h-12 w-12 text-yellow-500" />
            </div>

            <h2 className="mt-10 text-5xl font-black leading-tight text-black lg:text-7xl">
              Ready For
              <br />
              CampusServe?
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-black/75">
              Join thousands of students waiting for Nigeria's most complete
              campus lifestyle platform.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Button
                size="lg"
                className="h-14 rounded-2xl bg-black px-8 text-lg text-white hover:bg-gray-900"
              >
                Join Waitlist

                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="h-14 rounded-2xl bg-white px-8 text-lg text-black hover:bg-gray-100"
              >
                Become a Vendor
              </Button>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}