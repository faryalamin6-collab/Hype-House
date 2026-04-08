import type { Metadata } from 'next'
import AboutContent from '@/components/sections/about/AboutContent'

export const metadata: Metadata = {
  title: 'About HypeHouse Digital — AI Creative Agency',
  description:
    'HypeHouse Digital is a full-service AI-powered creative agency. Strategy, creative, automation — one partner who owns the outcome. Serving the Middle East, South Asia, and Europe.',
  alternates: { canonical: 'https://hypehouse.digital/about' },
}

export default function AboutPage() {
  return <AboutContent />
}
