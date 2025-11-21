import { motion } from 'framer-motion'

const StoriesGrid = ({ testimonials, onNavigate, onNext }) => (
  <section className="space-y-8 rounded-[32px] border border-white/10 bg-slate-950/60 p-8">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-brand-300">Trusted by category shifters</p>
        <h2 className="text-3xl font-semibold text-white">Stories from the flight deck</h2>
      </div>
      <button className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:text-white" onClick={() => onNavigate?.('home')}>
        Back home
      </button>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {testimonials.map((item, idx) => (
        <motion.div
          key={item.author}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="glass rounded-3xl border border-white/10 p-6"
        >
          <p className="text-lg text-white">&ldquo;{item.quote}&rdquo;</p>
          <p className="mt-4 text-sm text-slate-300">
            {item.author} · {item.role}
          </p>
        </motion.div>
      ))}
    </div>

    <div className="flex flex-wrap gap-3">
      <button className="rounded-2xl border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white" onClick={() => onNavigate?.('segments')}>
        Segments
      </button>
      <button className="rounded-2xl border border-white/20 px-5 py-2 text-sm text-white/80 hover:text-white" onClick={onNext}>
        Continue
      </button>
    </div>
  </section>
)

export default StoriesGrid

