export function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-36 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-[30rem] w-[30rem] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -right-20 top-1/3 h-[26rem] w-[26rem] rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_55%,transparent_95%)]" />
    </div>
  );
}
