import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import './globals.css'
import LenisWrapper from '@/components/layout/LenisWrapper'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import PageTransition from './PageTransition'
import HashAnchorScroll from '@/components/ui/HashAnchorScroll'
import PageLoader from '@/components/PageLoader'

const BackgroundCanvas = dynamic(
  () => import('@/components/canvas/BackgroundCanvas'),
  { ssr: false }
)


export const metadata: Metadata = {
  metadataBase: new URL('https://hypehouse.digital'),
  title: {
    default: 'HypeHouse Digital — AI-Powered Creative Agency',
    template: '%s | HypeHouse Digital',
  },
  description:
    'HypeHouse Digital is a full-service AI-powered creative agency. Branding, social media, digital advertising, web design, SEO & AI automation. Serving the Middle East, South Asia, and Europe.',
  keywords: [
    'AI creative agency',
    'digital marketing agency',
    'branding agency',
    'social media management',
    'SEO agency',
    'automation agency',
    'creative agency Middle East',
    'AI agency Dubai',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hypehouse.digital',
    siteName: 'HypeHouse Digital',
    title: 'HypeHouse Digital — AI-Powered Creative Agency',
    description:
      'Full-service AI-powered creative agency. Strategy. Systems. Creative. Unified.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HypeHouse Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HypeHouse Digital — AI-Powered Creative Agency',
    description:
      'Full-service AI-powered creative agency. Strategy. Systems. Creative. Unified.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://hypehouse.digital',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts — Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Spline CDN — early connection so the scene fetches faster */}
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          as="style"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'HypeHouse Digital',
              description:
                'Full-service AI-powered creative agency. Strategy. Systems. Creative. Unified.',
              url: 'https://hypehouse.digital',
              contactPoint: 'https://hypehouse-client-intake-form.netlify.app',
              areaServed: ['Middle East', 'South Asia', 'Europe', 'Dubai', 'London'],
            }),
          }}
        />
      </head>
      <body
        style={{
          background: 'linear-gradient(180deg, #020008 0%, #0c0026 100%)',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
        }}
      >
        {/* Page load progress bar */}
        <PageLoader />

        {/* Three.js background — persistent across routes */}
        <BackgroundCanvas />

        <LenisWrapper>
          {/* Navigation — persistent */}
          <Navigation />

          {/* Handles hash-anchor scroll for client-side navigation */}
          <HashAnchorScroll />

          {/* Page content with Framer Motion transitions */}
          <main style={{ position: 'relative', zIndex: 10 }}>
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center" style={{ background: '#020008' }}>
                <div className="w-8 h-8 rounded-full border-2 border-[#049DFF] border-t-transparent animate-spin" />
              </div>
            }>
              <PageTransition>{children}</PageTransition>
            </Suspense>
          </main>

          <Footer />
        </LenisWrapper>
      </body>
    </html>
  )
}
