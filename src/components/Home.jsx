import { motion } from 'framer-motion'
import HeroCanvas from './HeroCanvas'

const variants = {
  fadeUp: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
  fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1 } },
}

const cardSpotlight = {
  tier: 'Neon Prestige ∞',
  number: '6034 · 8800 · 1935 · 4421',
  limit: '$500K instant',
  perks: ['Dynamic FX shield', 'Biometric approvals', 'ESG carbon offset'],
}

const galleryImages = [
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
]

const Home = ({ navLinks, stats, features, quickActions, heroImage, onNavigate }) => (
  <div id="home" className="relative overflow-hidden bg-slate-950 pb-32 pt-8">
    <div className="pointer-events-none absolute inset-0 opacity-70">
      <div className="absolute inset-0 bg-grid-glow bg-[length:360px_360px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-950/60 to-slate-950" />
    </div>

    <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-10 lg:px-12">
      <motion.header
        initial="initial"
        animate="animate"
        variants={variants.fadeIn}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-center gap-4 border border-white/5 bg-slate-900/40 px-4 py-3 text-sm shadow-2xl shadow-slate-900/40 backdrop-blur lg:rounded-full"
      >
        <div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-brand-500 to-purple-500 shadow-glow-blue" />
          NeonBank
        </div>
        <nav className="mx-auto flex flex-1 justify-center gap-6 text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.value}
              type="button"
              onClick={() => onNavigate?.(link.value)}
              className="bg-transparent text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-full border border-white/20 px-4 py-2 text-white hover:border-white">Log in</button>
          <button className="rounded-full bg-white px-4 py-2 font-semibold text-slate-900 hover:bg-slate-200">
            Launch app
          </button>
        </div>
      </motion.header>

      <section className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div {...variants.fadeUp} transition={{ duration: 0.8 }} className="space-y-8">
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
            Quantum-secured digital bank
          </p>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Finance that moves{' '}
              <span className="bg-gradient-to-r from-brand-400 to-purple-400 bg-clip-text text-transparent">
                as fast as your ambition
              </span>
            </h1>
            <p className="text-lg text-slate-300">
              Build intelligent treasuries, orchestrate global payments, and watch capital flow through a living 3D
              cockpit built with Three.js. No branches. No lag. Just instant clarity.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              className="rounded-2xl bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 px-6 py-3 text-base font-semibold text-white shadow-glow-blue transition hover:opacity-90"
              onClick={() => onNavigate?.('auth')}
            >
              Book a live tour
            </button>
            <button
              className="rounded-2xl border border-white/20 px-6 py-3 text-base font-semibold text-white/80 hover:border-white hover:text-white"
              onClick={() => onNavigate?.('segments')}
            >
              Download deck
            </button>
          </div>
          <div className="flex flex-wrap gap-6 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p>{stat.label}</p>
              </div>
            ))}
            <div>
              <p className="text-2xl font-semibold text-white">380+</p>
              <p>Partners launched</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">11</p>
              <p>Regulators aligned</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onNavigate?.('segments')}>
              Programs
            </button>
            <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onNavigate?.('accounts')}>
              Accounts
            </button>
            <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onNavigate?.('cards')}>
              Cards
            </button>
            <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onNavigate?.('dashboard')}>
              Dashboard
            </button>
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
            className="relative rounded-[32px] border border-white/5 bg-slate-950/40 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.7)]"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/10" />
            <HeroCanvas />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/50"
          >
            <img src={heroImage} alt="Client onboarding session" className="h-64 w-full object-cover object-center" />
            <div className="p-5 text-sm text-slate-200">
              <p className="font-semibold text-white">Human + AI concierge</p>
              <p className="mt-1 text-slate-300">
                24/7 multilingual coverage with biometric verification and instant escalation into the immersive
                dashboard.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="space-y-8" id="products">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Intelligence suite</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Every signal on a single glass surface</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Forecast cash, orchestrate automation, and benchmark teams with real-time telemetry streamed from your ERP,
              PSP, and blockchain nodes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {quickActions.map((action) => (
              <button
                key={action}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:text-white"
                onClick={() => onNavigate?.('dashboard')}
              >
                {action}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass gradient-border relative overflow-hidden rounded-3xl p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold capitalize text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{feature.description}</p>
              <div className="mt-6 flex items-center gap-2 text-sm text-brand-200">
                Explore docs
                <span aria-hidden="true">↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>

    <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 md:px-10 lg:px-12">
      <section className="grid gap-10 rounded-[36px] border border-white/10 bg-slate-950/70 p-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Card spotlight</p>
          <h2 className="text-3xl font-semibold text-white">Issue cinematic metal in minutes</h2>
          <p className="text-slate-300">
            The Neon Prestige card fuses quantum-safe tokenization, programmable spend guardrails, and carbon-neutral
            fulfillment. Swipe in 130 currencies with auto FX hedging.
          </p>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-glow-blue">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.5em] text-white/60">
              <span>NeonBank</span>
              <span>VISA</span>
            </div>
            <p className="mt-8 text-2xl font-semibold text-white">{cardSpotlight.tier}</p>
            <p className="text-lg tracking-[0.4em] text-white/70">{cardSpotlight.number}</p>
            <div className="mt-6 text-sm text-slate-200">
              <p className="font-semibold text-white">Limit · {cardSpotlight.limit}</p>
              <ul className="mt-3 space-y-2">
                {cardSpotlight.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="rounded-2xl bg-white px-5 py-2 text-sm font-semibold text-slate-900" onClick={() => onNavigate?.('cards')}>
                Customize program
              </button>
              <button className="rounded-2xl border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white" onClick={() => onNavigate?.('auth')}>
                Issue instantly
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {galleryImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Neon gallery ${idx + 1}`}
              className={`h-56 w-full rounded-3xl object-cover ${idx === 1 ? 'md:translate-y-6' : ''}`}
            />
          ))}
          <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 text-sm text-slate-200">
            <p className="text-lg font-semibold text-white">Immersive lobbies</p>
            <p>
              Host clients inside private 3D briefing suites with live renders of their capital stack powered by Three.js
              scenes.
            </p>
            <button className="mt-4 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onNavigate?.('dashboard')}>
              Preview dashboard
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-[36px] border border-white/10 bg-gradient-to-br from-brand-500/10 via-purple-500/10 to-pink-500/10 p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Immersion hubs</p>
            <h2 className="text-3xl font-semibold text-white">Visit the Neon experience centers</h2>
            <p className="text-slate-100/80">
              Touch the future of banking in Mumbai, Dubai, and San Francisco. Holographic cards, VR treasury maps, and
              concierge onboarding await.
            </p>
          </div>
          <button className="rounded-full border border-white/30 px-5 py-2 text-sm text-white/80 hover:text-white" onClick={() => onNavigate?.('contact')}>
            Book a visit
          </button>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {['Mumbai · NRI lab', 'Dubai · Future of FX', 'San Francisco · AI risk lounge'].map((label) => (
            <div key={label} className="rounded-3xl border border-white/20 bg-slate-900/60 p-5 text-white/90">
              {label}
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
)

export default Home

