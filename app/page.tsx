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
    desc: 'Pipeline architecture, team structure, and close-rate improvement that compound over time.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#1a6ef5" strokeWidth="1.5"/>
        <path d="M7 10 L9 12 L13 8" stroke="#1a6ef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Brand & Website',
    desc: 'Identity and digital presence built for credibility with B2B buyers from day one.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="5" width="14" height="10" rx="2" stroke="#1a6ef5" strokeWidth="1.5"/>
        <path d="M7 10 L9 12 L13 8" stroke="#1a6ef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Tech & Systems',
    desc: 'CRM, automation, and AI tools that reduce friction and free your team to sell.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4 H16 V12 H4 Z" stroke="#1a6ef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16 H13 M10 12 V16" stroke="#1a6ef5" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Operations',
    desc: 'Processes, reporting, and hiring frameworks that scale without breaking.',
  },
]

const metrics = [
  { value: '£6.9m→£10m', label: 'Revenue grown' },
  { value: '10→22', label: 'Services scaled' },
  { value: '+51%', label: 'AOV increase' },
  { value: '15+', label: 'Team managed' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1a6ef5]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#1a6ef5]/10 border border-[#1a6ef5]/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d68f] pulse-dot"></span>
                <span className="text-[#8899bb] text-sm">UK Sales & Growth Consultancy</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
                <span className="text-white">Human</span>
                <br />
                <span className="gradient-text">intelligence.</span>
                <br />
                <span className="text-white">Real growth.</span>
              </h1>

              <p className="text-[#8899bb] text-lg leading-relaxed mb-8 max-w-lg">
                Hi-Venture helps UK SMEs in compliance, H&S, and B2B services build sales engines that actually work — with the systems, strategy, and hands-on expertise to back it up.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book a call
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/services" className="btn-outline">
                  How we work
                </Link>
              </div>

              {/* Metrics */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {metrics.map(m => (
                  <div key={m.label}>
                    <div className="text-white font-bold text-xl">{m.value}</div>
                    <div className="text-[#8899bb] text-xs mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: ROI Calculator */}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Four pillars of growth</h2>
            <p className="text-[#8899bb] max-w-xl mx-auto">
              We work across the full commercial stack — not just one corner of it.
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

      {/* Why Hi-Venture */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Built by someone who's done it, not just advised on it
              </h2>
              <p className="text-[#8899bb] leading-relaxed mb-4">
                Hi-Venture is led by a senior commercial operator who has grown a compliance business from £6.9m to £10m, managed a 15-person sales team, and built scalable processes across 22 service lines.
              </p>
              <p className="text-[#8899bb] leading-relaxed mb-6">
                This isn't generic consultancy. Every engagement is hands-on, data-driven, and specific to your market and team.
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
                { label: 'Compliance & H&S sector expertise', desc: 'Deep knowledge of how these buyers think, what they need, and where revenue hides.' },
                { label: 'Operator background, not just theory', desc: 'Salesperson of the Year, exceeded target 41 of 44 months, grew team revenue substantially.' },
                { label: 'Flexible engagement model', desc: 'Retainer, % of GP, or hybrid — aligned to your budget and how you work best.' },
              ].map(item => (
                <div key={item.label} className="card p-5 flex gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#00d68f]/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5 L4 7 L8 3" stroke="#00d68f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

      {/* CTA banner */}
      <section className="section bg-[#0d1222]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to grow?</h2>
          <p className="text-[#8899bb] mb-8 text-lg">
            Book a free 30-minute discovery call. No pitch, no pressure — just a direct conversation about where your sales are now and where they could be.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book a free call
            </Link>
            <Link href="/pricing" className="btn-outline">
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
