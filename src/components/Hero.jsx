import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white pointer-events-none" />

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-700 bg-blue-50 ring-1 ring-blue-200/60 px-2.5 py-1.5 rounded-full mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              System Notice
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-black">
              We’re polishing the shop floor
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-black/70 leading-relaxed">
              qetaat is undergoing scheduled maintenance to bring you a faster, sturdier experience. Thanks for your patience while we tighten a few bolts.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#notify" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition-colors">
                Notify me when back
              </a>
              <a href="#status" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-black text-white font-semibold shadow hover:bg-black/90 transition-colors">
                View status
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
