import { NextResponse } from 'next/server';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function GET() {
  return NextResponse.json({
    message: 'Contact API is working',
    timestamp: new Date().toISOString(),
    hasResendKey: !!process.env.RESEND_API_KEY
  });
}

export async function POST(request: Request) {
  try {
    console.log('API route called');
    
    const body = await request.json();
    console.log('Received body:', body);
    
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
      console.log('Honeypot detected');
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      );
    }

    // Validation
    const errors: string[] = [];

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
      console.log('Validation errors:', errors);
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // Check if Resend is available
    let resend: any;
    try {
      const { Resend } = await import('resend');
      resend = new Resend(process.env.RESEND_API_KEY);
      console.log('Resend initialized successfully');
    } catch (importError) {
      console.error('Failed to import Resend:', importError);
      return NextResponse.json(
        { error: 'Email service not available. Please try again later.' },
        { status: 500 }
      );
    }

    // Check API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found in environment variables');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
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
    try {
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'unvacationportal95@gmail.com',
        replyTo: email,
        subject: emailSubject,
        html: emailContent,
      });

      if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
          { error: 'Failed to send email. Please try again later.', details: error },
          { status: 500 }
        );
      }

      console.log('Email sent successfully:', data);
      
      return NextResponse.json(
        { 
          message: 'Email sent successfully',
          id: data?.id 
        },
        { status: 200 }
      );
    } catch (emailError: any) {
      console.error('Email sending error:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.', details: emailError.message },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.', details: error.message },
      { status: 500 }
    );
  }
}