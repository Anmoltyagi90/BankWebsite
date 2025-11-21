import { useState } from 'react'
import Home from './components/Home'
import AccountShowcase from './components/AccountShowcase'
import AuthPortal from './components/AuthPortal'
import CardShowcase from './components/CardShowcase'
import Segments from './components/Segments'
import DashboardShowcase from './components/DashboardShowcase'
import StoriesGrid from './components/StoriesGrid'
import ContactPanel from './components/ContactPanel'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import MobileNav from './components/MobileNav'



const navLinks = [
  { label: 'Home', value: 'home' },
  { label: 'Segments', value: 'segments' },
  { label: 'Accounts', value: 'accounts' },
  { label: 'Dashboard', value: 'dashboard' },
  { label: 'Cards', value: 'cards' },
  { label: 'Stories', value: 'stories' },
  { label: 'Access', value: 'auth' },
  { label: 'Contact', value: 'contact' },
  { label: 'Launch', value: 'cta' },
]

const stats = [
  { label: 'Clients protected', value: '2.1M+' },
  { label: 'Daily transactions', value: '$4.8B' },
  { label: 'Avg. settlement', value: '< 2s' },
]

const features = [
  {
    title: ' real-time treasury',
    description: 'Monitor liquidity, automate sweeps, and unlock instant FX at interbank rates.',
    icon: '⚡️',
  },
  {
    title: 'enterprise-grade security',
    description: 'Zero-knowledge encryption, adaptive MFA, and hardware isolation for every session.',
    icon: '🛡️',
  },
  {
    title: 'AI risk co-pilot',
    description: 'Predict cash exposure, detect anomalies, and receive auto-generated mitigation playbooks.',
    icon: '🧠',
  },
  {
    title: 'global rails',
    description: '99+ currencies, on/off-ramp crypto, and ISO 20022 native messaging in one API.',
    icon: '🌐',
  },
]

const dashboardTiles = [
  {
    label: 'Net worth',
    value: '$8.42M',
    change: '+12.4% mom',
    gradient: 'from-brand-500/80 via-purple-500/70 to-pink-500/70',
  },
  {
    label: 'Credit capacity',
    value: '$2M',
    change: 'pre-approved',
    gradient: 'from-slate-900/70 via-slate-800/70 to-slate-900/70',
  },
  {
    label: 'Carbon impact',
    value: '−32%',
    change: 'ESG aligned',
    gradient: 'from-emerald-500/70 via-emerald-400/60 to-teal-500/60',
  },
]

const quickActions = ['Send capital', 'Schedule FX', 'Issue cards', 'Invite analyst']

const cards = [
  {
    tier: 'Nova Infinite',
    subtitle: 'Private banking tier',
    number: '5290 · 8426 · 9135 · 0048',
    currency: 'USD',
    network: 'VISA',
    gradient: 'from-brand-500 via-purple-500 to-pink-500/80',
    perks: ['Metal', 'Zero FX', 'Carbon offset'],
  },
  {
    tier: 'Lumen Corporate',
    subtitle: 'Treasury orchestration',
    number: '7251 · 9904 · 2175 · 6400',
    currency: 'EUR',
    network: 'MASTERCARD',
    gradient: 'from-slate-900 via-slate-800 to-slate-900',
    perks: ['Programmable', 'Spend guard', 'Apple Pay'],
  },
  {
    tier: 'Orbit Crypto',
    subtitle: 'Multi-rail settlement',
    number: '4400 · 1123 · 7644 · 0088',
    currency: 'USDC',
    network: 'NEON',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    perks: ['Cold storage', 'Dynamic limits', 'DAO ready'],
  },
]

const accounts = [
  {
    name: 'Axiom Robotics',
    type: 'Venture treasury',
    balance: '$3.7M',
    activity: '+$820K today',
    status: 'Risk normal',
    gradient: 'from-brand-500/80 to-purple-500/70',
    note: 'Asia payroll executed with 0.8% savings.',
    region: 'SG',
  },
  {
    name: 'Pulse Health',
    type: 'Healthcare',
    balance: '$12.5M',
    activity: '+$1.1M today',
    status: 'Escrow monitored',
    gradient: 'from-emerald-500/70 to-teal-400/70',
    note: 'AI flagged a 14% reduction in claims.',
    region: 'US',
  },
  {
    name: 'Aurora Studios',
    type: 'Media & IP',
    balance: '€6.2M',
    activity: '−€120K today',
    status: 'Streaming boost',
    gradient: 'from-pink-500/70 to-orange-400/70',
    note: 'Royalty sweep to DeFi vault completed.',
    region: 'EU',
  },
  {
    name: 'Zenith Mobility',
    type: 'EV infra',
    balance: '$28.9M',
    activity: '+$4.3M today',
    status: 'Energy rebate pending',
    gradient: 'from-slate-900/80 to-slate-700/70',
    note: 'Hydrogen grant auto-reconciled in hours.',
    region: 'AE',
  },
  {
    name: 'NRI Global Trust',
    type: 'NRI',
    balance: '₹94.2Cr',
    activity: '+₹3.1Cr today',
    status: 'Compliance cleared',
    gradient: 'from-indigo-500/70 to-sky-500/70',
    note: 'Dual-currency sweep earning 6.1% APY.',
    region: 'IN',
  },
  {
    name: 'Cobalt DAO Vault',
    type: 'Digital assets',
    balance: '₿912',
    activity: '+₿32 today',
    status: 'Multi-sig sync',
    gradient: 'from-cyan-500/70 to-blue-500/70',
    note: 'On-chain audit signed with zk proofs.',
    region: 'Global',
  },
]

const segments = [
  {
    label: 'Personal wealth',
    description:
      'Hyper-personalized private banking with concierge traders, multi-currency vaults, and experiential perks.',
    bullets: ['Metal & NFT cards', 'AI-driven spend co-pilot', 'Family office collaboration'],
    badge: 'Lifestyle + Legacy',
  },
  {
    label: 'NRI + Global citizens',
    description:
      'Seamless cross-border accounts with instant INR ↔ USD corridors and compliant investment gateways.',
    bullets: ['Multi-jurisdiction KYC', 'Property payment rails', 'Realtime tax snapshots'],
    badge: 'Borderless banking',
  },
  {
    label: 'Business & enterprise',
    description: 'Programmable treasury OS for scale-ups, listed companies, and DAOs with full API coverage.',
    bullets: ['ISO 20022 native', 'Composable credit lines', 'Zero-trust security'],
    badge: 'Scale with certainty',
  },
]
const testimonials = [
  {
    quote:
      'NeonBank feels like having a quant, compliance officer, and designer in one. Our treasury reacts in seconds, not hours.',
    author: 'Elena Duarte',
    role: 'CFO, Axiom Robotics',
  },
  {
    quote:
      'The 3D dashboard surfaces risk intuitively. We onboarded 12 markets in a week without touching legacy rails.',
    author: 'Marcus Lin',
    role: 'Head of Payments, Velo Air',
  },
]

const heroImage =
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80&sat=-20'

function App() {
  const year = new Date().getFullYear()
  const [activeSection, setActiveSection] = useState('home')
  const [chatOpen, setChatOpen] = useState(false)

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <Home
            navLinks={navLinks}
            stats={stats}
            features={features}
            quickActions={quickActions}
            heroImage={heroImage}
            onNavigate={setActiveSection}
          />
        )
      case 'segments':
        return (
          <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:px-10 lg:px-12">
            <Segments segments={segments} onNavigate={setActiveSection} onNext={() => setActiveSection('accounts')} />
          </div>
        )
      case 'accounts':
        return (
          <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:px-10 lg:px-12">
            <AccountShowcase accounts={accounts} onNavigate={setActiveSection} onNext={() => setActiveSection('dashboard')} />
          </div>
        )
      case 'dashboard':
        return (
          <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:px-10 lg:px-12">
            <DashboardShowcase
              dashboardTiles={dashboardTiles}
              quickActions={quickActions}
              onNavigate={setActiveSection}
              onNext={() => setActiveSection('cards')}
            />
          </div>
        )
      case 'cards':
        return (
          <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:px-10 lg:px-12">
            <CardShowcase cards={cards} onNavigate={setActiveSection} onNext={() => setActiveSection('stories')} />
          </div>
        )
      case 'stories':
        return (
          <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:px-10 lg:px-12">
            <StoriesGrid testimonials={testimonials} onNavigate={setActiveSection} onNext={() => setActiveSection('auth')} />
          </div>
        )
      case 'auth':
        return (
          <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:px-10 lg:px-12">
            <AuthPortal onNavigate={setActiveSection} onNext={() => setActiveSection('contact')} />
          </div>
        )
      case 'contact':
        return (
          <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:px-10 lg:px-12">
            <ContactPanel
              onNavigate={setActiveSection}
              onNext={() => setActiveSection('cta')}
              onSummonChat={() => setChatOpen(true)}
            />
          </div>
        )
      case 'cta':
        return (
          <div className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:px-10 lg:px-12">
            <FinalCTA onNavigate={setActiveSection} onNext={() => setActiveSection('footer')} />
          </div>
        )
      case 'footer':
        return (
          <Footer year={year} navLinks={navLinks} onNavigate={setActiveSection} />
        )
      default:
        return null
    }
  }

  return (
  <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
    
    <div className="flex-grow">
      {renderSection()}
    </div>

    {/* Mobile bottom nav */}
    <div className="md:hidden">
      <MobileNav activeSection={activeSection} onNavigate={setActiveSection} />
    </div>

    {/* Footer (Desktop only) */}
    <div className="hidden md:block">
      <Footer year={year} navLinks={navLinks} onNavigate={setActiveSection} />
    </div>

    <ChatWidget
      isOpen={chatOpen}
      onToggle={setChatOpen}
      onNavigate={setActiveSection}
    />
  </div>
);



}


export default App
