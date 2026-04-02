import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, company, service, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Required fields missing' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'HypeHouse Website <noreply@hypehouse.digital>',
      to: process.env.CONTACT_EMAIL!,
      reply_to: email,
      subject: `New enquiry from ${name} — ${company || 'No company'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #020008; color: #ffffff; padding: 32px; border-radius: 8px;">
          <h2 style="color: #C084FC; margin-bottom: 24px;">New Project Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: rgba(255,255,255,0.5); width: 120px;"><strong>Name</strong></td>
              <td style="padding: 10px 0; color: white;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: rgba(255,255,255,0.5);"><strong>Email</strong></td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #C084FC;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: rgba(255,255,255,0.5);"><strong>Company</strong></td>
              <td style="padding: 10px 0; color: white;">${company || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: rgba(255,255,255,0.5);"><strong>Service</strong></td>
              <td style="padding: 10px 0; color: white;">${service || '—'}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #9f01f6;">
            <p style="color: rgba(255,255,255,0.5); margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
            <p style="color: white; line-height: 1.6; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
