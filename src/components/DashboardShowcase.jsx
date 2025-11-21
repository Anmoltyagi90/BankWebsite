import { motion } from 'framer-motion'

const DashboardShowcase = ({ dashboardTiles, quickActions, onNavigate, onNext }) => (
  <section className="space-y-10 rounded-[32px] border border-white/10 bg-slate-950/70 p-8">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Immersive dashboard</p>
        <h2 className="text-3xl font-semibold text-white">Command capital in 3D</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Explore liquidity corridors, detect anomalies, and approve flows with cinematic clarity. Drag, zoom, and orbit
          to inspect every account stack rendered in Three.js.
        </p>
      </div>
      <div className="flex gap-2">
        <button className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70" onClick={() => onNavigate?.('home')}>
          Back home
        </button>
        <button className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70" onClick={() => onNavigate?.('segments')}>
          Segments
        </button>
      </div>
    </div>

    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="glass rounded-[32px] border border-white/10 p-6">
        <div className="flex items-center justify-between text-sm text-slate-300">
          <p>Liquidity universe</p>
          <p className="text-emerald-300">Safe mode on</p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {dashboardTiles.map((tile) => (
            <motion.div
              key={tile.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-3xl bg-gradient-to-br ${tile.gradient} p-4 text-white`}
            >
              <p className="text-sm uppercase tracking-wide text-white/70">{tile.label}</p>
              <p className="mt-3 text-3xl font-semibold">{tile.value}</p>
              <p className="text-sm text-white/80">{tile.change}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
          <p className="text-sm text-slate-300">Cash runway</p>
          <div className="mt-4 h-2 rounded-full bg-slate-800">
            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-400 via-brand-400 to-pink-400 shadow-glow-blue" />
          </div>
          <div className="mt-3 flex justify-between text-xs text-slate-400">
            <span>0</span>
            <span>9 months</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="glass rounded-[28px] border border-white/10 p-6">
          <p className="text-sm text-slate-300">Workflow queue</p>
          <div className="mt-4 space-y-4">
            {quickActions.map((task, idx) => (
              <div key={task} className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-900/40 px-4 py-3">
                <span className="text-white">{task}</span>
                <span className="text-xs text-slate-400">+{idx * 4 + 8} mins saved</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-[28px] border border-white/10 p-6">
          <p className="text-sm text-slate-300">Realtime alerts</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-200">
            <li>• FX hedge executed at 0.6 bps inside target.</li>
            <li>• Singapore vault replenished via instant USDC bridge.</li>
            <li>• Three suspicious logins auto-sandboxed.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap gap-3">
      <button className="rounded-2xl border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white" onClick={() => onNavigate?.('accounts')}>
        View accounts
      </button>
      <button className="rounded-2xl border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white" onClick={() => onNavigate?.('cards')}>
        See cards
      </button>
      <button className="rounded-2xl bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900" onClick={onNext}>
        Continue
      </button>
    </div>
  </section>
)

export default DashboardShowcase

