import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const testimonials = [
  {
    name: "Adebayo T.",
    role: "University Student",
    avatar: "AT",
    quote:
      "Finally a platform that understands student life. Everything I need is in one place.",
  },
  {
    name: "Chioma E.",
    role: "Campus Vendor",
    avatar: "CE",
    quote:
      "CampusServe will make it easier to reach students without relying only on WhatsApp.",
  },
  {
    name: "Daniel O.",
    role: "Student Entrepreneur",
    avatar: "DO",
    quote:
      "This is the future of commerce on Nigerian campuses. Clean, simple and fast.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-gray-50 to-white py-32"
    >
      <Container>

        <SectionHeading
          badge="Testimonials"
          title="Loved By"
          highlight="Students & Vendors"
          description="CampusServe is being built with direct feedback from university communities."
        />

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-black">
                  {item.avatar}
                </div>

                <div>

                  <h3 className="font-bold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>

                </div>

              </div>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                “{item.quote}”
              </p>

              <div className="mt-8 flex text-yellow-400 text-xl">
                ★★★★★
              </div>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}