import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing | Hi-Venture',
  description: 'Flexible pricing for UK SMEs. Retainer or performance-only model. Entry from £299/month.',
}

const tiers = [
  {
    name: 'Spark',
    price: '£299',
    period: '/month',
    tagline: 'For businesses getting structured',
    desc: 'Strategy, accountability, and a clear commercial roadmap. Best for businesses that need direction before full delivery.',
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
    name: 'Scale',
    price: '£1,750',
    period: '/month',
    tagline: 'For businesses serious about growing',
    desc: 'Hands-on delivery across sales, brand, social, and tech — plus strategy. We work alongside your team, not at arm\'s length.',
    features: [
      'Everything in Spark',
      'Weekly working sessions',
      'Active pipeline and team coaching',
      'Brand, website and social media management',
      'Tech and CRM implementation',
      'Commission: 25% GP on upsells · 35% GP on new clients (yr 1) · 10% on rebooks after 12 months',
    ],
    cta: 'Most popular — book a call',
    highlight: true,
    accent: '#1a6ef5',
  },
  {
    name: 'Partner',
    price: 'Custom',
    period: '',
    tagline: 'Full commercial embedding',
    desc: 'Fractional Head of Sales capability with full group support. Board-level reporting, hiring support, and bespoke scope.',
    features: [
      'Everything in Scale',
      'Fractional Head of Sales',
      'Hiring brief and interview process',
      'Board-level reporting',
      'RiskSorted onboarding (free)',
      'Bespoke scope by agreement',
    ],
    cta: 'Let\'s talk',
    highlight: false,
    accent: '#00d68f',
  },
]

const faqs = [
  {
    q: 'What is the commission model?',
    a: 'You always pay the higher of your retainer or commission earned. Commission is 25% of GP on upsells to existing clients, 35% of GP on new clients won in year one, and 10% on rebooks after 12 months. Commission applies to GP not revenue.',
  },
  {
    q: 'Is there a performance-only option?',
    a: 'Yes. For businesses not yet ready for a retainer, we offer a performance-only model with no monthly fee — commission rates apply as above with a 12-month minimum commitment.',
  },
  {
    q: 'Is there a minimum commitment?',
    a: 'Spark is month-to-month after an initial 3-month period. Scale and Partner engagements are typically 6–12 months to allow enough time to see meaningful results.',
  },
  {
    q: 'How does the RiskSorted onboarding work?',
    a: 'Eligible Hi-Venture clients can be vetted and onboarded to RiskSorted — our UK compliance marketplace — at no cost, giving access to a live inbound pipeline from day one.',
  },
  {
    q: 'Do you work outside compliance and H&S?',
    a: 'Our deepest expertise is in compliance and B2B services, but the commercial principles apply broadly to any UK SME selling to businesses. Book a call and we\'ll be straight with you about fit.',
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
            A simple model: you always pay the higher of your retainer or commission earned. We only win when you do.
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

          {/* Performance-only callout */}
          <div className="mt-6 card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <h3 className="text-white font-semibold mb-1">Performance-only model available</h3>
              <p className="text-[#8899bb] text-sm">No retainer. Commission only. Available for clients not yet ready for a monthly fee — 12-month minimum commitment required.</p>
            </div>
            <Link href="/contact" className="btn-outline whitespace-nowrap flex-shrink-0">
              Ask about this
            </Link>
          </div>
        </div>
      </section>

      {/* How commission works */}
      <section className="section bg-[#0d1222]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">How the commission model works</h2>
          <p className="text-[#8899bb] text-sm text-center mb-8">You always pay the higher of your retainer or commission earned — never both.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { rate: '25%', label: 'GP on upsells', desc: 'Additional services sold to your existing clients.' },
              { rate: '35%', label: 'GP on new clients', desc: 'New clients won in year one of the relationship.' },
              { rate: '10%', label: 'GP on rebooks', desc: 'Clients who rebook after the first 12 months.' },
            ].map(item => (
              <div key={item.label} className="card p-6 text-center">
                <div className="text-[#1a6ef5] font-bold text-3xl mb-1">{item.rate}</div>
                <div className="text-white font-semibold text-sm mb-2">{item.label}</div>
                <p className="text-[#8899bb] text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[#8899bb] text-xs text-center mt-4">All fees + VAT · Commission applies to GP not revenue</p>
        </div>
      </section>

      {/* Vs hiring */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Less than the cost of one hire. None of the risk.</h2>
          <p className="text-[#8899bb] text-sm text-center mb-8">Scale tier shown.</p>
          <div className="card overflow-hidden">
            <div className="grid grid-cols-3 bg-[#0d1222] px-6 py-3 text-xs font-semibold text-[#8899bb] uppercase tracking-wide">
              <div></div>
              <div className="text-center">One salesperson</div>
              <div className="text-center text-[#1a6ef5]">Hi-Venture Scale</div>
            </div>
            {[
              { label: 'Monthly cost', a: '£3,300+', b: '£1,750' },
              { label: 'Employer NI', a: '£350/mo', b: 'None' },
              { label: 'Pension', a: '£88/mo', b: 'None' },
              { label: 'Recruitment fee', a: '£3,500–7,000', b: 'None' },
              { label: 'Notice pe
