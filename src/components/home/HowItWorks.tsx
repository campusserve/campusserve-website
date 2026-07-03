import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  Search,
  ShoppingCart,
  Bike,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "Find restaurants, hostels, campus stores and trusted services near you.",
  },
  {
    icon: ShoppingCart,
    title: "Order",
    description:
      "Place orders securely through the CampusServe mobile application.",
  },
  {
    icon: Bike,
    title: "Receive",
    description:
      "Track your order in real time and receive it anywhere on campus.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-24 lg:py-32"
    >
      <Container>

        <SectionHeading
          badge="How It Works"
          title="Three Simple"
          highlight="Steps"
          description="CampusServe makes campus life easier in just a few taps."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-2 hover:border-yellow-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100">
                  <Icon className="h-8 w-8 text-yellow-600" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}