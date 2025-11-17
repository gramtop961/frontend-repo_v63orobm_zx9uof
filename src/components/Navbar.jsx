import { Hammer } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_-10px_rgba(0,0,0,0.6)]">
          <div className="h-14 flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-red-500" />
                <div className="absolute inset-0 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Hammer className="h-5 w-5" />
                </div>
              </div>
              <span className="text-lg font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">qetaat</span>
              <span className="hidden sm:inline-flex items-center text-xs font-medium text-blue-200/80 px-2 py-1 rounded-full border border-blue-300/20 bg-blue-500/10">Under Maintenance</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-sm text-white/70">
              <a href="#status" className="hover:text-white transition-colors">Status</a>
              <a href="#notify" className="hover:text-white transition-colors">Notify</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
