'use client'

import { useState, FormEvent } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const services = [
  'Branding',
  'Copywriting',
  'Social Media Management',
  'Digital Advertising',
  'Web & UX/UI Design',
  'SEO',
  'AI Automation (Tachyon)',
  'Full-Service Retainer',
  'Other',
]

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to send')
      setState('success')
    } catch (err: unknown) {
      setState('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '8px',
    padding: '14px 16px',
    fontFamily: 'var(--font-poppins)',
    fontSize: '15px',
    color: 'rgba(255,255,255,0.88)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-poppins)',
    fontWeight: 600,
    fontSize: '13px',
    color: 'rgba(255,255,255,0.6)',
    marginBottom: '8px',
    display: 'block',
    letterSpacing: '0.05em',
  }

  if (state === 'success') {
    return (
      <div
        style={{
          padding: '48px',
          textAlign: 'center',
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(52,211,153,0.3)',
          borderRadius: '16px',
          animation: 'fade-up 0.5s cubic-bezier(0.2,0.8,0.2,1) forwards',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(52,211,153,0.15)',
            border: '1px solid rgba(52,211,153,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '24px',
          }}
        >
          ✓
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 700,
            fontSize: '24px',
            color: 'white',
            marginBottom: '12px',
          }}
        >
          Message sent.
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '16px',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.6,
          }}
        >
          We&apos;ll be in touch within 24 hours. In the meantime,
          take a look at our{' '}
          <a
            href="/rate-card"
            style={{ color: '#C084FC', textDecoration: 'none' }}
          >
            rate card
          </a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {/* Name */}
        <div>
          <label htmlFor="name" style={labelStyle}>Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Faryal Amin"
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = 'rgba(166,20,178,0.5)')}
            onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" style={labelStyle}>Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="hello@yourbrand.com"
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = 'rgba(166,20,178,0.5)')}
            onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
          />
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {/* Company */}
        <div>
          <label htmlFor="company" style={labelStyle}>Company</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Brand Name"
            style={inputStyle}
            onFocus={e => (e.target.style.borderColor = 'rgba(166,20,178,0.5)')}
            onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" style={labelStyle}>Service</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            style={{
              ...inputStyle,
              cursor: 'pointer',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1L6 6L11 1' stroke='rgba(255,255,255,0.4)' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 16px center',
            }}
          >
            <option value="" style={{ background: '#080031' }}>Select a service</option>
            {services.map(s => (
              <option key={s} value={s} style={{ background: '#080031' }}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" style={labelStyle}>Message *</label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your brand, your goals, and what you're looking to achieve..."
          rows={5}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
          onFocus={e => (e.target.style.borderColor = 'rgba(166,20,178,0.5)')}
          onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
        />
      </div>

      {/* Error message */}
      {state === 'error' && (
        <p
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '14px',
            color: '#f87171',
          }}
        >
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === 'loading'}
        style={{
          width: '100%',
          padding: '16px',
          background: state === 'loading'
            ? 'rgba(166,20,178,0.5)'
            : 'linear-gradient(135deg, #A614B2, #0C128D)',
          border: 'none',
          borderRadius: '8px',
          fontFamily: 'var(--font-poppins)',
          fontWeight: 600,
          fontSize: '16px',
          color: 'white',
          cursor: state === 'loading' ? 'not-allowed' : 'pointer',
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}
        onMouseEnter={e => {
          if (state !== 'loading') {
            (e.currentTarget).style.boxShadow = '0 0 32px rgba(166,20,178,0.5)'
            ;(e.currentTarget).style.transform = 'translateY(-1px)'
          }
        }}
        onMouseLeave={e => {
          (e.currentTarget).style.boxShadow = 'none'
          ;(e.currentTarget).style.transform = 'translateY(0)'
        }}
      >
        {state === 'loading' ? (
          <>
            <svg
              width="18" height="18" viewBox="0 0 18 18" fill="none"
              style={{ animation: 'spin 1s linear infinite' }}
            >
              <circle cx="9" cy="9" r="7" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              <path
                d="M9 2A7 7 0 0 1 16 9"
                stroke="white" strokeWidth="2" strokeLinecap="round"
              />
            </svg>
            Sending...
          </>
        ) : (
          'Send Message →'
        )}
      </button>
    </form>
  )
}
