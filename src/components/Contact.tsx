"use client";

import { FormEvent, useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm(initialFormState);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s connect"
          description="Whether you are hiring, collaborating, or just want to say hello — I would love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card-surface p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">Get in touch</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Reach out directly or use the form to send a message. I aim to respond
              promptly and professionally.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex flex-1 items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-primary">
                    @
                  </span>
                  {siteConfig.email}
                </a>
                {mounted && (
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-muted transition-colors hover:border-primary hover:text-primary"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                )}
              </div>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-primary">
                  in
                </span>
                LinkedIn Profile
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-primary">
                  GH
                </span>
                GitHub Profile
              </a>
            </div>
          </div>

          {mounted ? (
            <form onSubmit={handleSubmit} className="card-surface p-6 sm:p-8">
              <div className="grid gap-5">
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Name
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-blue-100"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Email
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-blue-100"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        message: event.target.value,
                      }))
                    }
                    className="resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-blue-100"
                    placeholder="Tell me about your opportunity or project..."
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                Send Message
              </button>

              {submitted && (
                <p className="mt-4 text-sm text-primary" role="status">
                  Your email client should open shortly. If it does not, please email
                  me directly at {siteConfig.email}.
                </p>
              )}
            </form>
          ) : (
            <div className="card-surface p-6 sm:p-8" aria-hidden="true">
              <div className="space-y-5">
                <div className="h-12 rounded-xl bg-slate-100" />
                <div className="h-12 rounded-xl bg-slate-100" />
                <div className="h-36 rounded-xl bg-slate-100" />
                <div className="h-11 w-36 rounded-full bg-slate-100" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
