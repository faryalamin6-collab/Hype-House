import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ServiceSection from '@/components/sections/services/ServiceSection'

export const metadata: Metadata = {
  title: 'Services — AI Creative Agency | Branding, Digital Marketing & Automation',
  description:
    'Explore HypeHouse Digital\'s full service offering: branding, copywriting, social media, digital advertising, web & UX/UI design, SEO, and AI automation. Serving clients across the Middle East, South Asia, and Europe.',
  alternates: {
    canonical: 'https://hypehouse.digital/services',
  },
}

const services = [
  {
    id: 'branding',
    svgPath: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
    label: 'Brand Identity',
    title: 'Branding That Commands Attention',
    description:
      'Your brand is the first thing people judge you by — and it happens in milliseconds. We craft comprehensive brand identities that stop the scroll, communicate value instantly, and scale across every touchpoint from your website to your packaging.',
    inclusions: [
      { item: 'Brand strategy & positioning workshop' },
      { item: 'Brand naming and tagline development' },
      { item: 'Full visual identity system (logo suite, colours, typography)' },
      { item: 'Brand guidelines document (50+ pages)' },
      { item: 'Brand voice & tone framework' },
      { item: 'Collateral design (business cards, letterhead, presentations)' },
      { item: 'Social media visual templates' },
    ],
    pricing: 'Contact us for pricing',
    reverse: true,
    imageSrc: '/images/branding-header.png',
  },
  {
    id: 'copywriting',
    svgPath: 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125',
    label: 'Copy & Content',
    title: 'Words That Move People to Act',
    description:
      'AI-augmented copywriting that speaks directly to your audience\'s psychology. We combine human storytelling instinct with AI speed to produce brand voice frameworks, website copy, ad scripts, email sequences, and content that converts browsers into buyers.',
    inclusions: [
      { item: 'Brand voice & tone development' },
      { item: 'Website copy (all pages)' },
      { item: 'Ad copy for Meta, Google & TikTok campaigns' },
      { item: 'Email marketing sequences' },
      { item: 'Social media captions & content scripts' },
      { item: 'Blog articles & SEO content' },
      { item: 'Product descriptions & sales pages' },
    ],
    pricing: 'Contact us for pricing',
    reverse: false,
    imageSrc: '/images/copywriting-header.png',
  },
  {
    id: 'social-media',
    svgPath: 'M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z',
    label: 'Social Media',
    title: 'Presence That Builds Loyal Audiences',
    description:
      'Social media is not just posting — it\'s a compounding system. We develop platform-specific content strategies, produce high-quality creative, manage your communities, and use data to continuously optimise what\'s working and eliminate what isn\'t.',
    inclusions: [
      { item: 'Monthly content strategy & calendar' },
      { item: 'Graphic design & video content production' },
      { item: 'Caption writing in your brand voice' },
      { item: 'Posting & scheduling across all platforms' },
      { item: 'Community management & comment responses' },
      { item: 'Monthly performance reports & insights' },
      { item: 'Influencer outreach & collaboration management' },
    ],
    pricing: 'Contact us for pricing',
    reverse: true,
    imageSrc: '/images/social-media-header.png',
  },
  {
    id: 'advertising',
    svgPath: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    label: 'Paid Media',
    title: 'Every Penny Optimised For Maximum Return',
    description:
      'Data-driven paid advertising campaigns that acquire customers at the lowest possible cost. We manage campaigns across Meta, Google, TikTok, and LinkedIn — with rigorous A/B testing, conversion tracking, and weekly optimisation cycles.',
    inclusions: [
      { item: 'Campaign strategy & audience research' },
      { item: 'Ad creative production (static, video, carousel)' },
      { item: 'Meta Ads (Facebook & Instagram) management' },
      { item: 'Google Ads (Search, Display, Performance Max)' },
      { item: 'TikTok Ads management' },
      { item: 'Weekly performance reporting' },
      { item: 'Pixel setup, conversion tracking & attribution' },
    ],
    pricing: 'Contact us for pricing',
    reverse: false,
    imageSrc: '/images/digital-adverts-header.png',
  },
  {
    id: 'web',
    svgPath: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25',
    label: 'Web & UX/UI',
    title: 'Websites That Convert. Always.',
    description:
      'Your website is your most important sales asset. We design and develop performance-first websites with obsessive attention to conversion architecture, user experience, and visual impact — built to load fast, rank well, and turn visitors into customers.',
    inclusions: [
      { item: 'UX strategy & wireframing' },
      { item: 'High-fidelity UI design in Figma' },
      { item: 'Responsive development (Next.js or Webflow)' },
      { item: 'CMS integration & content management setup' },
      { item: 'Speed optimisation & Core Web Vitals compliance' },
      { item: 'SEO-ready structure & metadata' },
      { item: '3 months post-launch support' },
    ],
    pricing: 'Contact us for pricing',
    reverse: true,
    imageSrc: '/images/web-design-header.png',
  },
  {
    id: 'seo',
    svgPath: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z',
    label: 'SEO & Visibility',
    title: 'Organic Growth That Compounds',
    description:
      'Long-term search visibility through technical SEO excellence, content strategy, and link building. We don\'t chase quick wins — we build the kind of organic presence that generates qualified traffic for years, not just months.',
    inclusions: [
      { item: 'Full technical SEO audit & implementation' },
      { item: 'Keyword research & content strategy' },
      { item: 'On-page optimisation (all key pages)' },
      { item: 'Monthly SEO content production (4 articles)' },
      { item: 'Local SEO (Google Business Profile management)' },
      { item: 'Backlink acquisition strategy & outreach' },
      { item: 'Monthly ranking & traffic reports' },
    ],
    pricing: 'Contact us for pricing',
    reverse: false,
    imageSrc: '/images/seo-header.png',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '100px 24px 60px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SectionLabel>Our Services</SectionLabel>
          <h1
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 6vw, 80px)',
              color: 'white',
              marginTop: '24px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '24px',
            }}
          >
            Strategy. Systems. Creative.{' '}
            <span className="gradient-text">One agency.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Every service we offer is designed to work independently — and amplify
            each other when combined. This is what a unified creative agency looks like.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service) => (
        <ServiceSection
          key={service.id}
          id={service.id}
          svgPath={service.svgPath}
          label={service.label}
          title={service.title}
          description={service.description}
          inclusions={service.inclusions}
          pricing={service.pricing}
          reverse={service.reverse}
          imageSrc={service.imageSrc}
        />
      ))}
    </>
  )
}
