"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { siteInfo } from "@/data/portfolio";

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    const name = fullName.trim();
    const addr = email.trim();
    const phoneTrim = phone.trim();
    const msg = purpose.trim();

    if (name.length < 2) {
      setErrorMessage("Please enter your full name.");
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(addr)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    if (msg.length < 10) {
      setErrorMessage("Please describe your contact purpose in a bit more detail (at least 10 characters).");
      setStatus("error");
      return;
    }

    const subject = `Portfolio contact: ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${addr}`,
      phoneTrim ? `Phone: ${phoneTrim}` : "Phone: (not provided)",
      "",
      "Message:",
      msg,
    ].join("\n");

    const mailto = `mailto:${encodeURIComponent(siteInfo.email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Practical limit for mailto URLs in many clients/browsers
    if (mailto.length > 1800) {
      setErrorMessage(
        "Your message is too long to open automatically. Please copy it and email me using the address in the footer.",
      );
      setStatus("error");
      return;
    }

    window.location.href = mailto;
    setStatus("success");
    setFullName("");
    setEmail("");
    setPhone("");
    setPurpose("");
  }

  if (status === "success") {
    return (
      <div className="rounded-[1.5rem] border border-emerald-400/25 bg-emerald-500/10 px-6 py-10 text-center">
        <p className="text-lg font-semibold text-emerald-100">Ready to send</p>
        <p className="mt-2 text-sm leading-6 text-emerald-200/80">
          Your email app should open with the message filled in—press send there to deliver it. If nothing opened, use the email link in the site footer.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-cyan-200 underline underline-offset-4 transition hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-slate-200">
          Full name <span className="text-red-400">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none ring-cyan-400/30 transition focus:border-cyan-400/40 focus:ring-2"
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-200">
          Email address <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none ring-cyan-400/30 transition focus:border-cyan-400/40 focus:ring-2"
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-200">
          Phone number <span className="text-slate-500">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none ring-cyan-400/30 transition focus:border-cyan-400/40 focus:ring-2"
          placeholder="+1 …"
        />
      </div>

      <div>
        <label htmlFor="purpose" className="block text-sm font-medium text-slate-200">
          Contact purpose <span className="text-red-400">*</span>
        </label>
        <textarea
          id="purpose"
          name="purpose"
          required
          rows={5}
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none ring-cyan-400/30 transition focus:border-cyan-400/40 focus:ring-2"
          placeholder="e.g. Freelance project inquiry, full-time role, collaboration…"
        />
      </div>

      {status === "error" && errorMessage && (
        <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(56,189,248,0.45)] sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden />
        Open in email app
      </button>
    </form>
  );
}
