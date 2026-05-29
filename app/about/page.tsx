import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Hi-Venture',
  description: 'Hi-Venture is led by a senior commercial operator with a decade of B2B sales leadership in compliance and H&S.',
}

const career = [
  {
    role: 'Head of Sales',
    company: 'Office Test (London)',
    period: '2022 – Present',
    bullets: [
      'Grew revenue from ~£6.9m to ~£10m',
      'Expanded services from 10 to 22',
      'Increased AOV by ~51%; core service revenue up ~86%',
      'Managed team of 15–18 salespeople',
    ],
  },
  {
    role: 'Senior BDM',
    company: 'SG World Ltd',
    period: 'Previous',
    bullets: [
      'Salesperson of the Year',
      'Exceeded sales target 41 of 44 months',
      'B2B sales across compliance and workplace safety',
    ],
  },
]

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
                  Hi-Venture is founded by a sales leader with over a decade of hands-on commercial experience in UK B2B services, particularly in workplace compliance and health & safety.
                </p>
                <p>
                  The work spans every layer of the commercial function: individual selling, team management, pricing strategy, product expansion, process design, and CRM/tech architecture.
                </p>
                <p>
                  The most recent chapter: taking over full sales management of a London compliance business in April 2022 and growing revenue from £6.9m to £10m — while expanding the service portfolio from 10 to 22 lines and increasing average order value by over 50%.
                </p>
                <p>
                  Hi-Venture was built to bring that operator knowledge to SMEs who are good at what they do but need commercial architecture that matches their ambition.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Career track record</h2>
              <div className="space-y-4">
                {career.map(item => (
                  <div key={item.role} className="card p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-white font-semibold">{item.role}</h3>
                        <p className="text-[#8899bb] text-sm">{item.company}</p>
                      </div>
                      <span className="text-[#8899bb] text-xs bg-white/5 px-2 py-1 rounded-full">{item.period}</span>
                    </div>
                    <ul className="space-y-1">
                      {item.bullets.map(b => (
                        <li key={b} className="flex items-start gap-2">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5 flex-shrink-0">
                            <path d="M2 6 L5 9 L10 3" stroke="#00d68f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-[#8899bb] text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section bg-[#0d1222]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Compliance qualifications</h2>
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
          <p className="text-[#8899bb] text-sm mt-4 max-w-lg">
            Domain knowledge in fire risk assessment, PAT testing, legionella, electrical, COSHH, DSE, and emergency lighting — across sales, audit, and procurement.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">How we approach every engagement</h2>
          <p className="text-[#8899bb] mb-12">
            Not templates. Not off-the-shelf programmes. Every client gets a diagnosis first.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {[
              { step: '01', title: 'Diagnose', body: 'We start by understanding exactly where your revenue is being lost — pipeline leakage, close rate, AOV, retention, or all four.' },
              { step: '02', title: 'Design', body: 'We build a specific plan covering strategy, systems, and team capability — with clear milestones and measurable targets.' },
              { step: '03', title: 'Deliver', body: 'We work alongside you, not at arm\'s length. Hands-on implementation, coaching, and accountability throughout.' },
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
      <section className="section bg-[#0d1222]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let's talk about your business</h2>
          <p className="text-[#8899bb] mb-8">A 30-minute call is enough to know if there's a fit.</p>
          <Link href="/contact" className="btn-primary">
            Book a free discovery call
          </Link>
        </div>
      </section>
    </>
  )
}
