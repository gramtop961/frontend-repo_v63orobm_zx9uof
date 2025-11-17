import { Hammer, Wrench } from 'lucide-react'

function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center shadow-md">
            <Hammer className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-black">qetaat</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <span className="text-black/80">Construction E‑commerce</span>
          <div className="flex items-center gap-2 text-blue-700">
            <Wrench className="h-4 w-4" />
            <span>Under Maintenance</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
