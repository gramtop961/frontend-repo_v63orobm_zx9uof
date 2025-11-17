import { Clock, Truck, ShieldCheck } from 'lucide-react'

function Status() {
  const items = [
    {
      icon: Clock,
      title: 'Estimated time',
      text: 'Most tools will be back online shortly. Check again later today.'
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
    <section id="status" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">What’s happening</h2>
          <p className="mt-2 text-black/70">We’re performing routine upgrades to improve speed, reliability, and checkout performance.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-black/10 p-6 bg-white shadow-sm hover:shadow transition-shadow">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-blue-600 to-red-500 flex items-center justify-center shadow">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-black">{title}</h3>
              <p className="mt-2 text-sm text-black/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Status
