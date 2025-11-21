import { motion } from 'framer-motion'

const CardShowcase = ({ cards, onNavigate, onNext }) => (
  <section id="cards" className="space-y-8">
    <div className="flex flex-col gap-2">
      <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Signature cards</p>
      <h2 className="text-3xl font-semibold text-white">Program cards that feel cinematic</h2>
      <p className="text-slate-300">
        Metal, carbon-neutral, crypto-ready, and fully programmable via GraphQL. Choose your risk posture per swipe.
      </p>
      <div className="flex flex-wrap gap-3">
        <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onNavigate?.('home')}>
          Back home
        </button>
        <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onNavigate?.('accounts')}>
          Accounts
        </button>
      </div>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, idx) => (
        <motion.div
          key={card.tier}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className={`relative overflow-hidden rounded-[26px] border border-white/5 bg-gradient-to-br ${card.gradient} p-6 text-white shadow-[0_20px_60px_rgba(2,6,23,0.5)]`}
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em]">
            <span>{card.network}</span>
            <span>{card.currency}</span>
          </div>
          <p className="mt-6 text-xl font-semibold">{card.tier}</p>
          <p className="text-sm text-white/70">{card.subtitle}</p>
          <p className="mt-8 text-lg tracking-[0.3em]">{card.number}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/70">
            {card.perks.map((perk) => (
              <span key={perk} className="rounded-full border border-white/20 px-3 py-1">
                {perk}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
    <div className="flex flex-wrap gap-3">
      <button className="rounded-2xl border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white" onClick={() => onNavigate?.('stories')}>
        Client stories
      </button>
      <button className="rounded-2xl bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900" onClick={onNext}>
        Continue
      </button>
    </div>
  </section>
)

export default CardShowcase

