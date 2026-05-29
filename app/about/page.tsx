import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Hi-Venture',
  description: 'Hi-Venture is led by senior compliance and sales operators with 40+ years of combined real-world experience.',
}

const qualifications = [
  'NEBOSH General Certificate',
  'IOSH Managing Safely',
  'Fire Risk Assessment',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#1a6ef5]/10 border border-[#1a6ef5]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#8899bb] text-sm">About Hi-Venture</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Operator-led.<br />
              <span className="gradient-text">Results-first.</span>
            </h1>
            <p className="text-[#8899bb] text-lg leading-relaxed">
              Hi-Venture exists because most sales consultants have never actually built and run a commercial team in a compliance or B2B services business. We have.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">The background</h2>
              <div className="space-y-4 text-[#8899bb] leading-relaxed">
                <p>
                  Hi-Venture is founded by senior operators with over 40 years of combined hands-on experience in UK compliance, health & safety, and B2B sales — spanning individual selling, team management, pricing strategy, product expansion, process design, and commercial technology.
                </p>
                <p>
                  We have managed sales teams, won clients from cold, built recurring revenue models, and run the operational side of compliance businesses. This isn't a theoretical framework — it's a track record.
                </p>
                <p>
                  We combine that experience with modern technology — AI, automation, and smart systems — to give compliance businesses a competitive edge that simply wasn't available before.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">What the group has delivered</h2>
              {[
                { metric: '40+', label: 'Years combined compliance & sales experience', desc: 'Across sales leadership, business development, operations, and technical compliance.' },
                { metric: '£10m+', label: 'Revenue grown for clients', desc: 'Through upsell programmes, new client acquisition, and systematic commercial improvement.' },
                { metric: '3', label: 'Peer brands in the Hi-Venture group', desc: 'Hi-Venture, RiskSorted, and British Compliance Guide — a full commercial ecosystem.' },
              ].map(item => (
                <div key={item.label} className="card p-5 flex gap-4">
                  <div className="text-[#1a6ef5] font-bold text-2xl w-16 flex-shrink-0">{item.metric}</div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
                    <p className="text-[#8899bb] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section bg-[#0d1222]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-2">Compliance qualifications</h2>
          <p className="text-[#8899bb] text-sm mb-6 max-w-lg">
            Domain knowledge across fire risk assessment, PAT testing, legionella, electrical, COSHH, DSE, and emergency lighting — on both the sales and technical sides.
          </p>
          <div className="flex flex-wrap gap-3">
            {qualifications.map(q => (
              <div key={q} className="flex items-center gap-2 bg-[#141b30] border border-white/8 rounded-full px-4 py-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 2 L8.5 5 L12 5.5 L9.5 8 L10 11.5 L7 10 L4 11.5 L4.5 8 L2 5.5 L5.5 5 Z" stroke="#f0a500" strokeWidth="1.2" fill="none"/>
                </svg>
                <span className="text-[#8899bb] text-sm">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The ecosystem */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">More than a consultancy. A gateway to live commercial opportunity.</h2>
            <p className="text-[#8899bb] max-w-xl mx-auto text-sm">Hi-Venture sits within a group of peer brands — each designed to help compliance businesses grow and win.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: 'Hi-Venture', tag: 'Growth consultancy', desc: 'Sales, brand, social, tech, and operations support. Your growth partner.' },
              { name: 'RiskSorted', tag: 'Compliance marketplace', desc: 'UK marketplace connecting businesses with vetted specialists. Eligible Hi-Venture clients onboarded free.' },
              { name: 'British Compliance Guide', tag: 'Editorial platform', desc: 'Independent editorial property. Standards, best practice, and visibility for vetted partners.' },
            ].map(item => (
              <div key={item.name} className="card p-6">
                <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                <p className="text-[#1a6ef5] text-xs font-medium mb-3">{item.tag}</p>
                <p className="text-[#8899bb] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section bg-[#0d1222]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">How we approach every engagement</h2>
          <p className="text-[#8899bb] mb-12">Not templates. Not off-the-shelf programmes. Every client gets a diagnosis first.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              { step: '01', title: 'Discovery call', body: '30 minutes. We map your current revenue, client base, and where the whitespace sits.' },
              { step: '02', title: 'Opportunity report', body: 'We model your upsell potential, identify quick wins, and recommend a starting tier.' },
              { step: '03', title: 'Start on your terms', body: 'Choose performance model or retainer. We begin with one clear workstream and prove the value.' },
            ].map(item => (
              <div key={item.step} className="card p-6">
                <div className="text-[#1a6ef5] font-bold text-sm mb-3">{item.step}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-[#8899bb] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's talk about your business</h2>
          <p className="text-[#8899bb] mb-8">A 30-minute call is enough to know if there's a fit.</p>
          <Link href="/contact" className="btn-primary">Book a free discovery call</Link>
        </div>
      </section>
    </>
  )
}
