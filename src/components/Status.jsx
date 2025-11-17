import { Clock, Truck, ShieldCheck } from 'lucide-react'

function Status() {
  const items = [
    {
      icon: Clock,
      title: 'Estimated time',
      text: 'Most tools will be back online soon. Check again later today.'
    },
    {
      icon: Truck,
      title: 'Orders & delivery',
      text: 'Existing orders are safe and on track. You will receive updates as usual.'
    },
    {
      icon: ShieldCheck,
      title: 'Your data',
      text: 'Protected with industry‑standard security. No action needed from you.'
    }
  ]

  return (
    <section id="status" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Status</h2>
          <p className="mt-2 text-white/70">We’re upgrading our infrastructure to improve speed, reliability, and checkout performance.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_60px_-20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_30px_80px_-20px_rgba(0,0,0,0.55)] transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center shadow">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{text}</p>
              <div className="pointer-events-none absolute -inset-px rounded-2xl border border-transparent [mask:linear-gradient(#000,transparent)] bg-gradient-to-b from-white/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Status
