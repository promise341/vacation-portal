import { NextResponse } from 'next/server';

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
      honeypot
    } = body;

    if (honeypot && honeypot.trim() !== '') {
      console.log('Honeypot detected');
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      );
    }

    const errors: string[] = [];

    if (!name && !firstName) {
      errors.push('Name is required');
    }
    if (!email) {
      errors.push('Email is required');
    }
    if (!message) {
      errors.push('Message is required');
    }

    if (email && !emailRegex.test(email)) {
      errors.push('Please provide a valid email address');
    }

    if (errors.length > 0) {
      console.log('Validation errors:', errors);
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

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

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found in environment variables');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    const senderName = name || `${firstName} ${lastName}`.trim();
    const emailSubject = subject || 'New Contact Form Submission - UN Vacation Portal';

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #071b3a; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">UN Vacation Portal</h1>
          <p style="margin: 5px 0 0 0; font-size: 14px;">New Form Submission</p>
        </div>

        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #071b3a; margin-top: 0;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #071b3a; width: 120px;">From:</td>
              <td style="padding: 8px;">${senderName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #071b3a;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}" style="color: #0b8fe0;">${email}</a></td>
            </tr>
            ${phoneNumber ? `
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #071b3a;">Phone:</td>
              <td style="padding: 8px;">${phoneNumber}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #071b3a;">Subject:</td>
              <td style="padding: 8px;">${emailSubject}</td>
            </tr>
          </table>

          <h3 style="color: #071b3a; margin: 30px 0 15px 0;">Message:</h3>
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #0b8fe0; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>

        <div style="background: #071b3a; color: #94a3b8; padding: 20px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">This message was sent via the UN Vacation Portal contact form</p>
          <p style="margin: 5px 0 0 0;">Website: <a href="https://www.unvacationportal.online" style="color: #60a5fa;">www.unvacationportal.online</a></p>
        </div>
      </div>
    `;

    try {
      const { data, error } = await resend.emails.send({
        from: 'UN Vacation Portal <noreply@unvacationportal.online>',
        to: 'unvacationportal95@gmail.com',
        replyTo: email,
        subject: `[UN Vacation Portal] ${emailSubject}`,
        html: emailContent,
        headers: {
          'X-Entity-Ref-ID': new Date().getTime().toString(),
        }
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
