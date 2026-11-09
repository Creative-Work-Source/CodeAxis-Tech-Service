"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

const practices = ["Software & AI", "Architecture & BIM", "Civil engineering", "Not sure yet"];

type Status = { kind: "idle" | "sending" | "sent" | "error"; message?: string };

export function ContactForm() {
  const [practice, setPractice] = useState(practices[0]);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, practice }),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error || "Something went wrong. Please try again.");
      form.reset();
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "Something went wrong." });
    }
  }

  if (status.kind === "sent") {
    return (
      <div className="flex flex-col items-center py-16 text-center">
        <CheckCircle2 className="h-14 w-14 text-emerald-500" />
        <h3 className="mt-5 text-2xl font-extrabold text-ink">Thank you, your brief is with us.</h3>
        <p className="mt-3 max-w-md text-muted">The right co-founder will reply within one business day.</p>
        <button type="button" onClick={() => setStatus({ kind: "idle" })} className="btn-ghost mt-8">
          Send another enquiry
        </button>
      </div>
    );
  }

  const field =
    "mt-2 w-full rounded-2xl border border-line bg-surface-2/60 px-4 py-3 text-sm text-ink placeholder:text-faint transition focus:border-indigo-400 focus:bg-surface focus:outline-none focus:ring-4 focus:ring-indigo-500/10";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot: hidden from people, filled in by bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Name
          <input name="name" required maxLength={120} className={field} placeholder="Your name" />
        </label>
        <label className="block text-sm font-medium text-ink">
          Company
          <input name="company" maxLength={160} className={field} placeholder="Company (optional)" />
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">
        Work email
        <input name="email" type="email" required maxLength={200} className={field} placeholder="you@company.com" />
      </label>
      <fieldset>
        <legend className="text-sm font-medium text-ink">What do you need?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {practices.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPractice(p)}
              aria-pressed={practice === p}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                practice === p
                  ? "border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md"
                  : "border-line bg-surface text-muted hover:text-ink"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </fieldset>
      <label className="block text-sm font-medium text-ink">
        Project details
        <textarea name="message" required rows={6} maxLength={5000} className={field} placeholder="Tell us about the project, timeline and budget." />
      </label>
      {status.kind === "error" && (
        <p role="alert" className="rounded-2xl bg-rose-500/10 px-4 py-3 text-sm text-rose-600 dark:text-rose-300">
          {status.message}
        </p>
      )}
      <button type="submit" disabled={status.kind === "sending"} className="btn-primary disabled:opacity-70">
        {status.kind === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {status.kind === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
