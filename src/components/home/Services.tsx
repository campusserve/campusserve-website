import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/shared/FeatureCard";
import Container from "@/components/shared/Container";

import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-24 lg:py-32"
    >
      <Container>

        <SectionHeading
          badge="Everything You Need"
          title="Campus Life"
          highlight="Made Simple"
          description="CampusServe brings every essential student service together in one mobile application."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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