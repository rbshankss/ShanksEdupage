import { Resend } from 'resend';

export async function POST(req) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(apiKey);
    const { name, email, number, yearLevel, subjects } = await req.json();

    if (!email || !name) {
      return new Response(JSON.stringify({ error: 'Name and Email are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 1. Send automated response to the user
    const userEmail = await resend.emails.send({
      from: 'Shanks Education <contact@shanks-education.com>',
      to: [email],
      subject: 'Thanks for reaching out! - Shanks Education',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #fdfdfd;">
          <h2 style="color: #dc2626; margin-bottom: 20px;">Hi ${name},</h2>
          <p style="font-size: 16px; line-height: 1.5; color: #333;">Thanks for reaching out to us! We've received your information and inquiry regarding tutoring.</p>
          <p style="font-size: 16px; line-height: 1.5; color: #333;">We will review your details and <strong>get back to you as soon as possible</strong> to discuss how we can help you achieve your goals.</p>
          
          <div style="margin: 30px 0; padding: 15px; background-color: #fff; border-left: 4px solid #dc2626; font-style: italic;">
            "Hard Work Determines Results"
          </div>

          <p style="font-size: 16px; color: #333;">Talk soon,<br><strong>Shanks Education</strong></p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">This is an automated response to confirm we've received your message.</p>
        </div>
      `,
    });

    console.log('User email response:', userEmail);

    // 2. Send a notification to yourself
    const adminEmail = await resend.emails.send({
      from: 'Shanks Education System <system@shanks-education.com>',
      to: ['shanks.education.au@gmail.com'],
      subject: `New Lead: ${name} (${yearLevel})`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #dc2626;">New Tutoring Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${number}</p>
          <p><strong>Year Level:</strong> ${yearLevel}</p>
          <p><strong>Subjects:</strong> ${subjects}</p>
        </div>
      `,
    });

    console.log('Admin email response:', adminEmail);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
