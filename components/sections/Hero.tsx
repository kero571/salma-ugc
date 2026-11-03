import Image from "next/image";
import { ChevronDown, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="hero-h px-page relative overflow-hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
      {/* الصورة: موبايل = خلفية كاملة | ديسكتوب = عمود على اليمين */}
      <div className="absolute inset-0 lg:relative lg:order-2 lg:h-[min(100%,44rem)] lg:overflow-hidden lg:rounded-[2rem] lg:shadow-xl lg:shadow-black/10">
        <Image
          src="/images/salma-hero.webp"
          alt="Salma, beauty and lifestyle content creator, looking back over her shoulder in front of a wall of retro TVs"
          fill priority fetchPriority="high" quality={75} sizes="(min-width: 1024px) 45vw, 100vw"
          className="hero-img object-cover object-[50%_35%]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/80 lg:hidden" />
      </div>

      {/* النص */}
      <div className="relative z-10 flex h-full flex-col justify-between py-5 text-white lg:h-auto lg:justify-center lg:py-0 lg:text-ink">
        <p className="fade-up inline-flex w-fit items-center gap-2.5 rounded-full border border-white/40 bg-white/20 px-4 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] lg:border-ink/10 lg:bg-band">
          <span aria-hidden="true" className="h-4 w-1.5 rounded-sm bg-brand" />
          Skincare · Haircare · Lifestyle
        </p>

        <div className="lg:mt-7">
          <h1 id="hero-title" className="fade-up d1 font-serif text-[2rem] leading-[1.2] lg:text-6xl lg:leading-[1.1]">
            Honest reviews your skin &amp; <em className="text-sky lg:text-[#3f86c2]">hair</em> will thank you for.
          </h1>
          <p className="fade-up d2 mt-2 text-base text-white/90 lg:text-lg lg:text-muted">Salma | Beauty Lifestyle Content Creator</p>

          <div className="fade-up d3 mt-3 flex gap-3 lg:mt-8">
            <a href="#reels" className="flex-1 rounded-full bg-brand px-4 py-3 text-center text-[0.85rem] font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:brightness-110 lg:flex-none lg:px-10">View my work</a>
            <a href="#contact" className="flex-1 rounded-full bg-cream px-4 py-3 text-center text-[0.85rem] font-semibold uppercase tracking-wide text-ink transition hover:-translate-y-0.5 lg:flex-none lg:bg-band lg:px-10">Contact me</a>
          </div>

          <div className="fade-up d4 mt-2 flex items-center justify-between border-t border-white/25 pt-4 text-[0.8rem] text-white/85 lg:border-ink/10 lg:text-muted">
            <span aria-hidden="true" className="flex gap-0.5 text-sky lg:text-[#3f86c2]">
              {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={16} fill="currentColor" />)}
            </span>
            <span>Skincare · Haircare · Reels · Daily Stories</span>
          </div>
          <a href="#about" aria-label="Scroll to about" className="bob mx-auto mt-3 block w-fit lg:hidden">
            <ChevronDown size={22} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
