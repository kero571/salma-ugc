import { Instagram, MessageCircle } from "lucide-react";
import { TikTokIcon } from "@/components/ui/Icons";
import { INSTAGRAM, TIKTOK, WHATSAPP } from "@/lib/site";

const socials = [
  { label: "TikTok", href: TIKTOK, icon: <TikTokIcon size={20} /> },
  { label: "Instagram", href: INSTAGRAM, icon: <Instagram size={20} aria-hidden="true" /> },
];

export default function Contact() {
  return (
    <div className="bg-band">
      <section id="contact" aria-labelledby="contact-title" className="px-page pb-10 pt-14 text-center">
        <div className="mx-auto max-w-xl">
          <h2 id="contact-title" className="reveal font-serif text-[1.95rem] font-bold leading-[1.25] text-ink">Ready to create something amazing together?</h2>
          <p className="reveal mx-auto mt-3 max-w-sm text-[1rem] leading-relaxed text-muted">Let&apos;s bring your brand story to life through tactile beauty content.</p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="reveal mt-7 flex items-center justify-center gap-2.5 rounded-full bg-wa px-8 py-5 text-[1rem] font-bold text-white shadow-lg shadow-wa/30 transition hover:-translate-y-0.5 hover:brightness-105">
            <MessageCircle size={20} aria-hidden="true" />Chat on WhatsApp
          </a>
          <ul className="mt-6 flex justify-center gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer me"
                  className="grid h-12 w-12 place-items-center rounded-full bg-cream text-ink transition hover:-translate-y-0.5 hover:text-brand">{s.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <footer className="px-page pb-10">
        <p className="mx-auto max-w-3xl border-t border-ink/10 pt-8 text-center text-[0.85rem] tracking-wide text-muted">© {new Date().getFullYear()} Salma. All rights reserved.</p>
      </footer>
    </div>
  );
}
