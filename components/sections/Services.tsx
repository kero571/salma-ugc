import { BookOpen, FlaskConical, Gem, Video } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { SERVICES } from "@/lib/data";

const icons = { flask: FlaskConical, video: Video, book: BookOpen, gem: Gem };

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="px-page pb-14 pt-6">
      <SectionTitle id="services-title" label="Services" title="What I Do" />
      <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => {
          const Icon = icons[s.icon];
          return (
            <li key={s.title} className="reveal rounded-[1.75rem] border-t-2 border-brand bg-band px-6 py-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-[1.35rem] font-bold leading-snug text-ink">{s.title}</h3>
                <Icon size={22} className="mt-1 shrink-0 text-brand" aria-hidden="true" />
              </div>
              <p className="mt-3 text-[0.95rem] leading-[1.7] text-muted">{s.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
