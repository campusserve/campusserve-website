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
          badge="Everything Students Need"
          title="One App."
          highlight="Every Campus Service."
          description="Whether you're hungry, looking for accommodation, shopping, or sending a package, CampusServe connects you with trusted vendors around your campus."
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