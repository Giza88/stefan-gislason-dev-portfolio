"use client";

import { FormEvent, useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";
import RippleButton from "@/components/ui/RippleButton";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/components/ToastProvider";
import { siteConfig } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormStatus = "idle" | "sending" | "success" | "error";

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
};

const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const submitViaMailto = () => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    setForm(initialFormState);
    showToast("Opening your email app…", "info");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    if (!web3formsKey) {
      submitViaMailto();
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio enquiry from ${form.name}`,
          from_name: siteConfig.name,
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Unable to send your message right now.");
      }

      setStatus("success");
      setForm(initialFormState);
      showToast("Message sent. I'll get back to you soon.", "success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      showToast("Email copied to clipboard", "success");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section-padding w-full bg-white">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s connect"
            description="Whether you are hiring, collaborating, or just want to say hello. I would love to hear from you."
          />
        </FadeIn>

        <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-2">
          <FadeIn delay={100} className="card-surface min-w-0 p-6 text-center sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">Get in touch</h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              Reach out directly or use the form to send a message. I aim to respond
              promptly and professionally.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex min-w-0 flex-col items-center gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex min-w-0 items-center justify-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-primary">
                    @
                  </span>
                  <span className="min-w-0 break-all">{siteConfig.email}</span>
                </a>
                {mounted && (
                  <RippleButton
                    type="button"
                    onClick={copyEmail}
                    className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-muted transition-colors hover:border-primary hover:text-primary"
                  >
                    {copied ? "Copied" : "Copy"}
                  </RippleButton>
                )}
              </div>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center justify-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-primary">
                  #
                </span>
                {siteConfig.phone}
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-primary">
                  in
                </span>
                LinkedIn Profile
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-primary">
                  GH
                </span>
                GitHub Profile
              </a>
            </div>
          </FadeIn>

          {mounted ? (
            <FadeIn delay={200}>
            <form onSubmit={handleSubmit} className="card-surface min-w-0 p-6 text-center sm:p-8" noValidate>
              <div className="grid gap-5 text-left">
                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Name
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    minLength={2}
                    disabled={status === "sending"}
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-teal-100 disabled:opacity-60"
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
                    disabled={status === "sending"}
                    value={form.email}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    className="rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-teal-100 disabled:opacity-60"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-foreground">
                  Message
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    disabled={status === "sending"}
                    value={form.message}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        message: event.target.value,
                      }))
                    }
                    className="resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-teal-100 disabled:opacity-60"
                    placeholder="Tell me about your opportunity or project..."
                  />
                </label>
              </div>

              <RippleButton
                type="submit"
                disabled={status === "sending"}
                className="btn-primary btn-interactive mx-auto mt-6 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </RippleButton>

              {status === "success" && (
                <p className="mt-4 text-sm text-primary" role="status">
                  {web3formsKey
                    ? "Thanks, your message was sent successfully. I will get back to you soon."
                    : "Your email client should open shortly. If it does not, please email me directly."}
                </p>
              )}

              {status === "error" && (
                <p className="mt-4 text-sm text-red-600" role="alert">
                  {errorMessage} You can also email me at {siteConfig.email}.
                </p>
              )}

              {!web3formsKey && status === "idle" && (
                <p className="mt-4 text-xs text-muted">
                  Form delivery uses your email app until a Web3Forms key is configured.
                </p>
              )}
            </form>
            </FadeIn>
          ) : (
            <FadeIn delay={200}>
            <div className="card-surface p-6 sm:p-8" aria-hidden="true">
              <div className="space-y-5">
                <div className="h-12 rounded-xl bg-slate-100" />
                <div className="h-12 rounded-xl bg-slate-100" />
                <div className="h-36 rounded-xl bg-slate-100" />
                <div className="h-11 w-36 rounded-full bg-slate-100" />
              </div>
            </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
