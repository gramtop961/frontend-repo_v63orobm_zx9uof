function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_160px_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/70">© {new Date().getFullYear()} qetaat. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-white/80">
          <a href="#status" className="hover:text-white transition-colors">Status</a>
          <a href="#notify" className="hover:text-white transition-colors">Notify me</a>
          <a href="/test" className="hover:text-white transition-colors">System check</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
