import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | Hi-Venture',
  description: 'Sales strategy, brand, tech, and operations consulting for UK SMEs in compliance and B2B services.',
}

const services = [
  {
    id: 'sales-strategy',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 17 L8 12 L12 14 L21 5" stroke="#1a6ef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 5 H21 V10" stroke="#1a6ef5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Sales Strategy',
    tagline: 'Build a pipeline that compounds',
    desc: 'From diagnosis to architecture — we design and implement the sales engine your business needs to grow consistently.',
    bullets: [
      'Sales process audit and gap analysis',
      'Pipeline architecture and stage definition',
      'Close rate and conversion optimisation',
      'Cross-sell and upsell programme design',
      'Pricing and proposal strategy',
      'CRM and activity framework setup',
    ],
    accent: '#1a6ef5',
  },
  {
    id: 'brand-website',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="14" rx="2" stroke="#00d68f" strokeWidth="1.5"/>
        <path d="M7 21 H17 M12 17 V21" stroke="#00d68f" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 9 L10 12 L14 8 L17 11" stroke="#00d68f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Brand & Website',
    tagline: 'Show up like a business that wins',
    desc: 'B2B buyers judge credibility fast. We build brand identity and digital presence that earns trust before the first call.',
    bullets: [
      'Brand identity and messaging development',
      'Website design and build (Next.js)',
      'Positioning and value proposition',
      'Proposal and pitch deck templates',
      'Social and content strategy',
      'Email and nurture sequence design',
    ],
    accent: '#00d68f',
  },
  {
    id: 'tech-systems',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#4d9fff" strokeWidth="1.5"/>
        <path d="M8 7 V5 C8 3.9 8.9 3 10 3 H14 C15.1 3 16 3.9 16 5 V7" stroke="#4d9fff" strokeWidth="1.5"/>
        <path d="M9 13 L11 15 L15 11" stroke="#4d9fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Tech & Systems',
    tagline: 'Less friction. More selling.',
    desc: 'The right tools, properly implemented. CRM, automation, AI, and reporting — set up to make your team faster, not busier.',
    bullets: [
      'CRM selection, setup and adoption',
      'Sales automation and workflow design',
      'AI tools integration and prompting',
      'Reporting and KPI dashboard build',
      'Proposal and quoting system setup',
      'Tech stack audit and consolidation',
    ],
    accent: '#4d9fff',
  },
  {
    id: 'operations',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3 L21 7.5 V16.5 L12 21 L3 16.5 V7.5 Z" stroke="#f0a500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3 V21 M3 7.5 L12 12 L21 7.5" stroke="#f0a500" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Operations',
    tagline: 'Scale without the chaos',
    desc: 'Processes, team structure, and hiring frameworks designed to grow headcount and revenue without losing quality or control.',
    bullets: [
      'Sales team structure and role design',
      'Onboarding and training programme build',
      'Performance management framework',
      'Hiring brief and interview process design',
      'Service delivery and ops process mapping',
      'Compliance and H&S operations support',
    ],
    accent: '#f0a500',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1a6ef5]/10 border border-[#1a6ef5]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#8899bb] text-sm">What we do</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Four pillars. One commercial engine.
          </h1>
          <p className="text-[#8899bb] text-lg max-w-2xl mx-auto">
            Hi-Venture works across sales strategy, brand, tech, and operations — because growth doesn't come from fixing one thing in isolation.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${s.accent}15`, border: `1px solid ${s.accent}25` }}>
                  {s.icon}
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">{s.title}</h2>
                <p className="font-medium mb-3" style={{ color: s.accent }}>{s.tagline}</p>
                <p className="text-[#8899bb] leading-relaxed">{s.desc}</p>
              </div>

              <div className={`card p-6 ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h3 className="text-white font-semibold text-sm mb-4">What's included</h3>
                <ul className="space-y-3">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-start gap-3">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0">
                        <path d="M2 7 L5 10 L12 3" stroke={s.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[#8899bb] text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sector focus */}
      <section className="section bg-[#0d1222]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Built for compliance and B2B services</h2>
              <p className="text-[#8899bb] leading-relaxed mb-4">
                Most sales consultancies are generalists. Hi-Venture's lead expertise sits in workplace compliance, health & safety, and UK B2B services — which means we understand your buyer, your sales cycle, and your operational constraints.
              </p>
              <p className="text-[#8899bb] leading-relaxed">
                We've sold PAT testing, fire risk assessments, legionella, COSHH, ELT, DSE, and more. We know where the whitespace is, what the objections sound like, and how to structure a recurring revenue model.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['PAT Testing', 'Fire Risk Assessment', 'Legionella', 'Electrical', 'Emergency Lighting', 'COSHH', 'DSE', 'H&S Consulting'].map(s => (
                <div key={s} className="card p-3 text-sm text-[#8899bb] text-center">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure where to start?</h2>
          <p className="text-[#8899bb] mb-8">Book a free discovery call. We'll diagnose the biggest opportunity in your business in 30 minutes.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Book a free call</Link>
            <Link href="/pricing" className="btn-outline">View pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
