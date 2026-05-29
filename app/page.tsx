import Link from 'next/link'
import ROICalculator from '@/components/ROICalculator'

const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10 L10 3 L17 10 M5 8.5 V17 H9 V13 H11 V17 H15 V8.5" stroke="#1a6ef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Sales Strategy',
    desc: 'Audit, structure, and rebuild your sales function. CRM, pipeline, cross-sell mapping — or embed us as your fractional sales team.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#1a6ef5" strokeWidth="1.5"/>
        <path d="M7 10 L9 12 L13 8" stroke="#1a6ef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Brand & Website',
    desc: 'Full rebrand in-house. New positioning, identity, website, and marketing collateral — built and owned by you.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="5" width="14" height="10" rx="2" stroke="#1a6ef5" strokeWidth="1.5"/>
        <path d="M7 10 L9 12 L13 8" stroke="#1a6ef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Tech & Systems',
    desc: 'Client portals, online ordering, job management, reporting dashboards. Retain and licence, or build and hand over.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4 H16 V12 H4 Z" stroke="#1a6ef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16 H13 M10 12 V16" stroke="#1a6ef5" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Operations',
    desc: 'Process audits, workflow redesign, margin improvement. We find what\'s leaking profit and fix it.',
  },
]

const metrics = [
  { value: '40+', label: 'Years combined experience' },
  { value: '£10m+', label: 'Revenue grown for clients' },
  { value: '5', label: 'Pillars of growth' },
  { value: '3', label: 'Peer brands in the group' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1a6ef5]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1a6ef5]/10 border border-[#1a6ef5]/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d68f] pulse-dot"></span>
                <span className="text-[#8899bb] text-sm">Growth consultancy for compliance & H&S businesses</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
                <span className="text-white">Human</span>
                <br />
                <span className="gradient-text">intelligence.</span>
                <br />
                <span className="text-white">Real growth.</span>
              </h1>

              <p className="text-[#8899bb] text-lg leading-relaxed mb-8 max-w-lg">
                Most compliance businesses are good at the work — not the growth. Hi-Venture fixes that. Sales strategy, brand, tech, and operations from a team that has lived this sector for decades.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book a discovery call
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/services" className="btn-outline">
                  How we work
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {metrics.map(m => (
                  <div key={m.label}>
                    <div className="text-white font-bold text-xl">{m.value}</div>
                    <div className="text-[#8899bb] text-xs mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <ROICalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="section bg-[#0d1222]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Five pillars. One partner.</h2>
            <p className="text-[#8899bb] max-w-xl mx-auto">
              Growth doesn't come from fixing one thing in isolation. We work across the full commercial stack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map(p => (
              <div key={p.label} className="card p-6">
                <div className="w-10 h-10 rounded-xl bg-[#1a6ef5]/10 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{p.label}</h3>
                <p className="text-[#8899bb] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The problem we solve */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                We are not consultants who have read about compliance. We have lived it.
              </h2>
              <p className="text-[#8899bb] leading-relaxed mb-4">
                Hi-Venture is led by senior operators with 40+ years of combined real-world compliance and sales experience — managing teams, winning clients, building revenue from cold, and running operations in this sector.
              </p>
              <p className="text-[#8899bb] leading-relaxed mb-6">
                We combine that experience with the best of modern technology — AI, automation, and smart systems — to give clients a competitive edge that simply wasn't available before.
              </p>
              <Link href="/about" className="btn-outline">
                About Hi-Venture
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'No sales engine', desc: 'Owner-led sales, reactive pipeline, no structure. Revenue is inconsistent and growth is accidental. We fix that.' },
                { label: 'Untapped wallet share', desc: 'Clients buy one service. The whitespace — additional services they\'re buying elsewhere — is enormous and ignored.' },
                { label: 'Weak brand and systems', desc: 'Dated websites, manual processes, no client portal. Operating below their potential. We change the picture.' },
              ].map(item => (
                <div key={item.label} className="card p-5 flex gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#1a6ef5]/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5 L4 7 L8 3" stroke="#1a6ef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">{item.label}</h4>
                    <p className="text-[#8899bb] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Less than the cost of one hire */}
      <section className="section bg-[#0d1222]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Less than the cost of one hire.<br />None of the risk.
          </h2>
          <p className="text-[#8899bb] mb-8 text-lg max-w-2xl mx-auto">
            A fully-loaded salesperson costs £3,300+/month before you factor in NI, pension, recruitment fees, notice periods, and performance risk. Hi-Venture starts at £299/month — with no fixed overhead and a performance model that means we only win when you do.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pricing" className="btn-primary">See pricing</Link>
            <Link href="/contact" className="btn-outline">Book a free call</Link>
          </div>
        </div>
      </section>
    </>
  )
}
