// Decorative animated background: colored gradient wash, big corner shapes,
// blurred orbs and a faint dot grid.
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft color wash across the whole page */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,color-mix(in_oklab,var(--brand-blue)_30%,transparent),transparent_55%),radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--brand-violet)_32%,transparent),transparent_55%)]" />

      <div className="dot-grid absolute inset-0" />

      {/* Big gradient shapes in the corners */}
      <div className="absolute -top-40 -left-40 size-72 rounded-full blur-xl bg-linear-to-br from-brand-violet to-brand-blue opacity-35 md:size-[28rem] animate-drift" />
      <div className="absolute -bottom-56 -left-48 size-80 rounded-full blur-xl bg-linear-to-tr from-brand-violet to-brand-blue opacity-30 md:size-[30rem] animate-drift-reverse" />

      {/* Blurred glowing orbs */}
      <div className="absolute top-1/4 left-1/3 size-[22rem] rounded-full bg-brand-blue/35 blur-2xl md:size-[32rem] md:blur-3xl animate-drift-reverse" />
      <div className="absolute top-1/4 -right-32 size-[26rem] rounded-full bg-brand-violet/40 blur-2xl md:size-[38rem] md:blur-3xl animate-drift" />
      <div className="absolute -right-20 -bottom-40 size-[24rem] rounded-full bg-brand-blue/30 blur-2xl md:size-[32rem] md:blur-3xl animate-drift-reverse" />
    </div>
  );
}
