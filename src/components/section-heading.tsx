type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-mono text-xs tracking-[0.28em] text-zinc-400">{eyebrow}</p>
      <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base text-zinc-400 md:text-lg">{description}</p> : null}
    </div>
  );
}
