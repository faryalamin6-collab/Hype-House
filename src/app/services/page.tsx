import type { Metadata } from 'next'
import SectionLabel from '@/components/ui/SectionLabel'
import ServiceSection from '@/components/sections/services/ServiceSection'

export const metadata: Metadata = {
  title: 'Services — Digital Marketing, Branding & AI Agency Karachi',
  description:
    'Explore HypeHouse Digital\'s full service offering: branding, copywriting, social media, digital advertising, web & UX/UI design, SEO, and AI automation in Karachi.',
  alternates: {
    canonical: 'https://hypehouse.digital/services',
  },
}

const services = [
  {
    id: 'branding',
    icon: '◈',
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
    pricing: 'Starting from PKR 85,000',
  },
  {
    id: 'copywriting',
    icon: '✎',
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
    pricing: 'Starting from PKR 25,000/month',
    reverse: true,
  },
  {
    id: 'social-media',
    icon: '◉',
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
    pricing: 'Starting from PKR 45,000/month',
  },
  {
    id: 'advertising',
    icon: '⬡',
    label: 'Paid Media',
    title: 'Every Rupee Optimised For Maximum Return',
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
    pricing: 'Starting from PKR 55,000/month + ad spend',
    reverse: true,
  },
  {
    id: 'web',
    icon: '⬤',
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
    pricing: 'Starting from PKR 120,000',
  },
  {
    id: 'seo',
    icon: '◆',
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
    pricing: 'Starting from PKR 40,000/month',
    reverse: true,
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
          padding: '160px 24px 80px',
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
            Six pillars.{' '}
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
          icon={service.icon}
          label={service.label}
          title={service.title}
          description={service.description}
          inclusions={service.inclusions}
          pricing={service.pricing}
          reverse={service.reverse}
        />
      ))}
    </>
  )
}
