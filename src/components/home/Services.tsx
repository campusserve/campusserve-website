import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionHeading
          badge="Our Services"
          title="Everything You Need Around Campus"
          subtitle="CampusServe brings together everyday campus services into one trusted platform built specifically for students, vendors and riders."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <FeatureCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}