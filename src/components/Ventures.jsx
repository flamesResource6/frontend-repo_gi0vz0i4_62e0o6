export default function Ventures(){
  const ventures = [
    {name: 'Stealth AI Ops', desc: 'Automation frameworks that orchestrate agents for leadgen, research, and outreach.', tag: 'Automation'},
    {name: 'Quiet Capital', desc: 'Private checks into cashflow internet businesses and quirky software.', tag: 'Investments'},
    {name: 'Edge Labs', desc: 'Rapid experiments in bots, scrapers, growth engines and arbitrage.', tag: 'R&D'},
  ]

  return (
    <section id="ventures" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ventures</h2>
            <p className="mt-3 text-zinc-300">A rotating portfolio. Built quietly, optimized aggressively.</p>
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-xs text-zinc-500">Select highlights</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {ventures.map((v, i) => (
            <div key={i} className="group relative rounded-2xl border border-white/10 bg-zinc-900/40 p-6 overflow-hidden">
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(500px_200px_at_50%_-20%,rgba(129,140,248,0.25),transparent)]"/>
              <div className="flex items-center justify-between">
                <span className="text-[11px] tracking-wider uppercase text-indigo-300/80 bg-indigo-500/10 border border-indigo-400/20 rounded-full px-2 py-1">{v.tag}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{v.name}</h3>
              <p className="mt-2 text-zinc-300">{v.desc}</p>
              <div className="mt-6">
                <a href="#contact" className="text-sm text-indigo-300 hover:text-white">Request a deck →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
