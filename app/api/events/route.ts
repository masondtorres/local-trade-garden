import { NextResponse } from "next/server";
import { mutateStore } from "@/lib/store";
import { cleanText, nowIso } from "@/lib/utils";
const ALLOWED = new Set(["search","location_search","listing_view","listing_create_start","listing_share","account_create"]);
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const name = cleanText(body.name, 40);
  if (!ALLOWED.has(name)) return NextResponse.json({ ok: false }, { status: 400 });
  await mutateStore((store) => { store.events.push({ name, at: nowIso(), meta: cleanText(body.meta, 80) }); if (store.events.length > 2000) store.events = store.events.slice(-1500); });
  return NextResponse.json({ ok: true });
}
