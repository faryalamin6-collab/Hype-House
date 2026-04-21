import type { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero'
import ServiceTicker from '@/components/sections/home/ServiceTicker'
import WhyHypeHouse from '@/components/sections/home/WhyHypeHouse'
import DragServiceCards from '@/components/sections/home/DragServiceCards'
import TachyonTeaser from '@/components/sections/home/TachyonTeaser'
import FinalCTA from '@/components/sections/home/FinalCTA'

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
      <Hero />
      <ServiceTicker />
      <WhyHypeHouse />
      <DragServiceCards />
      <TachyonTeaser />
      <FinalCTA />
    </>
  )
}
