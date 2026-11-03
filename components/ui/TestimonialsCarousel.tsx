"use client";

import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Info } from "lucide-react";
import type { Testimonial } from "@/lib/data";

function Card({ t }: { t: Testimonial }) {
  const ig = t.kind === "instagram";
  return (
    <figure className={`flex h-full flex-col rounded-3xl p-5 shadow-sm ${ig ? "bg-white ring-1 ring-black/5" : "bg-band"}`}>
      <figcaption className="flex items-center gap-3 border-b border-ink/10 pb-3">
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-[0.8rem] font-bold ${
          ig ? "bg-white text-ink ring-2 ring-[#e1306c]" : "bg-wa text-white"}`}>{t.initials}</span>
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-1 truncate font-semibold text-ink">
            {t.name}{ig && <BadgeCheck size={15} className="shrink-0 text-[#2a8fd6]" aria-label="Verified" />}
          </span>
          <span className={`block text-[0.8rem] ${ig ? "text-muted" : "text-[#1fa855]"}`}>{t.status}</span>
        </span>
        {ig && <Info size={18} className="shrink-0 text-muted" aria-hidden="true" />}
      </figcaption>
      <div className="mt-4 flex flex-1 flex-col gap-2.5">
        {t.messages.map((m, i) => (
          <blockquote key={i} className={`max-w-[92%] rounded-2xl px-4 py-3 text-[0.9rem] leading-relaxed text-ink ${ig ? "bg-band" : "bg-white"}`}>{m}</blockquote>
        ))}
        {t.reaction && <span className="w-fit rounded-full bg-white px-2.5 py-1 text-sm ring-1 ring-black/10">{t.reaction}</span>}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-3 text-[0.78rem] text-muted">
        <span className="flex items-center gap-2">
          <i className={`h-2.5 w-2.5 rounded-full ${ig ? "bg-brand" : "bg-wa"}`} />{ig ? "Instagram DM" : "WhatsApp"}
        </span>
        <span>{t.time}</span>
      </div>
    </figure>
  );
}

export default function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  // بنحدد الكارت الظاهر بـ IntersectionObserver بدل scroll handler (أخف على الـ INP)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.i))),
      { root: el, threshold: 0.6 },
    );
    Array.from(el.children).forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  const go = (i: number) =>
    (ref.current?.children[i] as HTMLElement | undefined)?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });

  return (
    <div className="mt-6" role="region" aria-roledescription="carousel" aria-label="Testimonials">
      <ul ref={ref} className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 lg:mx-0 lg:px-0">
        {items.map((t, i) => (
          <li key={i} data-i={i} className="reveal basis-[82%] shrink-0 snap-start sm:basis-[46%] lg:basis-[32%]">
            <Card t={t} />
          </li>
        ))}
      </ul>
      {items.length > 1 && (
        <div className="mt-4 flex items-center justify-center">
          {items.map((_, i) => (
            <button key={i} type="button" onClick={() => go(i)} aria-label={`Go to testimonial ${i + 1}`} aria-current={active === i} className="p-2">
              <span className={`block h-2 rounded-full transition-all ${active === i ? "w-6 bg-brand" : "w-2 bg-ink/20"}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
