import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Status from './components/Status'
import Footer from './components/Footer'

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
    setEmail('')
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Status />
        <section id="notify" className="relative py-16 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(800px_200px_at_10%_20%,rgba(59,130,246,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(600px_160px_at_90%_0%,rgba(239,68,68,0.15),transparent_60%)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold">Be first to know</h2>
              <p className="mt-2 text-white/70">Drop your email and we’ll notify you the moment qetaat is back online.</p>
            </div>
            <div className="mt-6 max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 sm:p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_60px_-20px_rgba(0,0,0,0.6)]">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                />
                <button type="submit" className="rounded-xl bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 text-white font-semibold px-6 py-3 shadow-lg shadow-red-600/20 hover:opacity-95 transition">
                  Notify me
                </button>
              </form>
              <p className="mt-3 text-xs text-white/60">We respect your privacy. No spam — ever.</p>
            </div>

            {submitted && (
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 rounded-lg px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Thanks! You’ll hear from us soon.
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
