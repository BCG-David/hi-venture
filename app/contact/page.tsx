'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', company: '', revenue: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full bg-[#141b30] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#8899bb] text-sm focus:outline-none focus:border-[#1a6ef5] transition-colors"

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1a6ef5]/10 border border-[#1a6ef5]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#8899bb] text-sm">Get in touch</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's talk about<br />
            <span className="gradient-text">your growth</span>
          </h1>
          <p className="text-[#8899bb] text-lg max-w-xl mx-auto">
            Book a free 30-minute discovery call or drop us a message. No pitch, no pressure.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {status === 'sent' ? (
                <div className="card p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#00d68f]/20 flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12 L10 17 L19 7" stroke="#00d68f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message sent</h3>
                  <p className="text-[#8899bb] text-sm">We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#8899bb] text-xs mb-1.5 block">Your name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-[#8899bb] text-xs mb-1.5 block">Email address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.co.uk"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[#8899bb] text-xs mb-1.5 block">Company name</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Ltd"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="text-[#8899bb] text-xs mb-1.5 block">Approximate annual revenue</label>
                    <select name="revenue" value={form.revenue} onChange={handleChange} className={inputClass}>
                      <option value="">Select range</option>
                      <option value="under-250k">Under £250k</option>
                      <option value="250k-500k">£250k – £500k</option>
                      <option value="500k-1m">£500k – £1m</option>
                      <option value="1m-3m">£1m – £3m</option>
                      <option value="3m-10m">£3m – £10m</option>
                      <option value="over-10m">Over £10m</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[#8899bb] text-xs mb-1.5 block">What's on your mind? *</label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your business and what you're trying to achieve..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send message'}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">
                      Something went wrong. Please email us directly at hello@hi-venture.co.uk
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1a6ef5]/20 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2 C5.24 2 3 4.24 3 7 C3 10.5 8 14 8 14 C8 14 13 10.5 13 7 C13 4.24 10.76 2 8 2 Z" stroke="#1a6ef5" strokeWidth="1.2"/>
                      <circle cx="8" cy="7" r="1.5" stroke="#1a6ef5" strokeWidth="1.2"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold">Based in London</h3>
                </div>
                <p className="text-[#8899bb] text-sm">Working with SMEs across the UK. Remote-first, available nationwide.</p>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1a6ef5]/20 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 4 L8 9 L14 4 M2 4 H14 V12 H2 Z" stroke="#1a6ef5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold">hello@hi-venture.co.uk</h3>
                </div>
                <p className="text-[#8899bb] text-sm">We respond to all enquiries within one business day.</p>
              </div>

              <div className="card p-6">
                <h3 className="text-white font-semibold mb-3">What to expect</h3>
                <ul className="space-y-2.5">
                  {[
                    'A response within 24 hours',
                    'A free 30-minute discovery call',
                    'Honest advice — even if that\'s "we\'re not the right fit"',
                    'No long sales process — we keep it simple',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5 flex-shrink-0">
                        <path d="M2 6 L5 9 L10 3" stroke="#00d68f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[#8899bb] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                <h3 className="text-white font-semibold mb-1">Good fit for Hi-Venture?</h3>
                <p className="text-[#8899bb] text-sm mb-3">We work best with SMEs that:</p>
                <ul className="space-y-2">
                  {[
                    'Have £250k+ annual revenue',
                    'Sell B2B services (compliance, H&S, or adjacent)',
                    'Have a sales team or are building one',
                    'Are ready to invest in growth, not just hope for it',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-[#1a6ef5] text-xs mt-1">→</span>
                      <span className="text-[#8899bb] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
