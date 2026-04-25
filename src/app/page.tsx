import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/sections/home/Hero'
import ServiceTicker from '@/components/sections/home/ServiceTicker'
import WhyHypeHouse from '@/components/sections/home/WhyHypeHouse'
import DragServiceCards from '@/components/sections/home/DragServiceCards'
import TachyonTeaser from '@/components/sections/home/TachyonTeaser'
import FinalCTA from '@/components/sections/home/FinalCTA'

const ApplePinSection = dynamic(
  () => import('@/components/sections/home/ApplePinSection'),
  { ssr: false }
)

const ScrollAnimationsInit = dynamic(
  () => import('@/components/ScrollAnimationsInit'),
  { ssr: false }
)

export const metadata: Metadata = {
  title: 'HypeHouse Digital — AI-Powered Creative Agency',
  description:
    'HypeHouse Digital is a full-service AI-powered creative agency. We engineer brand hype through strategy, AI systems, and world-class creative. Serving the Middle East, South Asia, and Europe.',
  alternates: {
    canonical: 'https://hypehouse.digital',
  },
}

export default function HomePage() {
  return (
    <>
      <ScrollAnimationsInit />
      <Hero />
      <ServiceTicker />
      <ApplePinSection />
      <WhyHypeHouse />
      <DragServiceCards />
      <TachyonTeaser />
      <FinalCTA />
    </>
  )
}
