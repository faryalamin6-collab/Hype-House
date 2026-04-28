import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/sections/home/Hero'
import ServiceTicker from '@/components/sections/home/ServiceTicker'
import WhyHypeHouse from '@/components/sections/home/WhyHypeHouse'
import TachyonTeaser from '@/components/sections/home/TachyonTeaser'
import FinalCTA from '@/components/sections/home/FinalCTA'

const ScrollAnimationsInit = dynamic(
  () => import('@/components/ScrollAnimationsInit'),
  { ssr: false }
)

const DragServiceCards = dynamic(
  () => import('@/components/sections/home/DragServiceCards'),
  { ssr: false }
)

export const metadata: Metadata = {
  title: 'HypeHouse Digital — AI-Powered Creative Agency',
  description:
    'HypeHouse Digital is a full-service AI-powered creative agency. We engineer brand hype through strategy, AI systems, and world-class creative. Serving the Middle East, South Asia, and Europe.',
  keywords: 'creative agency, AI agency, branding, social media, digital marketing, web design, SEO, automation',
  alternates: {
    canonical: 'https://hypehouse.digital',
  },
  openGraph: {
    title: 'HypeHouse Digital — AI-Powered Creative Agency',
    description: 'Full-service AI-powered creative agency. Strategy. Systems. Creative. Unified.',
    url: 'https://hypehouse.digital',
    siteName: 'HypeHouse Digital',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'HypeHouse Digital' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HypeHouse Digital — AI-Powered Creative Agency',
    description: 'Full-service AI-powered creative agency. Strategy. Systems. Creative. Unified.',
    images: ['/og-image.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <ScrollAnimationsInit />
      <Hero />
      <ServiceTicker />
      <WhyHypeHouse />
      <DragServiceCards />
      <TachyonTeaser />
      <FinalCTA />
    </>
  )
}
