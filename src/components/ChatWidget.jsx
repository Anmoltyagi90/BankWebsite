import { useState } from 'react'

const ChatWidget = ({ isOpen, onToggle, onNavigate }) => {
  const [messages, setMessages] = useState([
    { from: 'lumi', text: 'Hi! I am Lumi, your NeonBank co-pilot. How can I help?' },
  ])
  const [draft, setDraft] = useState('')

  const handleSend = () => {
    if (!draft.trim()) return
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: draft.trim() },
      { from: 'lumi', text: 'Got it! A strategist will follow up shortly.' },
    ])
    setDraft('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-3 w-80 rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl shadow-brand-500/30 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Lumi assistant</p>
              <p className="text-xs text-emerald-300">
                Online ·{' '}
                <button className="underline" onClick={() => onNavigate?.('contact')}>
                  Contact team
                </button>
              </p>
            </div>
            <button className="text-slate-400 hover:text-white" onClick={() => onToggle?.(false)}>
              ✕
            </button>
          </div>
          <div className="mt-4 max-h-60 space-y-3 overflow-y-auto text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`rounded-2xl px-3 py-2 text-sm ${
                  msg.from === 'lumi' ? 'bg-slate-800 text-white' : 'bg-brand-500/80 text-white self-end ml-auto'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-brand-400 focus:outline-none"
              placeholder="Ask Lumi anything..."
            />
            <button className="rounded-2xl bg-white/90 px-3 py-2 text-sm font-semibold text-slate-900" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
      <button
        className="rounded-full bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/40"
        onClick={() => onToggle?.(!isOpen)}
      >
        {isOpen ? 'Hide Lumi' : 'Chat with Lumi'}
      </button>
    </div>
  )
}

export default ChatWidget

