import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import { TESTIMONIALS, type Testimonial } from "@/lib/data";

// عينة تظهر في وضع التطوير بس (npm run dev) عشان تشوف الشكل. مش بتتنشر.
const SAMPLE: Testimonial[] = [0, 1, 2, 3].map((i) => ({
  kind: i % 2 ? "whatsapp" : "instagram", initials: "AB", name: "sample_name", status: i % 2 ? "online" : "Active 1h ago",
  messages: ["Sample message. This appears in development mode only.", "Replace it with a real message from a client."], time: "Yesterday 4:18 PM",
}));

export default function Testimonials() {
  const items = TESTIMONIALS.length ? TESTIMONIALS : process.env.NODE_ENV === "development" ? SAMPLE : [];
  if (!items.length) return null;
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="border-t border-ink/10 px-page py-14">
      <SectionTitle id="testimonials-title" label="Testimonials & Trust" title="What Brands & Audience Say" />
      <TestimonialsCarousel items={items} />
    </section>
  );
}
