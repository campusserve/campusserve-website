import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const testimonials = [
  {
    name: "Adebayo T.",
    role: "University Student",
    quote:
      "Having food delivery, hostels and campus shopping in one app will save students so much time.",
  },
  {
    name: "Chioma E.",
    role: "Campus Vendor",
    quote:
      "CampusServe gives vendors an easy way to reach more students without relying only on WhatsApp.",
  },
  {
    name: "Daniel O.",
    role: "Student Entrepreneur",
    quote:
      "This is exactly the type of platform every university community has been waiting for.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-gray-50 py-24 lg:py-32"
    >
      <Container>

        <SectionHeading
          badge="Early Feedback"
          title="Built For"
          highlight="Students & Vendors"
          description="Here's what early users think about CampusServe."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <p className="text-lg leading-8 text-gray-600">
                "{item.quote}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-gray-900">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}