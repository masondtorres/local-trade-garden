"use client";

import { FormEvent, useState } from "react";
import { email } from "@/content/site";

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
  "focus-ring min-h-12 w-full rounded-md border-2 border-soil/20 bg-white px-4 py-3 text-[17px] text-charcoal transition hover:border-garden/45";

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

function LocalStateForm({
  title,
  formType,
  fields,
  button,
  success,
  note,
}: {
  title: string;
  formType: "early-access" | "partner" | "contact";
  fields: Field[];
  button: string;
  success: string;
  note: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setMessage("");

    try {
      const form = event.currentTarget;
      const data = new FormData(form);
      const requiredMissing = fields.some(
        (field) => field.required && !String(data.get(field.name) || "").trim(),
      );

      if (requiredMissing) {
        setMessage("Please fill in the required fields and try again.");
        setStatus("error");
        return;
      }

      setStatus("submitting");
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType,
          fields: Object.fromEntries(data.entries()),
        }),
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setMessage(result.error || `The form could not be delivered. Please email ${email} directly.`);
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setMessage(`The form could not be delivered. Please email ${email} directly.`);
      setStatus("error");
    }
  }

  return (
    <form
      className="rounded-[20px] border border-soil/20 bg-card p-5 shadow-card sm:p-7"
      onSubmit={submit}
      aria-label={title}
    >
      <div className="mb-5 border-2 border-soil/15 bg-linen p-4 text-base leading-7 text-deep">
        <p className="font-display text-2xl font-normal">Before you send</p>
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
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="focus-ring mt-5 min-h-12 w-full rounded-lg border-2 border-deep bg-garden px-7 py-3 text-base font-bold text-white shadow-card transition hover:bg-deep sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : button}
      </button>
      {status === "success" ? (
        <p aria-live="polite" className="mt-4 rounded-xl border border-garden/25 bg-garden/10 p-3 text-base font-bold text-deep">
          {success}
        </p>
      ) : null}
      {status === "error" ? (
        <p aria-live="polite" className="mt-4 rounded-xl border border-warning/25 bg-warning/10 p-3 text-base font-bold text-warning">
          {message || "Something went wrong. Please check the required fields and try again."}
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
    <LocalStateForm
      title="Early access form"
      formType="early-access"
      button="Join Early Access"
      note="Join the first local pilot list. Help shape a trade site for things made, grown, raised, repaired or earned through honest work."
      success="Request delivered. We will follow up when the first local pilot group is ready."
      fields={[
        { name: "name", label: "Name", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "city", label: "City", required: true },
        { name: "state", label: "State", required: true },
        { name: "firstTrade", label: "What may you trade?", required: true },
        {
          name: "role",
          label: "How would you take part?",
          type: "select",
          options: ["Trader", "Worker", "Local partner", "Just interested"],
          required: true,
        },
        { name: "message", label: "Message", type: "textarea" },
      ]}
    />
  );
}

export function PartnerForm() {
  return (
    <LocalStateForm
      title="Local partner form"
      formType="partner"
      button="Become a Local Partner"
      note="Submit the form to share local partner interest."
      success="Partner request received. We will follow up as the first local launch takes shape."
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
    <LocalStateForm
      title="Contact form"
      formType="contact"
      button="Send Message"
      note="Ask a simple question, report a concern or reach out about local partner interest."
      success="Message received. We will follow up by email."
      fields={[
        { name: "name", label: "Name", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "message", label: "Message", type: "textarea", required: true },
      ]}
    />
  );
}
