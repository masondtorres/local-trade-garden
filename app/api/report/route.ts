import { NextResponse } from "next/server";
import { mutateStore } from "@/lib/store";
import { cleanText, id, nowIso } from "@/lib/utils";
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const reason = cleanText(body.reason, 80);
  if (!reason) return NextResponse.json({ error: "Choose a reason." }, { status: 400 });
  await mutateStore((store) => { store.reports.push({ id: id("r"), listingId: cleanText(body.listingId, 40) || undefined, userId: cleanText(body.userId, 40) || undefined, reason, details: cleanText(body.details, 800), createdAt: nowIso() }); store.events.push({ name: "report", at: nowIso(), meta: reason }); });
  return NextResponse.json({ ok: true });
}
