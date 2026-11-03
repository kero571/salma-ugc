import { BRANDS } from "@/lib/data";

const REPEAT = 4;

export default function Brands() {
  const group = Array.from({ length: REPEAT }, () => BRANDS).flat();
  return (
    <section aria-label="Brands I've worked with" className="bg-band py-6">
      <p className="text-center text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted">Brands I&apos;ve worked with</p>
      <ul className="sr-only">{BRANDS.map((b) => <li key={b}>{b}</li>)}</ul>
      <div className="marquee mt-4 overflow-hidden" aria-hidden="true">
        <div className="marquee-track flex w-max">
          {[0, 1].map((g) => (
            <ul key={g} className="flex shrink-0 items-center">
              {group.map((b, i) => (
                <li key={`${g}-${i}`} className="flex items-center">
                  <span className="whitespace-nowrap font-serif text-[1.1rem] font-bold uppercase tracking-wider text-ink">{b}</span>
                  <span className="mx-7 h-4 w-1.5 rounded-sm bg-brand/70" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
