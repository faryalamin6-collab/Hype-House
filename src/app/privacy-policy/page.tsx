import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — HypeHouse Digital',
  description: 'Privacy Policy for HypeHouse Digital.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#020008] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[#049DFF] text-sm font-semibold tracking-[0.3em] uppercase font-poppins mb-4">
            ✦ Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/40 font-poppins text-sm">
            Last Updated: April 2026
          </p>
          <p className="text-white/60 font-poppins text-base leading-relaxed mt-6">
            HypeHouse Digital (&ldquo;HypeHouse&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our website, services, and communications.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-6">

          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(12,18,141,0.2) 0%, rgba(34,0,65,0.3) 100%)', border: '1px solid rgba(4,157,255,0.1)' }}>
            <h2 className="text-white font-bold font-poppins text-lg mb-4">1. Information We Collect</h2>
            <p className="text-white/60 font-poppins text-sm leading-relaxed mb-3">We may collect the following types of information:</p>
            <p className="text-[#049DFF] font-semibold font-poppins text-sm mb-2">a. Personal Information</p>
            <ul className="text-white/60 font-poppins text-sm leading-relaxed list-disc list-inside mb-4 flex flex-col gap-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Any information submitted through forms, inquiries, or communications</li>
            </ul>
            <p className="text-[#049DFF] font-semibold font-poppins text-sm mb-2">b. Usage Data</p>
            <ul className="text-white/60 font-poppins text-sm leading-relaxed list-disc list-inside mb-4 flex flex-col gap-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Pages visited and time spent</li>
              <li>Interaction data (clicks, scroll behavior)</li>
            </ul>
            <p className="text-[#049DFF] font-semibold font-poppins text-sm mb-2">c. Marketing &amp; Communication Data</p>
            <ul className="text-white/60 font-poppins text-sm leading-relaxed list-disc list-inside flex flex-col gap-1">
              <li>Preferences in receiving marketing communications</li>
              <li>Responses to campaigns, emails, or ads</li>
            </ul>
          </div>

          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(12,18,141,0.2) 0%, rgba(34,0,65,0.3) 100%)', border: '1px solid rgba(4,157,255,0.1)' }}>
            <h2 className="text-white font-bold font-poppins text-lg mb-4">2. How We Use Your Information</h2>
            <p className="text-white/60 font-poppins text-sm leading-relaxed mb-3">We use your data to:</p>
            <ul className="text-white/60 font-poppins text-sm leading-relaxed list-disc list-inside flex flex-col gap-1">
              <li>Respond to inquiries and provide services</li>
              <li>Communicate with you regarding projects or proposals</li>
              <li>Improve our website, services, and user experience</li>
              <li>Run marketing campaigns and measure performance</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </div>

          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(12,18,141,0.2) 0%, rgba(34,0,65,0.3) 100%)', border: '1px solid rgba(4,157,255,0.1)' }}>
            <h2 className="text-white font-bold font-poppins text-lg mb-4">3. Sharing of Information</h2>
            <p className="text-white/60 font-poppins text-sm leading-relaxed mb-3">We do not sell your data. We may share your information with:</p>
            <ul className="text-white/60 font-poppins text-sm leading-relaxed list-disc list-inside mb-4 flex flex-col gap-1">
              <li>Trusted service providers (e.g., hosting, analytics, CRM tools)</li>
              <li>Advertising platforms (e.g., Meta, Google) for campaign optimization</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="text-white/60 font-poppins text-sm leading-relaxed">All third parties are required to handle your data securely.</p>
          </div>

          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(12,18,141,0.2) 0%, rgba(34,0,65,0.3) 100%)', border: '1px solid rgba(4,157,255,0.1)' }}>
            <h2 className="text-white font-bold font-poppins text-lg mb-4">4. Data Retention</h2>
            <p className="text-white/60 font-poppins text-sm leading-relaxed mb-3">We retain personal data only for as long as necessary to:</p>
            <ul className="text-white/60 font-poppins text-sm leading-relaxed list-disc list-inside flex flex-col gap-1">
              <li>Fulfill the purposes outlined in this policy</li>
              <li>Comply with legal, accounting, or reporting requirements</li>
            </ul>
          </div>

          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(12,18,141,0.2) 0%, rgba(34,0,65,0.3) 100%)', border: '1px solid rgba(4,157,255,0.1)' }}>
            <h2 className="text-white font-bold font-poppins text-lg mb-4">5. Cookies &amp; Tracking Technologies</h2>
            <p className="text-white/60 font-poppins text-sm leading-relaxed mb-3">We use cookies and similar technologies to:</p>
            <ul className="text-white/60 font-poppins text-sm leading-relaxed list-disc list-inside mb-4 flex flex-col gap-1">
              <li>Improve website performance</li>
              <li>Understand user behavior</li>
              <li>Deliver relevant marketing</li>
            </ul>
            <p className="text-white/60 font-poppins text-sm leading-relaxed">You can control cookie settings through your browser.</p>
          </div>

          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(12,18,141,0.2) 0%, rgba(34,0,65,0.3) 100%)', border: '1px solid rgba(4,157,255,0.1)' }}>
            <h2 className="text-white font-bold font-poppins text-lg mb-4">6. Data Security</h2>
            <p className="text-white/60 font-poppins text-sm leading-relaxed mb-3">We implement appropriate technical and organizational measures to protect your data from:</p>
            <ul className="text-white/60 font-poppins text-sm leading-relaxed list-disc list-inside mb-4 flex flex-col gap-1">
              <li>Unauthorized access</li>
              <li>Loss or misuse</li>
              <li>Disclosure or alteration</li>
            </ul>
            <p className="text-white/60 font-poppins text-sm leading-relaxed">However, no system is completely secure, and we cannot guarantee absolute security.</p>
          </div>

          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(12,18,141,0.2) 0%, rgba(34,0,65,0.3) 100%)', border: '1px solid rgba(4,157,255,0.1)' }}>
            <h2 className="text-white font-bold font-poppins text-lg mb-4">7. Your Rights</h2>
            <p className="text-white/60 font-poppins text-sm leading-relaxed mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="text-white/60 font-poppins text-sm leading-relaxed list-disc list-inside mb-4 flex flex-col gap-1">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Object to data processing</li>
            </ul>
            <p className="text-white/60 font-poppins text-sm leading-relaxed">To exercise your rights, contact us via WhatsApp at +923272777237.</p>
          </div>

          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(12,18,141,0.2) 0%, rgba(34,0,65,0.3) 100%)', border: '1px solid rgba(4,157,255,0.1)' }}>
            <h2 className="text-white font-bold font-poppins text-lg mb-4">8. Third-Party Links</h2>
            <p className="text-white/60 font-poppins text-sm leading-relaxed">Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>
          </div>

          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(12,18,141,0.2) 0%, rgba(34,0,65,0.3) 100%)', border: '1px solid rgba(4,157,255,0.1)' }}>
            <h2 className="text-white font-bold font-poppins text-lg mb-4">9. Updates to This Policy</h2>
            <p className="text-white/60 font-poppins text-sm leading-relaxed">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>
          </div>

          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(12,18,141,0.2) 0%, rgba(34,0,65,0.3) 100%)', border: '1px solid rgba(4,157,255,0.1)' }}>
            <h2 className="text-white font-bold font-poppins text-lg mb-4">10. Contact Us</h2>
            <p className="text-white/60 font-poppins text-sm leading-relaxed">HypeHouse Digital · Karachi, Pakistan</p>
            <p className="text-white/60 font-poppins text-sm leading-relaxed mt-1">
              WhatsApp:{' '}
              <a href="https://wa.me/923272777237" className="text-[#049DFF] hover:text-white transition-colors">
                +923272777237
              </a>
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/923272777237"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold font-poppins text-white text-sm"
            style={{ background: 'linear-gradient(135deg, #A614B2 0%, #0C128D 50%, #049DFF 100%)' }}
          >
            Contact Us on WhatsApp →
          </a>
        </div>
      </div>
    </main>
  )
}
