import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — HypeHouse Digital',
  description: 'Terms of Service for HypeHouse Digital.',
}

const terms = [
  {
    number: '1',
    title: 'Acceptance of Terms',
    content: 'By accessing our website or engaging HypeHouse Digital ("HypeHouse", "we", "our", or "us") for services, you agree to be bound by these Terms of Service.',
  },
  {
    number: '2',
    title: 'Services',
    content: 'HypeHouse provides creative, marketing, branding, and technology-related services including branding and identity development, content and social media services, digital advertising and campaign management, website design and development, and AI and automation solutions including Tachyon. The scope, deliverables, timelines, and inclusions for each project are defined separately in proposals, agreements, or written communication.',
  },
  {
    number: '3',
    title: 'Client Responsibilities',
    content: 'Clients agree to provide accurate and complete information, supply required materials, assets, and approvals in a timely manner, and maintain clear and consistent communication throughout the project. Delays in client responses or approvals may impact timelines, for which HypeHouse will not be held responsible.',
  },
  {
    number: '4',
    title: 'Payments',
    content: 'Fees are defined in proposals or agreements. Payments must be made according to the agreed schedule. Late payments may result in delays, paused services, or additional charges. All payments made are non-refundable unless explicitly stated otherwise.',
  },
  {
    number: '5',
    title: 'Intellectual Property',
    content: 'HypeHouse retains ownership of all internal processes, methodologies, frameworks, tools, and systems including Tachyon and any proprietary technology. All designs, creative work, content, strategies, systems, and deliverables produced by HypeHouse remain the intellectual property of HypeHouse until full and final payment has been received. No rights, licenses, or usage permissions are transferred to the client until payment is completed in full. Upon full payment, final deliverables are transferred to the client and usage rights are granted as per the agreed scope. HypeHouse reserves the right to showcase completed work in its portfolio unless otherwise agreed in writing.',
  },
  {
    number: '6',
    title: 'Revisions & Approval Process',
    content: 'Each project includes a defined number of revision rounds as outlined in the proposal or agreement. Additional revisions beyond the agreed scope will be billed separately. A revision is defined as a reasonable modification to an existing concept, not a complete redesign or change in direction. Once a deliverable is approved by the client, any further changes will be treated as a new request and may incur additional charges.',
  },
  {
    number: '7',
    title: 'Scope of Work & Scope Creep',
    content: 'All services are limited to the agreed scope defined in the proposal or agreement. Any requests outside this scope including additional deliverables, platforms, formats, or strategic changes will be considered scope expansion and may require timeline adjustments or be billed separately. HypeHouse reserves the right to assess and quote additional work before proceeding.',
  },
  {
    number: '8',
    title: 'Working Hours & Availability',
    content: 'HypeHouse operates Monday to Friday, 11:00 AM to 7:00 PM Pakistan Standard Time. Saturday, Sunday, and public holidays observed in Pakistan are non-working days. As a remote-first agency, communication may occasionally occur outside these hours. However, all official responses, revisions, deliverables, and support are processed within standard working hours. Requests made outside working hours will be addressed on the next working day.',
  },
  {
    number: '9',
    title: 'Turnaround Time & Delays',
    content: 'Project timelines are dependent on timely client responses, delivery of required assets, and feedback and approvals. Any delay from the client side may result in revised timelines. HypeHouse is not responsible for missed deadlines caused by delayed client communication or third-party dependencies.',
  },
  {
    number: '10',
    title: 'Priority & Rush Requests',
    content: 'Requests requiring expedited delivery outside agreed timelines may be classified as priority or rush work. Such requests are subject to availability and may incur additional charges. HypeHouse reserves the right to accept or decline rush requests.',
  },
  {
    number: '11',
    title: 'Confidentiality',
    content: 'Both HypeHouse and the client agree to maintain the confidentiality of any sensitive or proprietary information shared during the course of engagement.',
  },
  {
    number: '12',
    title: 'Limitation of Liability',
    content: 'HypeHouse shall not be held liable for any indirect, incidental, or consequential damages, including but not limited to loss of revenue, profits, or business opportunities. Liability, if any, is limited to the total amount paid for the services in question.',
  },
  {
    number: '13',
    title: 'No Guarantees',
    content: 'While HypeHouse aims to deliver high-quality results, we do not guarantee specific outcomes, performance metrics, or business results. Results may vary depending on external factors beyond our control.',
  },
  {
    number: '14',
    title: 'Termination',
    content: 'HypeHouse reserves the right to suspend or terminate services if terms are violated, payments are not made, or the client engages in unethical or abusive conduct. Clients may terminate services as per the terms defined in their agreement.',
  },
  {
    number: '15',
    title: 'Third-Party Tools & Platforms',
    content: 'HypeHouse may utilize third-party tools, platforms, or software as part of its services. We are not responsible for the availability, performance, or policies of these third-party services.',
  },
  {
    number: '16',
    title: 'Governing Law',
    content: 'These Terms shall be governed and interpreted in accordance with the laws of Pakistan.',
  },
  {
    number: '17',
    title: 'Changes to Terms',
    content: 'HypeHouse reserves the right to update or modify these Terms at any time. Continued use of our services constitutes acceptance of any changes.',
  },
  {
    number: '18',
    title: 'Contact Information',
    content: 'HypeHouse Digital · Karachi, Pakistan · WhatsApp: +923272777237',
  },
]

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#020008] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[#049DFF] text-sm font-semibold tracking-[0.3em] uppercase font-poppins mb-4">
            ✦ Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4">
            Terms of Service
          </h1>
          <p className="text-white/40 font-poppins text-sm">
            Last Updated: April 2026
          </p>
        </div>

        {/* Terms */}
        <div className="flex flex-col gap-6">
          {terms.map((term) => (
            <div
              key={term.number}
              className="rounded-2xl p-8 flex gap-6"
              style={{
                background: 'linear-gradient(135deg, rgba(12,18,141,0.2) 0%, rgba(34,0,65,0.3) 100%)',
                border: '1px solid rgba(4,157,255,0.1)',
              }}
            >
              <span
                className="text-2xl font-black font-poppins flex-shrink-0 leading-none mt-1"
                style={{
                  background: 'linear-gradient(135deg, #C084FC, #049DFF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {term.number}
              </span>
              <div>
                <h2 className="text-white font-bold font-poppins text-lg mb-2">
                  {term.title}
                </h2>
                <p className="text-white/60 font-poppins text-sm leading-relaxed">
                  {term.content}
                </p>
              </div>
            </div>
          ))}
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
