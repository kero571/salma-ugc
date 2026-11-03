import { STATS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-page py-14">
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="about-title" className="reveal font-serif text-[2rem] leading-tight text-ink">
          Hi, I&apos;m <em className="text-brand">Salma</em>
        </h2>
        <p className="reveal mt-3 text-[1.02rem] leading-[1.8] text-muted">
          A beauty &amp; lifestyle content creator devoted to honest rituals. With an obsession for skincare science and haircare restoration, I test products thoroughly to share sincere, high-retention reviews. Through cinematic Reels and candid daily stories, I empower an engaged community to make confident beauty choices.
        </p>
      </div>
      <dl className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 lg:max-w-5xl lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="reveal flex flex-col items-center justify-center rounded-3xl bg-band px-3 py-6 text-center transition hover:-translate-y-1">
            <dd className="font-serif text-[2.4rem] font-bold leading-none text-brand">{s.value}</dd>
            <dt className="mt-3 text-[0.9rem] font-medium leading-snug text-ink/80">{s.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
