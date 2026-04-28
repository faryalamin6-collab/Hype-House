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
  openGraph: {
    title: 'Services — HypeHouse Digital',
    description: 'Six weapons. One agency. Branding, copywriting, social media, digital advertising, web design, SEO and AI automation.',
    url: 'https://hypehouse.digital/services',
    siteName: 'HypeHouse Digital',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'HypeHouse Digital Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services — HypeHouse Digital',
    description: 'Six weapons. One agency. Full-service creative solutions.',
    images: ['/og-image.jpg'],
  },
}

const services = [
  {
    id: 'branding',
    svgPath: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
    label: 'Branding',
    title: 'Your Brand Is More Than A Logo. It\'s A System Of Influence.',
    description:
      'At HypeHouse, we build brand ecosystems that connect design, storytelling, and strategy. From identity to positioning, every detail is engineered to make your brand impossible to ignore.',
    inclusions: [
      { item: 'Naming & Positioning — We build names that spark recognition and positioning that defines who you are. Every word, tagline, and statement crafted to claim your space.' },
      { item: 'Logo Design — Logos that speak before you do. Custom, scalable, and designed to live across every medium. Your mark becomes your signature.' },
      { item: 'Brand Guidelines — Your brand\'s DNA, documented. A unified system for visuals, typography, and tone of voice. The blueprint that keeps your brand looking unstoppable.' },
      { item: 'Collateral Design — Designs that bring your brand to life everywhere it appears. From decks to templates, we make sure your brand looks powerful across every touchpoint.' },
      { item: 'Brand Audit — We dissect your brand and stack it against the best. Find the gaps, the strengths, and the blind spots. You\'ll walk away with a roadmap to sharpen your edge.' },
      { item: 'Rebranding — When your brand outgrows its look, we evolve it. Modern, bold, and true to your DNA. We rebuild without erasing what made you great.' },
    ],
    reverse: true,
    imageSrc: '/images/branding-header.png',
  },
  {
    id: 'copywriting',
    svgPath: 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125',
    label: 'Copywriting',
    title: 'We Don\'t Write Copy. We Script Conversions.',
    description:
      'Design gets attention. Words seal the deal. Your brand can look like a million bucks, but if the copy flops, the whole thing collapses. At HypeHouse, we don\'t write fluff — we write words that hook, hype, and convert. Copy that makes people stop scrolling, lean in, and take action.',
    inclusions: [
      { item: 'Content Copywriting — Taglines, slogans, brand story, social captions, scripts, and emails. Your brand\'s voice amplified, not automated. The kind of copy quoted back to you.' },
      { item: 'Website Copy — With the right copy, your website becomes more than a visit — it becomes an experience. Page flows that guide, headlines that hold attention, and CTAs that convert.' },
      { item: 'Ad Copy — Attention spans are shorter than ever and our copy complies. Whether it\'s Meta, Google, TikTok, or billboards — we write ads that break the scroll and make people move.' },
      { item: 'SEO Copywriting — We make algorithms fall in love without losing the human touch. SEO blogs, landing pages, and long-form content written to rank, resonate, and retain.' },
      { item: 'Traditional Copywriting — Billboards. Brochures. Print campaigns. The formats may be old-school but our thinking never is.' },
      { item: 'Thought Leadership & PR — You\'ve got the expertise — we give it a voice. Press releases, speeches, features, and whitepapers written to shape perception and build authority.' },
      { item: 'Special Formats — Podcasts, scripts, pitch decks, internal messaging. Words that adapt, align, and always sound unmistakably you.' },
    ],
    reverse: false,
    imageSrc: '/images/copywriting-header.png',
  },
  {
    id: 'social-media',
    svgPath: 'M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z',
    label: 'Social Media',
    title: 'Scroll-Stopping Isn\'t Luck. It\'s Strategy.',
    description:
      'We don\'t make random posts. We engineer pipelines of storytelling where every post has a purpose and every piece fits a plan. Each idea is backed by strategy, crafted with precision, and optimised for every platform to keep your brand visible, relevant, and in culture.',
    inclusions: [
      { item: 'Content Strategy & Calendar — Strategy-first: define goals, know your audience, and build content pillars. Then map it into monthly or quarterly calendars across platforms.' },
      { item: 'Graphic Design for Social Posts — Custom static posts, carousels, infographics, LinkedIn docs, stories, and highlights built to platform specs and brand consistency.' },
      { item: 'Video Content & Editing — From idea to execution — scripting, editing, reels, shorts, explainers, or campaigns.' },
      { item: 'Animation & Motion Graphics — Kinetic typography, transitions, logo reveals, and motion that gives your content life.' },
      { item: 'Micro-Content Creation — Memes, GIFs, trending edits, avatars, and reactive content that moves fast and stays relevant.' },
      { item: 'Social Media Management — Scheduling, publishing, community management, and analytics handled with consistency and care.' },
      { item: 'A continuous content system, not one-off posts' },
      { item: 'Platform-optimised creative for visibility and engagement' },
      { item: 'A mix of formats that keeps your brand fresh' },
      { item: 'Consistency powered by strategy and reporting' },
    ],
    reverse: true,
    imageSrc: '/images/social-media-header.png',
  },
  {
    id: 'advertising',
    svgPath: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    label: 'Digital Advertising',
    title: 'Your Ads Deserve Strategy. Not Just Spend.',
    description:
      'Most agencies recycle the same playbooks. Same audiences, same templates, same results. That\'s not us. Every campaign is built from scratch, researched with you, and optimised to squeeze performance out of every dollar.',
    inclusions: [
      { item: 'Audience Research & Targeting — We define exactly who matters to your business and build targeting that goes beyond generic setups.' },
      { item: 'Campaign Strategy & Plan — We define goals and map campaigns, platforms, formats, and testing from day one.' },
      { item: 'Ad Creative Production — Scroll-stopping visuals built for each platform — static, video, carousel, and beyond.' },
      { item: 'Email Campaigns — Automated journeys that nurture leads and convert attention into action.' },
      { item: 'WhatsApp Campaigns — Message flows that start conversations and close sales — inside the platform your audience already uses.' },
      { item: 'Campaign Reporting — Clear breakdowns of performance, audience insights, and next steps.' },
      { item: 'Paid Media Management — End-to-end campaign execution, optimisation, and scaling across Meta, Google, TikTok, and LinkedIn.' },
    ],
    reverse: false,
    imageSrc: '/images/digital-adverts-header.png',
  },
  {
    id: 'web',
    svgPath: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25',
    label: 'Web & UX/UI',
    title: 'Your Website Should Drive Growth. Not Just Traffic.',
    description:
      'Your website is where people decide if you\'re the real deal or just another tab they close. HypeHouse builds sites that guide users with intent, earn trust, and convert attention into action. We start by auditing your goals, users, and current experience to identify gaps and opportunities.',
    inclusions: [
      { item: 'UX/UI Audit & Design — Full experience audit and conversion-focused interface design.' },
      { item: 'Landing Page Design — High-performance pages for campaigns and lead generation.' },
      { item: 'Brochure Website — Clean, responsive websites for startups and growing businesses.' },
      { item: 'Full Corporate Website — Scalable multi-page platforms built for growth and long-term performance.' },
      { item: 'E-Commerce Website — Complete online stores with product management, integrations, and checkout systems.' },
      { item: 'Responsive Optimisation — Mobile-first performance tuning across all devices and screen sizes.' },
    ],
    reverse: true,
    imageSrc: '/images/web-design-header.png',
  },
  {
    id: 'seo',
    svgPath: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z',
    label: 'SEO',
    title: 'Attention You Don\'t Pay For Is The Best Kind.',
    description:
      'Paid ads stop when you stop spending. SEO builds a system where people find you every day. At HypeHouse, we engineer organic growth so your brand ranks higher and stays there.',
    inclusions: [
      { item: 'SEO Audit — Full analysis of your site, competitors, and current performance.' },
      { item: 'On-Page SEO — Optimisation of structure, content, and metadata across every page.' },
      { item: 'Technical SEO — Fixes for speed, crawlability, indexing, and performance issues.' },
      { item: 'Content SEO — Keyword strategy and long-form content that ranks and converts.' },
      { item: 'Link Building — Authority growth through backlinks, outreach, and digital PR.' },
      { item: 'Local SEO — Geo-targeted optimisation and Google Business setup for local visibility.' },
      { item: 'Voice Search Optimisation — Optimisation for conversational queries and voice-based search.' },
      { item: 'SEO Reporting — Clear insights, ranking progress, and growth tracking every month.' },
    ],
    reverse: false,
    imageSrc: '/images/seo-header.png',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="page-top"
        style={{
          position: 'relative',
          zIndex: 10,
          paddingLeft: '24px', paddingRight: '24px', paddingBottom: '60px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SectionLabel>Our Services</SectionLabel>
          <h1
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 800,
              fontSize: 'clamp(32px, 5.5vw, 72px)',
              color: 'white',
              marginTop: '24px',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              marginBottom: '28px',
            }}
          >
            We Don&apos;t Make Noise.<br />
            <span className="gradient-text">We Make Movements.</span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.8,
              maxWidth: '620px',
              margin: '0 auto 20px',
            }}
          >
            What we do starts with curiosity and ends with impact.
            We dive deep into your brand, build systems that connect creativity with performance,
            and craft work that doesn&apos;t just look good — it works everywhere it lives.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '16px',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.8,
              maxWidth: '620px',
              margin: '0 auto',
            }}
          >
            From branding to ads to content and tech, every piece is designed to move
            your brand forward, not just fill space.
          </p>
        </div>
      </section>

      {/* Service sections — images + full copy */}
      {services.map((service) => (
        <ServiceSection
          key={service.id}
          id={service.id}
          svgPath={service.svgPath}
          label={service.label}
          title={service.title}
          description={service.description}
          inclusions={service.inclusions}
          reverse={service.reverse}
          imageSrc={service.imageSrc}
        />
      ))}
    </>
  )
}
