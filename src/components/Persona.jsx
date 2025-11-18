export default function Persona(){
  const bullets = [
    {tag: 'Tech founder', copy: 'Builds quiet, cash-flowing systems. Zero noise, high signal.'},
    {tag: 'Investor', copy: 'Backs founders who ship. Prefers asymmetric bets and controllable risk.'},
    {tag: 'Poker mindset', copy: 'Edges through patience, data, and discipline. No hero calls.'},
    {tag: 'Automation', copy: 'Bots, scrapers, agents, and pipelines that compound while you sleep.'},
  ]

  return (
    <section id="persona" className="relative py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Persona</h2>
            <p className="mt-3 text-zinc-300 max-w-md">Mysterious on purpose. Results speak. If you know, you know. The focus: leverage code, capital, and character to win long-term games.</p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {bullets.map((b, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/60 to-zinc-900/20 p-5">
                <p className="text-xs tracking-wider uppercase text-zinc-500">{b.tag}</p>
                <p className="mt-2 text-zinc-200">{b.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
