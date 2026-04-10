export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="noise-mask absolute inset-0 opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_38%)]" />
      <div className="mesh-1 absolute left-[-8rem] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-cyan-400/18 blur-3xl" />
      <div className="mesh-2 absolute right-[-8rem] top-[8rem] h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/14 blur-3xl" />
      <div className="mesh-3 absolute bottom-[-10rem] left-[35%] h-[28rem] w-[28rem] rounded-full bg-sky-500/14 blur-3xl" />
      <div className="mesh-4 absolute bottom-[8rem] right-[20%] h-[18rem] w-[18rem] rounded-full bg-emerald-400/12 blur-3xl" />
      <div className="spotlight absolute left-1/2 top-[10rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-white/6 blur-3xl" />
    </div>
  );
}
