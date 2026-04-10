import { NextResponse } from "next/server";

type Body = {
  fullName?: string;
  email?: string;
  phone?: string;
  purpose?: string;
};

function validate(body: Body): { ok: true; data: Required<Body> } | { ok: false; message: string } {
  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const purpose = typeof body.purpose === "string" ? body.purpose.trim() : "";

  if (fullName.length < 2) return { ok: false, message: "Please enter your full name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, message: "Please enter a valid email address." };
  if (purpose.length < 10) return { ok: false, message: "Please describe your contact purpose in a bit more detail (at least 10 characters)." };

  return { ok: true, data: { fullName, email, phone, purpose } };
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const checked = validate(body);
  if (!checked.ok) {
    return NextResponse.json({ error: checked.message }, { status: 400 });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      {
        error:
          "Contact form is not configured. Add WEB3FORMS_ACCESS_KEY to your environment (get a free key at web3forms.com).",
      },
      { status: 503 },
    );
  }

  const { fullName, email, phone, purpose } = checked.data;
  const message = [
    `Contact purpose:`,
    purpose,
    "",
    phone ? `Phone: ${phone}` : "Phone: (not provided)",
  ].join("\n");

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Portfolio contact: ${fullName}`,
      name: fullName,
      email,
      message,
    }),
  });

  const data = (await res.json()) as { success?: boolean; message?: string };

  if (!res.ok || !data.success) {
    return NextResponse.json(
      { error: typeof data.message === "string" ? data.message : "Could not send your message. Try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
