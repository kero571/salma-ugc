"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 h-[var(--nav-h)] bg-cream">
      <div className="px-page flex h-full items-center justify-between">
        <a href="#home" className="block" onClick={() => setOpen(false)}>
          <span className="block font-serif text-[1.65rem] font-bold leading-none text-ink">Salma</span>
          <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-brand">Beauty Lifestyle Content Creator</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-[0.85rem] font-semibold uppercase tracking-wider text-ink/80 transition hover:text-brand">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu"
          onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center text-ink lg:hidden"
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="px-page fade-up absolute inset-x-0 top-full bg-cream pb-4 shadow-[0_20px_30px_rgba(0,0,0,0.12)] lg:hidden">
          <ul>
            {NAV.map((n) => (
              <li key={n.id} className="border-b border-ink/10 last:border-0">
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-4 text-[0.9rem] font-semibold uppercase tracking-wider text-ink">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
