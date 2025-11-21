import { motion } from 'framer-motion'

const Segments = ({ segments, onNavigate, onNext }) => (
  <section id="segments" className="space-y-10 rounded-[32px] border border-white/5 bg-slate-950/50 p-8">
    <div className="flex flex-col gap-2">
      <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Personal · NRI · Business</p>
      <h2 className="text-3xl font-semibold text-white">Programs built for every orbit</h2>
      <p className="text-slate-300">
        From personal vaults to multinational treasuries, unlock tailored onboarding, underwriting, and compliance flows
        in minutes.
      </p>
      <div className="flex flex-wrap gap-3">
        <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70" onClick={() => onNavigate?.('home')}>
          Back home
        </button>
        <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70" onClick={() => onNavigate?.('accounts')}>
          Accounts
        </button>
      </div>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {segments.map((segment, idx) => (
        <motion.div
          key={segment.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="glass flex h-full flex-col gap-4 rounded-3xl border border-white/10 p-6"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/60">{segment.badge}</span>
          <h3 className="text-2xl font-semibold text-white">{segment.label}</h3>
          <p className="text-sm text-slate-300">{segment.description}</p>
          <ul className="space-y-2 text-sm text-slate-200">
            {segment.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <button
            className="mt-auto rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white"
            onClick={() => onNavigate?.('auth')}
          >
            Explore {segment.label}
          </button>
        </motion.div>
      ))}
    </div>

    <div className="flex flex-wrap gap-3">
      <button className="rounded-2xl border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white" onClick={() => onNavigate?.('accounts')}>
        View accounts
      </button>
      <button className="rounded-2xl bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900" onClick={onNext}>
        Continue
      </button>
    </div>
  </section>
)

export default Segments

