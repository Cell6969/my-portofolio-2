"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, MapPin, Send } from "lucide-react";
import { siteConfig, socialLinks } from "@/constants/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

type FormStatus = "idle" | "submitting" | "success";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialFormData: FormData = { name: "", email: "", message: "" };

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData(initialFormData);
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      className="relative border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project in mind or looking for a technical consultant? I'd love to hear from you."
          align="center"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <Card className="p-6">
              <h3 className="text-lg font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Whether you're looking to modernize legacy systems, build a new
                enterprise application, or need technical consulting, I'm here
                to help.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm transition-colors hover:text-foreground text-muted-foreground"
                >
                  <Mail className="h-5 w-5" />
                  {siteConfig.email}
                </a>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  {siteConfig.location}
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-6">
                <p className="mb-3 text-sm font-medium">Follow me</p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                      aria-label={link.label}
                    >
                      <link.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Available for projects</p>
                  <p className="text-xs text-muted-foreground">
                    Currently accepting new opportunities
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      id="name-error"
                      className="text-xs text-destructive"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      id="email-error"
                      className="text-xs text-destructive"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      id="message-error"
                      className="text-xs text-destructive"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "submitting"}
              >
                <AnimatePresence mode="wait">
                  {status === "submitting" ? (
                    <motion.span
                      key="submitting"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                      Sending...
                    </motion.span>
                  ) : status === "success" ? (
                    <motion.span
                      key="success"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Check className="h-4 w-4" />
                      Message sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
