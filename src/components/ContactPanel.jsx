import { useState } from 'react'
import { motion } from 'framer-motion'

const initialForm = { name: '', email: '', company: '', message: '' }

const ContactPanel = ({ onNavigate, onNext, onSummonChat }) => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus(`Thanks ${form.name || 'founder'} — our team will reach out within minutes.`)
    setForm(initialForm)
  }

  return (
    <section className="space-y-8 rounded-[32px] border border-white/10 bg-slate-950/70 p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Contact us</p>
          <h2 className="text-3xl font-semibold text-white">Speak with a NeonBank strategist</h2>
          <p className="text-slate-300">
            London · Singapore · San Francisco desks available 24/7. No call centers—just capital experts.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onNavigate?.('home')}>
            Back home
          </button>
          <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onNavigate?.('auth')}>
            Login
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass rounded-3xl border border-white/10 p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-300">
              Full name
              <input
                required
                value={form.name}
                onChange={handleChange('name')}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand-400 focus:outline-none"
                placeholder="Anaya Kapoor"
              />
            </label>
            <label className="text-sm text-slate-300">
              Company
              <input
                required
                value={form.company}
                onChange={handleChange('company')}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand-400 focus:outline-none"
                placeholder="Stellar Mobility"
              />
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-300">
              Work email
              <input
                type="email"
                required
                value={form.email}
                onChange={handleChange('email')}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand-400 focus:outline-none"
                placeholder="ceo@stellar.ai"
              />
            </label>
            <label className="text-sm text-slate-300">
              Preferred channel
              <select
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand-400 focus:outline-none"
                onChange={handleChange('channel')}
              >
                <option className="bg-slate-900">Video call</option>
                <option className="bg-slate-900">Secure chat</option>
                <option className="bg-slate-900">On-site briefing</option>
              </select>
            </label>
          </div>
          <label className="mt-4 block text-sm text-slate-300">
            Tell us about your vision
            <textarea
              required
              value={form.message}
              onChange={handleChange('message')}
              className="mt-2 h-32 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand-400 focus:outline-none"
              placeholder="Merge NRI wealth, corporate treasury, and tokenized assets into one cockpit..."
            />
          </label>
          <button type="submit" className="mt-5 w-full rounded-2xl bg-white/95 px-6 py-3 font-semibold text-slate-900">
            Request callback
          </button>
          {status && <p className="mt-3 text-sm text-emerald-300">{status}</p>}
        </motion.form>

        <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Global desks</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>🇬🇧 London · +44 20 8068 4200</li>
              <li>🇸🇬 Singapore · +65 3165 9080</li>
              <li>🇺🇸 San Francisco · +1 415 555 0144</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Secure channels</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>concierge@neonbank.io</li>
              <li>Signal · @neonbank.exec</li>
              <li>Telegram · t.me/neonbankhq</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-4 text-sm text-slate-300">
            <p className="font-semibold text-white">Need instant help?</p>
            <p>Ping the Lumi assistant in the bottom corner or call the secure hotline.</p>
            <button className="mt-3 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onSummonChat?.()}>
              Summon Lumi
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button className="rounded-2xl border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white" onClick={() => onNavigate?.('cta')}>
          View launch plan
        </button>
        <button className="rounded-2xl bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900" onClick={onNext}>
          Continue
        </button>
      </div>
    </section>
  )
}

export default ContactPanel

