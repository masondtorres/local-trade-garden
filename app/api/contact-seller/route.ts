import { NextResponse } from "next/server";
import { currentUser } from "@/lib/auth";
import { mutateStore } from "@/lib/store";
import { cleanText, id, nowIso } from "@/lib/utils";
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const listingId = cleanText(body.listingId, 40); const fromName = cleanText(body.fromName, 80); const fromEmail = cleanText(body.fromEmail, 120).toLowerCase(); const message = cleanText(body.body, 1500);
  if (!listingId || !fromName || !fromEmail.includes("@") || message.length < 8) return NextResponse.json({ error: "Add your name, email, and a short message." }, { status: 400 });
  const user = await currentUser();
  try {
    await mutateStore((store) => {
      const listing = store.listings.find((item) => item.id === listingId || item.slug === listingId);
      if (!listing) throw new Error("Listing not found.");
      store.messages.push({ id: id("m"), listingId: listing.id, fromUserId: user?.id ?? null, fromName, fromEmail, body: message, createdAt: nowIso() });
      store.events.push({ name: "seller_contact", at: nowIso(), meta: listing.id });
    });
  } catch (err) { return NextResponse.json({ error: err instanceof Error ? err.message : "Failed" }, { status: 404 }); }
  return NextResponse.json({ ok: true, notice: "Message saved for the seller. Local Trade Garden does not broker the deal." });
}
