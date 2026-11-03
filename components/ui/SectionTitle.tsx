export default function SectionTitle({ id, label, title }: { id: string; label?: string; title: string }) {
  return (
    <header className="reveal">
      {label && <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-brand">{label}</p>}
      <h2 id={id} className="mt-1 font-serif text-[2rem] font-bold leading-tight text-ink">{title}</h2>
    </header>
  );
}
