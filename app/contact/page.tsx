import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { PageShell } from "@/components/page-shell";

const contactColumn = "max-w-xl sm:max-w-2xl lg:max-w-3xl";

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        containerClassName={contactColumn}
        eyebrow="Contact"
        title="Send a message"
        description="Tell me a bit about what you’re looking for—freelance work, a full-time conversation, or a collaboration. I’ll reply by email."
      />
      <section className={`mx-auto w-full ${contactColumn} px-6 pb-20 pt-2 md:px-8`}>
        <div className="rounded-[2rem] border border-white/10 bg-white/6 px-8 py-12 shadow-[0_20px_80px_rgba(2,8,23,0.35)] backdrop-blur-xl md:px-12 md:py-14">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </PageShell>
  );
}
