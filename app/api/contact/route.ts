// app/api/contact/route.ts - Universal contact API
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { provider, data } = await request.json();

    switch (provider) {
      case 'resend':
        return await handleResend(data);
      case 'sendgrid':
        return await handleSendGrid(data);
      case 'mailchimp':
        return await handleMailchimp(data);
      case 'convertkit':
        return await handleConvertKit(data);
      default:
        return NextResponse.json(
          { error: 'Invalid provider' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function handleResend(data: Record<string, string>) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'contact@yourdomain.com',
      to: process.env.CONTACT_EMAIL || 'hello@yourdomain.com',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send email');
  }

  return NextResponse.json({ success: true });
}

async function handleSendGrid(data: Record<string, string>) {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  
  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [{
        to: [{ email: process.env.CONTACT_EMAIL || 'hello@yourdomain.com' }],
        subject: `New Contact: ${data.name}`,
      }],
      from: { email: 'contact@yourdomain.com' },
      content: [{
        type: 'text/html',
        value: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      }],
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send email');
  }

  return NextResponse.json({ success: true });
}

async function handleMailchimp(data: Record<string, string>) {
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., 'us1'
  
  const response = await fetch(
    `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
      },
      body: JSON.stringify({
        email_address: data.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: data.name?.split(' ')[0] || '',
          LNAME: data.name?.split(' ').slice(1).join(' ') || '',
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || 'Failed to subscribe');
  }

  return NextResponse.json({ success: true });
}

async function handleConvertKit(data: Record<string, string>) {
  const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
  const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;
  
  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: CONVERTKIT_API_KEY,
        email: data.email,
        first_name: data.name?.split(' ')[0] || '',
      }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to subscribe');
  }

  return NextResponse.json({ success: true });
}
