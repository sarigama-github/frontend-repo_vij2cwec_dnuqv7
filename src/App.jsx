import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-extrabold text-xl tracking-tight">
            Glide
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-200/80">
            <a href="#learn" className="hover:text-white">Why Glide</a>
            <a href="#buy" className="hover:text-white">Buy</a>
            <a href="/test" className="hover:text-white">System</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-blue-200/70 text-sm">
          © {new Date().getFullYear()} Glide by Flames. Safe is sexy.
        </div>
      </footer>
    </div>
  )
}

export default App
