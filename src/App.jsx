import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Status from './components/Status'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Status />
        <section id="notify" className="bg-gradient-to-br from-blue-50 via-white to-red-50 border-y border-black/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold">Get a heads‑up</h2>
              <p className="mt-2 text-black/70">Leave your email and we’ll ping you as soon as qetaat is back.</p>
            </div>
            <form className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl">
              <input type="email" required placeholder="you@company.com" className="flex-1 rounded-md border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button type="submit" className="rounded-md bg-red-600 text-white font-semibold px-6 py-3 shadow hover:bg-red-700 transition-colors">Notify me</button>
            </form>
            <p className="mt-3 text-xs text-black/60">We respect your privacy. No spam — ever.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
