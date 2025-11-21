import { motion } from 'framer-motion'

const AccountCard = ({ account, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="glass flex flex-col gap-4 rounded-3xl border border-white/10 p-5"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm uppercase tracking-wide text-white/60">{account.type}</p>
        <h3 className="text-2xl font-semibold text-white">{account.name}</h3>
      </div>
      <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-200">{account.region}</span>
    </div>
    <p className="text-3xl font-semibold text-white">{account.balance}</p>
    <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
      <div>
        <p className="text-xs uppercase tracking-wide text-white/40">Flow</p>
        <p className="text-emerald-300">{account.activity}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide text-white/40">Status</p>
        <p>{account.status}</p>
      </div>
    </div>
    <div className={`rounded-2xl bg-gradient-to-r ${account.gradient} px-4 py-3 text-sm text-white`}>
      {account.note}
    </div>
  </motion.div>
)

const AccountShowcase = ({ accounts, onNavigate, onNext }) => (
  <section id="accounts" className="space-y-8">
    <div className="flex flex-col gap-2">
      <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Account universe</p>
      <h2 className="text-3xl font-semibold text-white">Monitor every treasury stack in real time</h2>
      <p className="text-slate-300">
        Instant clarity on balances, rails, and ESG posture across venture, consumer, government, and digital-asset
        accounts.
      </p>
      <div className="flex flex-wrap gap-3">
        <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onNavigate?.('home')}>
          Back home
        </button>
        <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onNavigate?.('segments')}>
          Segments
        </button>
      </div>
    </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {accounts.map((account, index) => (
        <AccountCard key={account.name} account={account} index={index} />
      ))}
    </div>
    <div className="flex flex-wrap gap-3">
      <button className="rounded-2xl border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white" onClick={() => onNavigate?.('dashboard')}>
        View dashboard
      </button>
      <button className="rounded-2xl bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900" onClick={onNext}>
        Continue
      </button>
    </div>
  </section>
)

export default AccountShowcase

