import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Grain + gradient overlays (don't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_30%,rgba(168,85,247,0.18),transparent),radial-gradient(800px_400px_at_80%_70%,rgba(56,189,248,0.14),transparent)]" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.08]" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-40 pb-24">
        <div className="max-w-3xl">
          <p className="text-sm tracking-widest text-zinc-400 uppercase">The Quiet Grind</p>
          <h1 className="mt-3 text-5xl sm:text-7xl font-extrabold tracking-tight text-white">
            Yarin Cohen
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-zinc-300 leading-relaxed">
            Founder, private investor, and systems builder. I design automated engines that turn complexity into compounding outcomes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#ventures" className="inline-flex items-center justify-center rounded-2xl border border-indigo-500/40 bg-indigo-500/15 px-6 py-3 text-indigo-200 hover:text-white hover:bg-indigo-500/25 transition-colors shadow-[0_0_40px_rgba(129,140,248,0.25)]">Explore ventures</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-zinc-200 hover:text-white hover:bg-white/10 transition-colors">Request intro</a>
          </div>
        </div>
      </div>
    </section>
  );
}
