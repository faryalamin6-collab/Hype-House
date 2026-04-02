import type { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero'
import ServiceTicker from '@/components/sections/home/ServiceTicker'
import WhyHypeHouse from '@/components/sections/home/WhyHypeHouse'
import ServicesOverview from '@/components/sections/home/ServicesOverview'
import TachyonTeaser from '@/components/sections/home/TachyonTeaser'
import Philosophy from '@/components/sections/home/Philosophy'
import FinalCTA from '@/components/sections/home/FinalCTA'

export const metadata: Metadata = {
  title: 'HypeHouse Digital — AI-Powered Creative Agency in Karachi, Pakistan',
  description:
    'HypeHouse Digital is a full-service AI-powered creative agency in Karachi. We engineer brand hype through strategy, AI systems, and world-class creative. Start your project today.',
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
      <ServicesOverview />
      <TachyonTeaser />
      <Philosophy />
      <FinalCTA />
    </>
  )
}
