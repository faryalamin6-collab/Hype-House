import type { Metadata } from 'next'
import AboutContent from '@/components/sections/about/AboutContent'

export const metadata: Metadata = {
  title: 'About HypeHouse Digital — AI Creative Agency',
  description:
    'HypeHouse Digital is a full-service AI-powered creative agency. Strategy, creative, automation — one partner who owns the outcome. Serving the Middle East, South Asia, and Europe.',
  alternates: { canonical: 'https://hypehouse.digital/about' },
  openGraph: {
    title: 'About HypeHouse Digital',
    description: 'We are the system behind the hype. Strategy, creative, automation — one partner who owns the outcome.',
    url: 'https://hypehouse.digital/about',
    siteName: 'HypeHouse Digital',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'HypeHouse Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About HypeHouse Digital',
    description: 'We are the system behind the hype.',
    images: ['/og-image.jpg'],
  },
}

export default function AboutPage() {
  return <AboutContent />
}
