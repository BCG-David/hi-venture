import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hi-Venture | Human Intelligence. Real Growth.',
  description: 'UK sales and growth consultancy for SMEs. Specialising in compliance, H&S, and B2B services. Sales strategy, brand, tech, and operations.',
  keywords: 'sales consultancy UK, SME growth, compliance sales, B2B sales strategy, business development',
  openGraph: {
    title: 'Hi-Venture | Human Intelligence. Real Growth.',
    description: 'UK sales and growth consultancy for SMEs specialising in compliance and H&S.',
    url: 'https://hi-venture.co.uk',
    siteName: 'Hi-Venture',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
