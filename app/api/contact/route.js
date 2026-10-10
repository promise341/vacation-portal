import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      message, 
      firstName,
      lastName,
      phoneNumber,
      subject,
      honeypot // Hidden field to catch bots
    } = body;

    // Check honeypot field - if filled, it's likely a bot
    if (honeypot && honeypot.trim() !== '') {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      );
    }

    // Validation
    const errors = [];

    // Check required fields
    if (!name && !firstName) {
      errors.push('Name is required');
    }
    if (!email) {
      errors.push('Email is required');
    }
    if (!message) {
      errors.push('Message is required');
    }

    // Validate email format
    if (email && !emailRegex.test(email)) {
      errors.push('Please provide a valid email address');
    }

    // Return validation errors
    if (errors.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // Prepare email content
    const senderName = name || `${firstName} ${lastName}`.trim();
    const emailSubject = subject || 'New Contact Form Submission - UN Vacation Portal';
    
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${senderName}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phoneNumber ? `<p><strong>Phone:</strong> ${phoneNumber}</p>` : ''}
      <p><strong>Subject:</strong> ${emailSubject}</p>
      
      <h3>Message:</h3>
      <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${message.replace(/\n/g, '<br>')}
      </div>
      
      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        This message was sent via the UN Vacation Portal contact form.
      </p>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'promiseakerele341@gmail.com',
      replyTo: email,
      subject: emailSubject,
      html: emailContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        id: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}