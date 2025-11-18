import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Persona from './components/Persona'
import Ventures from './components/Ventures'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background glow frame */}
      <div className="pointer-events-none fixed inset-0 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute inset-0 bg-[conic-gradient(at_30%_10%,#0ea5e9_0deg,#7c3aed_120deg,#0ea5e9_240deg,#7c3aed_360deg)] opacity-[0.06]"/>
      </div>

      <Navbar/>
      <main>
        <Hero/>
        <Persona/>
        <Ventures/>
        <Contact/>
      </main>

      <footer className="relative py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Yarin Cohen. All rights reserved.</p>
          <p>Discipline > Motivation</p>
        </div>
      </footer>
    </div>
  )
}

export default App
