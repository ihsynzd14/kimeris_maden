export default function PageHero({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <section className="border-b border-hairline bg-paper">
      <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-20 md:pb-20 md:pt-24 lg:px-12">
        <h1 className="max-w-[18ch] font-display text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink">
          {title}
        </h1>
        <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted">
          {intro}
        </p>
      </div>
    </section>
  );
}
