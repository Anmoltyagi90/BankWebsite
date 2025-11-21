const Footer = ({ year, navLinks, onNavigate }) => (
  <footer className="border-t border-white/5 bg-slate-950/80 py-12 text-sm text-slate-300">
    <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1.2fr_1fr_1fr] md:px-10 lg:px-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-lg font-semibold text-white">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-brand-500 to-purple-500 shadow-glow-blue" />
          NeonBank
        </div>
        <p className="text-slate-400">Cinematic banking infrastructure for bold builders.</p>
        <p className="text-xs text-slate-500">Regulated in 42 jurisdictions · SOC 2 Type II</p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Navigate</p>
        <ul className="mt-3 space-y-2">
          {navLinks.map((link) => (
            <li key={link.value}>
              <button
                type="button"
                onClick={() => onNavigate?.(link.value)}
                className="bg-transparent text-left text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Contact</p>
        <ul className="mt-3 space-y-2">
          <li>concierge@neonbank.io</li>
          <li>+1 (415) 555-0144</li>
          <li>24/7 immersive support desk</li>
        </ul>
        <button className="mt-4 w-full rounded-2xl border border-white/15 px-4 py-2 text-white/80 hover:text-white" onClick={() => onNavigate?.('auth')}>
          Join waitlist
        </button>
      </div>
    </div>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <p className="text-center text-xs text-slate-500">© {year} NeonBank. All rights reserved.</p>
      <button className="rounded-full border border-white/15 px-4 py-1 text-xs text-white/70" onClick={() => onNavigate?.('home')}>
        Back home
      </button>
    </div>
  </footer>
)

export default Footer

