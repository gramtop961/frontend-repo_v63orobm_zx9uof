function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/80">© {new Date().getFullYear()} qetaat. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#status" className="hover:text-blue-300 transition-colors">Status</a>
          <a href="#notify" className="hover:text-blue-300 transition-colors">Notify me</a>
          <a href="/test" className="hover:text-blue-300 transition-colors">System check</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
