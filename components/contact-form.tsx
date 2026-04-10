"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, purpose }),
      });
      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setFullName("");
      setEmail("");
      setPhone("");
      setPurpose("");
    } catch {
      setErrorMessage("Network error. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[1.5rem] border border-emerald-400/25 bg-emerald-500/10 px-6 py-10 text-center">
        <p className="text-lg font-semibold text-emerald-100">Message sent</p>
        <p className="mt-2 text-sm leading-6 text-emerald-200/80">Thanks for reaching out. I’ll get back to you as soon as I can.</p>
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
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(56,189,248,0.45)] disabled:translate-y-0 disabled:opacity-60 disabled:shadow-none sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden />
            Send message
          </>
        )}
      </button>
    </form>
  );
}
