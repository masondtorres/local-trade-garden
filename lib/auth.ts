import { cookies } from "next/headers";
import { signValue, unsignValue } from "@/lib/utils";
import { loadStore } from "@/lib/store";
import type { PublicUser, User } from "@/lib/types";

const COOKIE = "ltg_session";

export function authSecret() {
  return process.env.AUTH_SECRET || "local-trade-garden-dev-secret-change-me";
}

export function toPublicUser(user: User): PublicUser {
  const { email: _e, passwordHash: _p, ...rest } = user;
  return rest;
}

export async function setSession(userId: string) {
  const jar = await cookies();
  jar.set(COOKIE, signValue(userId, authSecret()), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function clearSession() {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export async function currentUser(): Promise<User | null> {
  const jar = await cookies();
  const raw = jar.get(COOKIE)?.value;
  if (!raw) return null;
  const userId = unsignValue(raw, authSecret());
  if (!userId) return null;
  const store = await loadStore();
  return store.users.find((u) => u.id === userId) ?? null;
}
