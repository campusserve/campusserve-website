import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";

import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-32"
    >
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <Container className="relative">

        <SectionHeading
          badge="Campus Categories"
          title="Everything You Need."
          highlight="All in One Place."
          description="From food and shopping to hostels, packages, local markets and student services, CampusServe brings everything around your campus together in one simple app."
        />

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <FeatureCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}