import { useState } from 'react'
import { motion } from 'framer-motion'

const initialLogin = { email: '', password: '' }
const initialSignup = { name: '', company: '', email: '', phone: '' }

const AuthPortal = ({ onNavigate, onNext }) => {
  const [loginForm, setLoginForm] = useState(initialLogin)
  const [signupForm, setSignupForm] = useState(initialSignup)
  const [toast, setToast] = useState('')

  const handleSubmit = (type) => (event) => {
    event.preventDefault()
    setToast(
      type === 'login'
        ? `Welcome back, ${loginForm.email || 'builder'} — loading immersive cockpit...`
        : `Thanks ${signupForm.name || 'founder'}! A concierge will finish your onboarding in minutes.`,
    )
    if (type === 'login') setLoginForm(initialLogin)
    else setSignupForm(initialSignup)
  }

  return (
    <section id="auth" className="space-y-6 rounded-[32px] border border-white/10 bg-slate-950/70 p-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Users first</p>
        <h2 className="text-3xl font-semibold text-white">Open an account or jump straight into the cockpit</h2>
        <p className="text-slate-300">Security cleared within 8 minutes on average with live biometric verification.</p>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onNavigate?.('home')}>
            Back home
          </button>
          <button className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.3em]" onClick={() => onNavigate?.('segments')}>
            Segments
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit('login')}
          className="glass rounded-3xl border border-white/10 p-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Secure login</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Existing partners</h3>
          <label className="mt-4 block text-sm text-slate-300">
            Work email
            <input
              type="email"
              required
              value={loginForm.email}
              onChange={(e) => setLoginForm((prev) => ({ ...prev, email: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand-400 focus:outline-none"
              placeholder="you@studio.ai"
            />
          </label>
          <label className="mt-4 block text-sm text-slate-300">
            Password
            <input
              type="password"
              required
              value={loginForm.password}
              onChange={(e) => setLoginForm((prev) => ({ ...prev, password: e.target.value }))}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand-400 focus:outline-none"
              placeholder="••••••••"
            />
          </label>
          <button
            type="submit"
            className="mt-5 w-full rounded-2xl bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 px-6 py-3 font-semibold text-white shadow-glow-blue"
          >
            Log in securely
          </button>
          <p className="mt-3 text-center text-xs text-slate-400">Adaptive MFA + device fingerprinting active</p>
        </motion.form>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit('signup')}
          className="glass rounded-3xl border border-white/10 p-6"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-300">New account</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Open a multi-asset vault</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-300">
              Full name
              <input
                required
                value={signupForm.name}
                onChange={(e) => setSignupForm((prev) => ({ ...prev, name: e.target.value }))}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand-400 focus:outline-none"
                placeholder="Zara Stone"
              />
            </label>
            <label className="text-sm text-slate-300">
              Company
              <input
                required
                value={signupForm.company}
                onChange={(e) => setSignupForm((prev) => ({ ...prev, company: e.target.value }))}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand-400 focus:outline-none"
                placeholder="Orbit Labs"
              />
            </label>
            <label className="text-sm text-slate-300">
              Work email
              <input
                type="email"
                required
                value={signupForm.email}
                onChange={(e) => setSignupForm((prev) => ({ ...prev, email: e.target.value }))}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand-400 focus:outline-none"
                placeholder="founder@orbit.io"
              />
            </label>
            <label className="text-sm text-slate-300">
              Phone
              <input
                required
                value={signupForm.phone}
                onChange={(e) => setSignupForm((prev) => ({ ...prev, phone: e.target.value }))}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand-400 focus:outline-none"
                placeholder="+1 555 850 0042"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-2xl border border-white/20 bg-transparent px-6 py-3 font-semibold text-white hover:border-white/60"
          >
            Request instant onboarding
          </button>
          <p className="mt-3 text-center text-xs text-slate-400">SOC 2 Type II · MAS · FCA · FINTRAC coverage</p>
        </motion.form>
      </div>

      {toast && (
        <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          {toast}
        </div>
      )}
      <div className="flex flex-wrap gap-3">
        <button className="rounded-2xl border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white" onClick={() => onNavigate?.('cards')}>
          View cards
        </button>
        <button className="rounded-2xl bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900" onClick={onNext}>
          Continue
        </button>
      </div>
    </section>
  )
}

export default AuthPortal

