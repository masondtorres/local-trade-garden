import { NextResponse } from "next/server";
import { currentUser } from "@/lib/auth";
import { mutateStore } from "@/lib/store";
export async function GET() {
  const user = await currentUser();
  if (!user) return NextResponse.json({ ids: [] });
  const ids = await mutateStore((store) => store.favorites[user.id] ?? []);
  return NextResponse.json({ ids });
}
export async function POST(req: Request) {
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Sign in to save listings." }, { status: 401 });
  const body = await req.json().catch(() => ({}));
  const listingId = String(body.listingId ?? "");
  const ids = await mutateStore((store) => { const current = new Set(store.favorites[user.id] ?? []); if (current.has(listingId)) current.delete(listingId); else current.add(listingId); store.favorites[user.id] = [...current]; return store.favorites[user.id]; });
  return NextResponse.json({ ids });
}
