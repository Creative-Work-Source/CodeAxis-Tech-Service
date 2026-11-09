import { Clock, FileText, MessagesSquare } from "lucide-react";
import { Aurora } from "@/components/aurora";
import { ContactForm } from "@/components/contact-form";
import { PageShell } from "@/components/page-shell";
import { founders } from "@/data/portfolio";

export const metadata = { title: "Contact | CodeAxis" };

const steps = [
  { icon: FileText, title: "Send a short brief", text: "What you are building, your timeline and budget." },
  { icon: MessagesSquare, title: "Talk to a co-founder", text: "The co-founder who leads that practice reviews it personally." },
  { icon: Clock, title: "Get a plan in a day", text: "A scoped approach and next steps within one business day." },
];

export default function ContactPage() {
  return (
    <PageShell>
      <section className="grid lg:min-h-[min(calc(100vh-4.5rem),980px)] lg:grid-cols-[1fr_1.1fr]">
        {/* Colourful panel left */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white sm:p-14 lg:p-20">
          <Aurora ribbon className="mix-blend-screen" />
          <div className="grain absolute inset-0" aria-hidden />
          <div className="relative" data-reveal="left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">Contact</p>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] sm:text-6xl">Tell us what you are building.</h1>
            <p className="mt-6 max-w-md text-lg text-white/85">A software platform, a building, or both. Send a brief and we will take it from there.</p>
            <ol className="mt-12 space-y-6">
              {steps.map((s, i) => (
                <li key={s.title} className={`flex gap-4 ${["", "sm:ml-8", "sm:ml-16"][i]}`}>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold">{s.title}</p>
                    <p className="text-sm text-white/75">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-12 flex flex-wrap gap-3">
              {founders.map((f) => (
                <span key={f.name} className="inline-flex items-center gap-2 rounded-full bg-white/15 py-1.5 pl-1.5 pr-4 text-sm backdrop-blur">
                  {f.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={f.photo} alt="" className="h-7 w-7 rounded-full object-cover" />
                  ) : (
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/30 text-[10px] font-bold">
                      {f.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")}
                    </span>
                  )}
                  {f.name} · <span className="text-white/70">{f.focus}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Form right */}
        <div className="relative flex items-center overflow-hidden p-6 sm:p-12 lg:p-20">
          <Aurora className="opacity-40" />
          <div className="card relative w-full p-7 sm:p-10" data-reveal="right">
            <h2 className="text-2xl font-extrabold text-ink">Project enquiry</h2>
            <p className="mt-2 text-sm text-muted">All fields except company are required.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
