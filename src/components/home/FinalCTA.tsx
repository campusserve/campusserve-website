import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

export default function FinalCTA() {
  return (
    <section
      id="download"
      className="bg-yellow-400 py-24"
    >
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-black text-black lg:text-5xl">
            Your Campus.
            <br />
            In Your Pocket.
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/80">
            Join thousands of students waiting for CampusServe to launch across
            Nigerian universities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button
              size="lg"
              className="bg-black px-8 text-white hover:bg-gray-900"
            >
              Join Waitlist
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-black bg-transparent px-8 text-black hover:bg-black hover:text-white"
            >
              Become a Vendor
            </Button>

          </div>

        </div>

      </Container>
    </section>
  );
}