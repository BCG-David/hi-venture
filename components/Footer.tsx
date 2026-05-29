import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="6" width="4" height="20" fill="#1a6ef5"/>
                <rect x="2" y="14" width="10" height="4" fill="#1a6ef5"/>
                <rect x="8" y="6" width="4" height="20" fill="#1a6ef5"/>
                <rect x="16" y="6" width="4" height="20" fill="#1a6ef5"/>
                <path d="M23 16 L29 10 M29 10 L29 16 M29 10 L23 10" stroke="#00d68f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-white font-bold text-base">Hi-Venture</span>
            </div>
            <p className="text-[#8899bb] text-sm leading-relaxed max-w-xs">
              Human intelligence. Real growth. UK sales and growth consultancy for SMEs in compliance, H&S, and B2B services.
            </p>
            <p className="text-[#8899bb] text-xs mt-4">
              © {new Date().getFullYear()} Hi-Venture. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/contact', label: 'Contact' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#8899bb] text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3">Get in touch</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@hi-venture.co.uk" className="text-[#8899bb] text-sm hover:text-white transition-colors">
                  hello@hi-venture.co.uk
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#8899bb] text-sm hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00d68f] pulse-dot inline-block"></span>
              <span className="text-[#8899bb] text-xs">Accepting new clients</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
