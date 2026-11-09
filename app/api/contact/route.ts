import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const PRACTICES = new Set(["Software & AI", "Architecture & BIM", "Civil engineering", "Not sure yet"]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

/**
 * Sends an enquiry to the company inbox. The inbox address and SMTP credentials live only in
 * server environment variables (see .env.example), so no email address is ever exposed on the site.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot filled in: pretend success so bots learn nothing.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const company = clean(body.company, 160);
  const email = clean(body.email, 200);
  const message = clean(body.message, 5000);
  const practice = PRACTICES.has(String(body.practice)) ? String(body.practice) : "Not sure yet";

  if (!name || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please fill in your name, a valid email and project details." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_INBOX } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_INBOX) {
    return NextResponse.json(
      { error: "Our enquiry inbox is being set up. Please try again shortly." },
      { status: 503 },
    );
  }

  const port = Number(SMTP_PORT || 587);
  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transport.sendMail({
      from: `"CodeAxis website" <${SMTP_USER}>`,
      to: CONTACT_INBOX,
      replyTo: { name, address: email },
      subject: `New enquiry (${practice}) from ${name}`,
      text: [`Name: ${name}`, `Company: ${company || "-"}`, `Email: ${email}`, `Practice: ${practice}`, "", message].join("\n"),
    });
  } catch {
    return NextResponse.json({ error: "We could not send your message right now. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
