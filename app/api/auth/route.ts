import { NextResponse } from "next/server";
import { clearSession, currentUser, setSession, toPublicUser } from "@/lib/auth";
import { mutateStore } from "@/lib/store";
import { hashPassword, id, nowIso, verifyPassword, cleanText } from "@/lib/utils";
export async function GET() {
  const user = await currentUser();
  if (!user) return NextResponse.json({ user: null });
  return NextResponse.json({ user: toPublicUser(user), email: user.email });
}
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const action = String(body.action ?? "");
  if (action === "logout") { await clearSession(); return NextResponse.json({ ok: true }); }
  const email = cleanText(body.email, 120).toLowerCase();
  const password = String(body.password ?? "");
  const displayName = cleanText(body.displayName, 60);
  if (!email.includes("@") || password.length < 8) return NextResponse.json({ error: "Use a valid email and an 8+ character password." }, { status: 400 });
  if (action === "signup") {
    if (!displayName) return NextResponse.json({ error: "Add a display name." }, { status: 400 });
    try {
      const user = await mutateStore((store) => {
        if (store.users.some((u) => u.email === email)) throw new Error("That email already has an account.");
        const created = { id: id("u"), email, displayName, passwordHash: hashPassword(password), city: cleanText(body.city, 80), region: cleanText(body.region, 40) || "TN", postalCode: cleanText(body.postalCode, 12), neighborhood: cleanText(body.neighborhood, 80), bio: cleanText(body.bio, 400), createdAt: nowIso() };
        store.users.push(created); store.events.push({ name: "account_create", at: nowIso(), meta: created.id }); return created;
      });
      await setSession(user.id);
      return NextResponse.json({ user: toPublicUser(user), email: user.email });
    } catch (err) { return NextResponse.json({ error: err instanceof Error ? err.message : "Could not create account." }, { status: 409 }); }
  }
  const found = await mutateStore((store) => store.users.find((u) => u.email === email) ?? null);
  if (!found || !verifyPassword(password, found.passwordHash)) return NextResponse.json({ error: "Email or password is wrong." }, { status: 401 });
  await setSession(found.id);
  return NextResponse.json({ user: toPublicUser(found), email: found.email });
}
