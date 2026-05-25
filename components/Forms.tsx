"use client";

import { FormEvent, useState } from "react";
import { email, growerTypes, interestTypes } from "@/content/site";

type Field =
  | { name: string; label: string; type?: "text" | "email"; required?: boolean }
  | { name: string; label: string; type: "textarea"; required?: boolean }
  | {
      name: string;
      label: string;
      type: "select";
      options: string[];
      required?: boolean;
    };

const baseInput =
  "focus-ring min-h-12 w-full rounded-lg border border-soil/20 bg-white px-4 py-3 text-[17px] text-charcoal transition hover:border-garden/45";

function FormField({ field }: { field: Field }) {
  const id = field.name;
  const requiredMark = field.required ? <span className="text-warning"> *</span> : null;

  if (field.type === "textarea") {
    return (
      <label className="block text-sm font-bold text-charcoal" htmlFor={id}>
        {field.label}
        {requiredMark}
        <textarea id={id} name={id} rows={4} className={`${baseInput} mt-2`} required={field.required} />
      </label>
    );
  }

  if (field.type === "select") {
    return (
      <label className="block text-sm font-bold text-charcoal" htmlFor={id}>
        {field.label}
        {requiredMark}
        <select id={id} name={id} className={`${baseInput} mt-2`} required={field.required} defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          {field.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
    );
  }

  return (
    <label className="block text-sm font-bold text-charcoal" htmlFor={id}>
      {field.label}
      {requiredMark}
      <input id={id} name={id} type={field.type ?? "text"} className={`${baseInput} mt-2`} required={field.required} />
    </label>
  );
}

function MailtoForm({
  title,
  subject,
  fields,
  button,
  success,
  note,
}: {
  title: string;
  subject: string;
  fields: Field[];
  button: string;
  success: string;
  note: string;
}) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = fields
      .map((field) => `${field.label}: ${data.get(field.name) || ""}`)
      .join("\n");

    // TODO: Replace this mailto fallback with Formspree, Netlify Forms, Resend,
    // or a Next.js API route when a production form backend is selected.
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form
      className="rounded-2xl border border-soil/20 bg-card p-5 sm:p-7"
      onSubmit={submit}
      aria-label={title}
    >
      <div className="mb-5 rounded-xl border border-soil/15 bg-linen p-4 text-base leading-7 text-deep">
        <p className="font-display text-xl font-bold">Before you send</p>
        <p className="mt-1 font-semibold">{note}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.name}
            className={field.type === "textarea" ? "sm:col-span-2" : ""}
          >
            <FormField field={field} />
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="focus-ring mt-5 min-h-12 w-full rounded-full bg-garden px-7 py-3 text-base font-black text-white transition hover:bg-deep sm:w-auto"
      >
        {button}
      </button>
      {sent ? (
        <p aria-live="polite" className="mt-4 rounded-xl border border-garden/25 bg-garden/10 p-3 text-base font-bold text-deep">
          {success}
        </p>
      ) : null}
      <p className="mt-4 text-sm font-semibold leading-6 text-muted">
        We will use this to contact you about Local Trade Garden. No spam list,
        no selling your information.
      </p>
    </form>
  );
}

export function EarlyAccessForm() {
  return (
    <MailtoForm
      title="Early access form"
      subject="Local Trade Garden Early Access"
      button="Join the First Local List"
      note="This opens your email app with a draft to hotpublishers@gmail.com. Send that email and you are done."
      success="Your email app should now have a draft ready. Send it to finish joining the launch list."
      fields={[
        { name: "firstName", label: "First name", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "city", label: "City", required: true },
        { name: "state", label: "State", required: true },
        { name: "growerType", label: "Grower type", type: "select", options: growerTypes, required: true },
        { name: "usuallyGrow", label: "What do you usually grow or trade?", required: true },
        { name: "interestType", label: "Interest type", type: "select", options: interestTypes, required: true },
        { name: "message", label: "Message", type: "textarea" },
      ]}
    />
  );
}

export function PartnerForm() {
  return (
    <MailtoForm
      title="Local partner form"
      subject="Local Trade Garden Partner Interest"
      button="Become a Local Partner"
      note="This opens your email app with a draft to hotpublishers@gmail.com. Send it and we will follow up."
      success="Your email app should now have a partner message ready. Send it and we will follow up."
      fields={[
        { name: "name", label: "Name", required: true },
        { name: "organization", label: "Business or organization", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "region", label: "City / region", required: true },
        { name: "organizationType", label: "Organization type", required: true },
        { name: "interest", label: "Interest", required: true },
        { name: "message", label: "Message", type: "textarea" },
      ]}
    />
  );
}

export function ContactForm() {
  return (
    <MailtoForm
      title="Contact form"
      subject="Local Trade Garden Contact"
      button="Send Message"
      note="This opens your email app with a draft to hotpublishers@gmail.com. Send it from there."
      success="Your message is ready in your email app. Send it from there so it reaches Local Trade Garden."
      fields={[
        { name: "name", label: "Name", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "Message", type: "textarea", required: true },
      ]}
    />
  );
}
