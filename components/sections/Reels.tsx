import { ArrowUpRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ReelCard from "@/components/ui/ReelCard";
import { REEL_COVER, REELS } from "@/lib/data";
import { INSTAGRAM } from "@/lib/site";

export default function Reels() {
  return (
    <section id="reels" aria-labelledby="reels-title" className="px-page pb-14">
      <SectionTitle id="reels-title" title="My Latest Reels" />
      <ul className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {REELS.map((r, i) => (
          <li key={r.src} className="reveal">
            <ReelCard src={r.src} poster={r.poster ?? REEL_COVER} index={i} />
          </li>
        ))}
      </ul>
      <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
        className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-ink px-8 py-3.5 text-[0.85rem] font-semibold uppercase tracking-wide text-ink transition hover:bg-ink hover:text-cream">
        See more on Instagram <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </section>
  );
}