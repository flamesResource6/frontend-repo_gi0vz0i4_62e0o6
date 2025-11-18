import { Menu, Mail, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-4 py-3 shadow-[0_0_60px_rgba(125,95,255,0.15)]">
          <a href="#top" className="flex items-center gap-3">
            <div className="relative">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500 text-white font-semibold tracking-tight shadow-[0_0_30px_rgba(129,140,248,0.45)]">YC</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm leading-none text-zinc-300">Yarin Cohen</p>
              <p className="text-[11px] text-zinc-400">Founder • Investor • Systems Builder</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#persona" className="text-zinc-300 hover:text-white transition-colors">Persona</a>
            <a href="#ventures" className="text-zinc-300 hover:text-white transition-colors">Ventures</a>
            <a href="#contact" className="text-zinc-300 hover:text-white transition-colors">Contact</a>
            <a href="mailto:hello@yarincohen.com" className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-indigo-200 hover:text-white hover:bg-indigo-500/20 transition-colors">
              <Mail size={16}/> Get in touch
            </a>
            <div className="hidden lg:flex items-center gap-3 pl-3 border-l border-white/10">
              <a href="#" aria-label="X / Twitter" className="text-zinc-400 hover:text-white transition-colors"><Twitter size={18}/></a>
              <a href="#" aria-label="LinkedIn" className="text-zinc-400 hover:text-white transition-colors"><Linkedin size={18}/></a>
            </div>
          </nav>

          <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white">
            <Menu size={18}/>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-4">
            <div className="flex flex-col gap-3 text-sm">
              <a onClick={() => setOpen(false)} href="#persona" className="text-zinc-300 hover:text-white">Persona</a>
              <a onClick={() => setOpen(false)} href="#ventures" className="text-zinc-300 hover:text-white">Ventures</a>
              <a onClick={() => setOpen(false)} href="#contact" className="text-zinc-300 hover:text-white">Contact</a>
              <a onClick={() => setOpen(false)} href="mailto:hello@yarincohen.com" className="inline-flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-indigo-200 hover:text-white hover:bg-indigo-500/20 transition-colors w-fit">
                <Mail size={16}/> Get in touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
