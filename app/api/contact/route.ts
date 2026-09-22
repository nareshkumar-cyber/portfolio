import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (name, email, and message)." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["nk6404250@gmail.com"],
      replyTo: email,
      subject: `🎯 New Portfolio Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #05070a; color: #f3f6f8; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #090e15; border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 16px; padding: 32px; }
            .badge { display: inline-block; padding: 4px 12px; border-radius: 9999px; background: rgba(209, 255, 86, 0.1); color: #d1ff56; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 20px; }
            h1 { font-size: 22px; margin: 0 0 16px 0; color: #ffffff; }
            .field { margin-bottom: 20px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; margin-bottom: 4px; }
            .value { font-size: 15px; color: #ffffff; font-weight: 500; }
            .message-box { background: #05070a; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 16px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #e2e8f0; }
            .footer { margin-top: 32px; padding-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.08); font-size: 12px; color: #64748b; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="badge">Direct Transmission • Portfolio</div>
            <h1>New Client / Recruiter Transmission</h1>
            
            <div class="field">
              <div class="label">Sender Name</div>
              <div class="value">${escapeHtml(name)}</div>
            </div>

            <div class="field">
              <div class="label">Sender Email</div>
              <div class="value"><a href="mailto:${escapeHtml(email)}" style="color: #00f2fe; text-decoration: none;">${escapeHtml(email)}</a></div>
            </div>

            <div class="field">
              <div class="label">Inquiry / Requirements</div>
              <div class="message-box">${escapeHtml(message)}</div>
            </div>

            <div class="footer">
              Received via Nareshkumar A's Portfolio Terminal • Hit "Reply" to respond directly to ${escapeHtml(name)}.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: unknown) {
    console.error("Contact API error:", err);
    const errorMessage = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
