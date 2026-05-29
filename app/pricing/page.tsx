import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing | Hi-Venture',
  description: 'Flexible pricing for UK SMEs. Retainer, % of GP, or hybrid engagement models. Entry from £299/month.',
}

const tiers = [
  {
    name: 'Foundation',
    price: '£299',
    period: '/month',
    tagline: 'For SMEs ready to get structured',
    desc: 'Strategy, accountability, and a clear commercial roadmap. Best for businesses that need direction more than delivery.',
    features: [
      'Monthly strategy session (2hr)',
      'Sales process audit (Month 1)',
      'Pipeline and CRM review',
      'Monthly KPI report and commentary',
      'Email access for quick questions',
      'Resource library access',
    ],
    cta: 'Get started',
    highlight: false,
    accent: '#4d9fff',
  },
  {
    name: 'Growth',
    price: 'From £999',
    period: '/month',
    tagline: 'For SMEs serious about scaling',
    desc: 'Hands-on delivery across sales, brand, or tech — plus strategy. We work alongside your team, not at arm\'s length.',
    features: [
      'Everything in Foundation',
      'Weekly working sessions',
      'Active pipeline and team coaching',
      'Tech and CRM implementation support',
      'Brand and messaging work',
      'Proposal and pricing strategy',
    ],
    cta: 'Most popular — book a call',
    highlight: true,
    accent: '#1a6ef5',
  },
  {
    name: 'Performance',
    price: 'Custom',
    period: '',
    tagline: '% of GP or hybrid structure',
    desc: 'Fully aligned to your outcomes. We take a percentage of the revenue growth we generate — ideal for businesses with ambitious targets.',
    features: [
      'Full commercial embedding',
      'Revenue-share or hybrid pricing',
      'Fractional Head of Sales capability',
      'Hiring and team build support',
      'Board-level reporting',
      'Bespoke scope by agreement',
    ],
    cta: 'Let\'s talk',
    highlight: false,
    accent: '#00d68f',
  },
]

const faqs = [
  {
    q: 'Is there a minimum commitment?',
    a: 'Foundation starts month-to-month after an initial 3-month period. Growth and Performance engagements are typically 6–12 months to allow enough time to see meaningful results.',
  },
  {
    q: 'Do you work with businesses outside compliance/H&S?',
    a: 'Our deepest expertise is in compliance and B2B services, but the commercial principles apply broadly to any UK SME selling to businesses. Book a call and we\'ll be straight with you about fit.',
  },
  {
    q: 'What does a % of GP model look like?',
    a: 'We agree a base retainer (lower than Growth) plus a percentage of gross profit generated above a defined baseline. The exact split depends on the scope and baseline revenue.',
  },
  {
    q: 'Can I start with a project rather than a retainer?',
    a: 'Yes. We offer scoped project work (e.g. sales audit, brand identity, CRM setup) as standalone engagements. Get in touch with what you need and we\'ll quote accordingly.',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1a6ef5]/10 border border-[#1a6ef5]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#8899bb] text-sm">Pricing</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Aligned to your outcomes
          </h1>
          <p className="text-[#8899bb] text-lg max-w-2xl mx-auto">
            Three engagement models built around how SMEs actually work. From structured strategy support to full commercial embedding.
          </p>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map(tier => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  tier.highlight
                    ? 'bg-[#141b30] border border-[#1a6ef5]/40 glow-blue'
                    : 'bg-[#141b30] border border-white/8'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#1a6ef5] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}

                <div>
                  <h2 className="text-white font-bold text-xl mb-1">{tier.name}</h2>
                  <p style={{ color: tier.accent }} className="text-sm font-medium mb-4">{tier.tagline}</p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-white font-bold text-4xl">{tier.price}</span>
                    {tier.period && <span className="text-[#8899bb] text-sm">{tier.period}</span>}
                  </div>
                  <p className="text-[#8899bb] text-sm leading-relaxed mb-6">{tier.desc}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0">
                        <path d="M2 7 L5 10 L12 3" stroke={tier.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[#8899bb] text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={tier.highlight ? 'btn-primary justify-center' : 'btn-outline justify-center'}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's always included */}
      <section className="section bg-[#0d1222]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Always included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Direct access to the founder — not an account manager',
              'UK-specific commercial expertise across compliance and B2B services',
              'Honest diagnosis, even when the answer isn\'t what you hoped for',
              'All work built around your specific business, never a template',
            ].map(item => (
              <div key={item} className="card p-4 flex gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0">
                  <path d="M3 8 L6 11 L13 4" stroke="#00d68f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#8899bb] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Common questions</h2>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.q} className="card p-6">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-[#8899bb] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#0d1222]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Not sure which tier is right?</h2>
          <p className="text-[#8899bb] mb-8">Start with a free 30-minute discovery call and we'll tell you exactly what we'd recommend.</p>
          <Link href="/contact" className="btn-primary">Book a free call</Link>
        </div>
      </section>
    </>
  )
}
