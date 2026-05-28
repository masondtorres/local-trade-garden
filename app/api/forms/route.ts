import { NextResponse } from "next/server";
import { email as publicContactEmail } from "@/content/site";

const allowedFormTypes = ["early-access", "partner", "contact"] as const;
type FormType = (typeof allowedFormTypes)[number];

const formSubjects: Record<FormType, string> = {
  "early-access": "Local Trade Garden early access request",
  partner: "Local Trade Garden local partner request",
  contact: "Local Trade Garden contact message",
};

const deliveryNotConfiguredMessage = `Form delivery is not configured yet. Please email ${publicContactEmail} directly.`;
const deliveryFailedMessage = `The form could not be delivered. Please email ${publicContactEmail} directly.`;

function isFormType(value: unknown): value is FormType {
  return typeof value === "string" && allowedFormTypes.includes(value as FormType);
}

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

function formatFields(fields: Record<string, unknown>) {
  return Object.entries(fields)
    .filter(([key]) => key !== "website")
    .map(([key, value]) => `${key}: ${cleanValue(value) || "(blank)"}`)
    .join("\n");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid form request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid form request." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const formType = payload.formType;
  const fields = payload.fields;

  if (!isFormType(formType) || !fields || typeof fields !== "object") {
    return NextResponse.json({ error: "Missing form details." }, { status: 400 });
  }

  const formFields = fields as Record<string, unknown>;
  if (cleanValue(formFields.website)) {
    return NextResponse.json({ ok: true });
  }

  const submitterEmail = cleanValue(formFields.email);
  if (!submitterEmail || !submitterEmail.includes("@")) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FORM_FROM_EMAIL;
  const toEmail = process.env.FORM_TO_EMAIL || publicContactEmail;

  // Form delivery is intentionally disabled unless the deployment has a real
  // email provider configured. This prevents fake success states in production.
  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      {
        error: deliveryNotConfiguredMessage,
      },
      { status: 503 },
    );
  }

  const message = [
    formSubjects[formType],
    "",
    formatFields(formFields),
    "",
    "Compliance note: Local Trade Garden is a connection platform only. Users are responsible for all trade details and legal compliance.",
  ].join("\n");

  let response: Response;

  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: submitterEmail,
        subject: formSubjects[formType],
        text: message,
      }),
    });
  } catch {
    return NextResponse.json({ error: deliveryFailedMessage }, { status: 502 });
  }

  if (!response.ok) {
    return NextResponse.json(
      {
        error: deliveryFailedMessage,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
