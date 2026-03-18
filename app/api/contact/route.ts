import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const contactTo = process.env.CONTACT_EMAIL || "contact@simpleraai.com";

  const body = await req.json();
  const { name, email, company, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Simplera AI <contact@simpleraai.com>",
    to: contactTo,
    replyTo: email,
    subject: `New contact from ${name}${company ? ` (${company})` : ""}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Company:</strong> ${company || "—"}</p>
      <hr/>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
