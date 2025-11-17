import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-stretch overflow-hidden bg-black text-white">
      {/* Background layers */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_70%_10%,rgba(59,130,246,0.3),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_200px_at_20%_20%,rgba(239,68,68,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Futuristic gloss border frame */}
      <div className="pointer-events-none absolute inset-x-0 top-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_40px_120px_-30px_rgba(59,130,246,0.35)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-200/90 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              System Update in Progress
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Rebuilding the future of construction commerce
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
              qetaat is upgrading its core systems for speed, resilience, and next‑gen shopping. Your orders and data are safe.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#notify" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 text-white font-semibold shadow-lg shadow-red-600/20 hover:opacity-95 transition">
                Notify me when we’re back
              </a>
              <a href="#status" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 transition backdrop-blur">
                View live status
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -top-10 -right-10 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/40 to-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-10 h-96 w-96 rounded-full bg-gradient-to-br from-rose-500/30 to-red-500/10 blur-3xl" />
    </section>
  )
}

export default Hero
