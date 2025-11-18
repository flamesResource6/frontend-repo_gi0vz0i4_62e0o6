export default function Contact(){
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900/60 to-zinc-900/10 p-8 md:p-12 overflow-hidden">
          <div className="pointer-events-none absolute -inset-1 opacity-40 blur-2xl bg-[radial-gradient(600px_300px_at_80%_-20%,rgba(56,189,248,0.25),transparent),radial-gradient(600px_300px_at_20%_120%,rgba(168,85,247,0.25),transparent)]"/>
          <div className="relative grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Keep it quiet. But reach out.</h2>
              <p className="mt-3 text-zinc-300 max-w-md">For founder-to-founder chats, LP interest, or interesting arbitrage. Short, clear intros appreciated.</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                <a href="mailto:hello@yarincohen.com" className="inline-flex items-center justify-center rounded-2xl border border-indigo-500/40 bg-indigo-500/15 px-6 py-3 text-indigo-200 hover:text-white hover:bg-indigo-500/25 transition-colors">hello@yarincohen.com</a>
                <a href="/Yarin-Cohen.pdf" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-zinc-200 hover:text-white hover:bg-white/10 transition-colors">One-pager PDF</a>
              </div>
            </div>
            <div className="md:pl-8">
              <form className="grid grid-cols-1 gap-4">
                <input placeholder="Name" className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-indigo-500/40"/>
                <input placeholder="Email" className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-indigo-500/40"/>
                <textarea rows={4} placeholder="What should we build together?" className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-indigo-500/40"/>
                <button type="button" className="mt-2 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-6 py-3 text-white hover:bg-white/20 transition-colors">Send (opens email)</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
