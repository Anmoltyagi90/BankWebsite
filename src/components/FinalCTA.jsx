const FinalCTA = ({ onNavigate, onNext }) => (
  <section className="rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/80 p-10 text-center shadow-2xl shadow-slate-900/60">
    <p className="text-sm uppercase tracking-[0.3em] text-brand-200">Next-gen capital stack</p>
    <h2 className="mt-4 text-3xl font-semibold text-white">Launch your immersive bank cockpit in less than 48 hours</h2>
    <p className="mt-3 text-base text-slate-300">
      Modular APIs, responsive support, and cinematic dashboards that make even regulators smile.
    </p>
    <div className="mt-6 flex flex-wrap justify-center gap-4">
      <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900" onClick={() => onNavigate?.('auth')}>
        Start onboarding
      </button>
      <button className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white/80 hover:text-white" onClick={() => onNavigate?.('stories')}>
        Talk to sales
      </button>
      <button className="rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white/80 hover:text-white" onClick={onNext}>
        Continue
      </button>
    </div>
  </section>
)

export default FinalCTA

