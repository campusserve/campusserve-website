import Container from "@/components/shared/Container";
import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section
      id="download"
      className="py-32"
    >
      <Container>

        <div className="rounded-[48px] bg-gradient-to-br from-primary via-orange-500 to-orange-600 px-8 py-24 shadow-2xl lg:px-20">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-black">
              🚀 Launching Soon
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-black lg:text-6xl">
              Join The CampusServe
              <br />
              Waitlist
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-black/75">
              Be among the first students, vendors and riders to experience
              CampusServe when we launch.
            </p>

            <WaitlistForm />

          </div>

        </div>

      </Container>
    </section>
  );
}