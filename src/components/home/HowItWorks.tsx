import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  Search,
  ShoppingCart,
  Bike,
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Discover",
    description:
      "Browse restaurants, hostels, campus stores and verified student services around your school.",
  },
  {
    step: "02",
    icon: ShoppingCart,
    title: "Order",
    description:
      "Choose what you need and complete your order securely through the CampusServe mobile app.",
  },
  {
    step: "03",
    icon: Bike,
    title: "Delivered",
    description:
      "Track your order in real time until it reaches your hostel, lecture hall or preferred pickup point.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-32"
    >
      <Container>

        <SectionHeading
          badge="Simple Process"
          title="How CampusServe"
          highlight="Works"
          description="From searching to delivery, everything takes just a few taps."
        />

        <div className="relative mt-24 grid gap-8 lg:grid-cols-3">

          <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.step}
                className="relative rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute -top-6 left-10 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-lg font-black text-black shadow-lg">
                  {step.step}
                </div>

                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100">
                  <Icon className="h-8 w-8 text-yellow-700" />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
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